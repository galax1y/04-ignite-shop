import { Handbag, ThumbsUp, X } from 'phosphor-react';
import { Button } from '../Button/styles';
import { useShoppingCart } from 'use-shopping-cart'
import Image from 'next/image';
import priceFormatter from '../../helpers/priceFormatter';
import {
  AsideCartDisplay,
  CartContentContainer,
  CartInteractionContainer,
  CartItem,
  EmptyCartMessage,
  ImageContainer
} from './styles';
import axios from 'axios';

export default function CartDisplay() {
  const {
    cartDetails,
    cartCount,
    shouldDisplayCart,
    totalPrice,
    clearCart,
    decrementItem,
    handleCartClick,
  } = useShoppingCart()



  if (cartDetails === undefined) {
    return <></>
  }

  const cartItems = Object.values(cartDetails)

  const isCartEmpty = cartItems.length === 0

  function ToggleCart() {
    handleCartClick()
  }

  async function handleCheckout() {

    try {


      const lineItems = cartItems.map((item) => {
        return {
          price: item.price_id,
          quantity: item.quantity,
        }
      })

      const response = await axios.post('/api/checkout', {
        lineItems
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
      clearCart()
    }
    catch (err) {
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return <>
    {shouldDisplayCart ?
      <AsideCartDisplay>
        <Button
          onClick={ToggleCart}
          variant={'transparent'}
        >
          <X size={24} weight='bold' />
        </Button>

        <h2>Sacola de compras</h2>
        <CartContentContainer>
          {cartItems.length > 0 ? cartItems.map((item: any) => {
            return (
              <CartItem key={item.id}>
                <ImageContainer>
                  <Image
                    src={item.product_data.images[0]}
                    width={95}
                    height={95} alt="Produto" />
                </ImageContainer>
                <div>
                  <span>{item.quantity}x {item.name}</span>
                  <strong>
                    {priceFormatter(item.price)}
                  </strong>

                  <button onClick={() => {
                    decrementItem(item.id)
                  }}>Remover</button>
                </div>
              </CartItem>
            )
          }) :
            <EmptyCartMessage>
              <div>
                <span>
                  Não precisa ter vergonha,
                </span>
                <span>
                  adicione algo no carrinho!
                </span>
              </div>
              <ThumbsUp size={36} weight={'fill'} />
            </EmptyCartMessage>}


        </CartContentContainer>

        <CartInteractionContainer>
          <div>
            <span>Quantidade</span>
            <span>{cartCount}</span>
          </div>

          <div>
            <strong>Valor total</strong>
            <strong>{priceFormatter(totalPrice!)}</strong>
          </div>

          <button
            onClick={() => {
              handleCheckout()
            }}
            disabled={isCartEmpty}>
            Finalizar compra
          </button>
        </CartInteractionContainer>


        {cartDetails ?
          null
          : 'Nothing to display'}
      </AsideCartDisplay> :
      <Button
        onClick={ToggleCart}
        variant={'gray'}>
        <Handbag size={24} weight={'bold'} />
      </Button>}
  </>

}

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {
// 	if (!query.session_id) {
// 		return {
// 			redirect: {
// 				destination: '/',
// 				permanent: false,
// 			},
// 		}
// 	}

// 	const sessionId = String(query.session_id)

// 	const session = await stripe.checkout.sessions.retrieve(sessionId, {
// 		expand: ['line_items', 'line_items.data.price.product'],
// 	})

// 	const customerName = session.customer_details?.name
// 	const product = session.line_items?.data[0].price?.product as Stripe.Product

// 	return {
// 		props: {
// 			customerName,
// 			product: {
// 				name: product.name,
// 				imageUrl: product.images[0],
// 			},
// 		},
// 	}
// }
