import Stripe from 'stripe'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'

import {
	ImageContainer,
	ProductContainer,
	ProductDetails,
} from '../../styles/pages/product'
import Head from 'next/head'
import priceFormatter from '../../helpers/priceFormatter'
import { useShoppingCart } from 'use-shopping-cart'

interface ProductProps {
	id: string
	name: string
	imageUrl: string
	price: number
	description: string
	price_id: string
	price_data: Stripe.Price
	product_data: Stripe.Product
}

export default function Product(product: ProductProps) {
	const { addItem } = useShoppingCart()

	function handleToCartButton(product: ProductProps) {
		addItem({
			id: product.id,
			currency: 'BRL',
			name: product.name,
			price: product.price,
			price_id: product.price_id,
			price_data: product.price_data,
			product_data: product.product_data,
		}, { count: 1 })
	}

	return (
		<>
			<Head>
				<title>{product.name} | Produto</title>
			</Head>

			<ProductContainer>
				<ImageContainer>
					<Image src={product.imageUrl} width={520} height={480} alt="" />
				</ImageContainer>

				<ProductDetails>
					<h1>{product.name}</h1>
					<span>{priceFormatter(product.price)}</span>
					<p>{product.description}</p>

					<button
						onClick={() => {
							handleToCartButton(product)
						}}
					>
						Colocar na sacola
					</button>
				</ProductDetails>
			</ProductContainer>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{
				params: { id: 'prod_NBDR9vzPpX6jso' },
			},
		],
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const productId = String(params!.id)
	const product = await stripe.products.retrieve(productId, {
		expand: ['default_price'],
	})
	const price = product.default_price as Stripe.Price

	return {
		props: {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price: price.unit_amount,
			description: product.description,
			price_id: price.id,
			price_data: price,
			product_data: product,
		},
		revalidate: 60 * 60 * 1, // 1 hour to render again
	}
}
