import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

import logoImg from '../assets/igniteshop.svg'
import { CartProvider } from 'use-shopping-cart'
import CartDisplay from '../components/CartDisplay'
import Link from 'next/link'
import { useRouter } from 'next/router'


// Aplica estilização global
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
	const { pathname } = useRouter()

	return (
		<Container>
			<CartProvider
				shouldPersist={true}
				cartMode='checkout-session'
				stripe={String(process.env.STRIPE_PUBLIC_KEY)}
				currency='BRL'
			>
				<Header className={pathname === '/success' ? 'Center' : undefined}>
					<Link href={'/'}>
						<Image
							src={logoImg.src}
							alt=""
							width={logoImg.width}
							height={logoImg.height}
						/>
					</Link>
					{pathname !== '/success' ? <CartDisplay /> : null}
				</Header>

				<Component {...pageProps} />
			</CartProvider>
		</Container>
	)
}
