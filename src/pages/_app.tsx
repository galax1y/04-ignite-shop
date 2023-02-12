import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '../assets/igniteshop.svg'
import { CartProvider, actions, useShoppingCart } from 'use-shopping-cart'
import { Handbag } from 'phosphor-react'
import CartDisplay from '../components/CartDisplay'


// Aplica estilização global
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<CartProvider
				shouldPersist={true}
				cartMode='checkout-session'
				stripe={String(process.env.STRIPE_PUBLIC_KEY)}
				currency='BRL'
			>
				<Header>
					<Image
						src={logoImg.src}
						alt=""
						width={logoImg.width}
						height={logoImg.height}
					/>
					<CartDisplay />

				</Header>

				<Component {...pageProps} />
			</CartProvider>
		</Container>
	)
}
