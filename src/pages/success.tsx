import { ImageContainer, SuccessContainer } from '../styles/pages/success'

import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import Head from 'next/head'
import { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

interface SuccessProps {
	customerName: string
	// receber vários produtos
	products: {
		name: string
		imageUrl: string
	}[]
}


export default function Success({ customerName, products }: SuccessProps) {
	return (
		<>
			<Head>
				<title>Compra efetuada | Ignite Shop</title>

				<meta name="robots" content="noindex" />
			</Head>

			<SuccessContainer>
				<ImageContainer>
					{products.map((product => {
						return <Image key={Math.floor(Math.random() * 8372167)} src={product.imageUrl} width={120} height={110} alt="" />
					}))}
				</ImageContainer>

				<h1>Compra efetuada</h1>

				<p>
					Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa.
				</p>

				<Link href="/">Voltar ao catálogo</Link>
			</SuccessContainer>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
	if (!query.session_id) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		}
	}

	const sessionId = String(query.session_id)

	const session = await stripe.checkout.sessions.retrieve(sessionId, {
		expand: ['line_items', 'line_items.data.price.product'],
	})

	const customerName = session.customer_details?.name

	const products = session.line_items?.data.map((item) => {
		const product = item.price?.product as Stripe.Product
		const toReturn = []
		const quantity = item.quantity!

		for (let index = 0; index < quantity; index++) {
			toReturn.push(
				{
					name: product.name,
					imageUrl: product.images[0],
				}
			)
		}
		return toReturn
	}).flat()

	return {
		props: {
			customerName,
			products,
		},
	}
}
