import { HomeContainer, Product } from '../styles/pages/home'

import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'
import Head from 'next/head'
import { Button } from '../components/Button/styles'
import { CaretLeft, CaretRight, Handbag } from 'phosphor-react'
import { useShoppingCart } from 'use-shopping-cart'
import priceFormatter from '../helpers/priceFormatter'

interface HomeProps {
	products: Product[]
}

interface Product {
	id: string
	name: string
	imageUrl: string
	price: number
	price_id: string
	price_data: Stripe.Price,
	product_data: Stripe.Product,
}

export default function Home({ products }: HomeProps) {
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 2,
			spacing: 48,
			origin: "center",
		},
		mode: 'snap',
		renderMode: 'precision',
	})
	const { addItem, cartCount } = useShoppingCart()

	function handleToCartButton(product: Product) {
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
				<title>Ignite Shop | Home</title>
			</Head>

			<HomeContainer ref={sliderRef} className={'keen-slider'}>
				<button onClick={() => {
					instanceRef.current?.prev()
				}}>
					<CaretLeft className='ArrowLeft' size={48} weight={'regular'} />
				</button>
				{products.map((product) => {
					return (
						<Product
							key={product.id}
							className="keen-slider__slide"
						>
							<Link href={`/product/${product.id}`}>
								<Image
									src={product.imageUrl}
									width={520}
									height={480}
									alt="" />
							</Link>

							<footer>
								<div>
									<strong>{product.name}</strong>
									<span>{priceFormatter(product.price)}</span>
								</div>
								<Button
									variant={'green'}
									onClick={() => {
										handleToCartButton(product)
									}}>
									<Handbag size={32} weight={'bold'} />
								</Button>
							</footer>
						</Product>
					)
				})}
				<button onClick={() => {
					instanceRef.current?.next()
				}}>
					<CaretRight className='ArrowRight' size={48} weight={'regular'} />
				</button>
			</HomeContainer>
		</>
	)
}

// If you export a function called getServerSideProps (Server-Side Rendering) from a page,
// Next.js will pre-render this page on each request using the data returned by getServerSideProps.

// SSR
// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await stripe.products.list({
//     expand: ['data.default_price'],
//   })

//   const products = response.data.map((product) => {
//     const price = product.default_price as Stripe.Price

//     return {
//       id: product.id,
//       name: product.name,
//       imageUrl: product.images[0],
//       price: price.unit_amount / 100,
//     }
//   })

//   return {
//     props: {
//       products,
//     },
//   }
// }

// SSG
export const getStaticProps: GetStaticProps = async () => {
	const response = await stripe.products.list({
		expand: ['data.default_price'],
	})

	const products = response.data.map((product) => {
		const price = product.default_price as Stripe.Price

		return {
			id: product.id,
			name: product.name,
			imageUrl: product.images[0],
			price_id: price.id,
			price: price.unit_amount,
			price_data: price,
			product_data: product,
		}
	})

	return {
		props: {
			products,
		},
		revalidate: 60 * 60 * 23, // 23 hours
	}
}
