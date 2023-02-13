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

export default function CartDisplay() {
  const {
    cartDetails,
    cartCount,
    shouldDisplayCart,
    totalPrice,
    decrementItem,
    handleCartClick,
  } = useShoppingCart()

  function ToggleCart() {
    handleCartClick()
  }

  if (cartDetails === undefined) {
    return
  }

  const cartItems = Object.values(cartDetails)
  console.log('cartItems:', cartItems)

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

          <button>
            Finalizar compra
          </button>
        </CartInteractionContainer>


        {cartDetails ?
          null
          : 'Nothing to display'}
      </AsideCartDisplay> :
      <Button onClick={ToggleCart} variant={'gray'}>
        <Handbag size={24} weight={'bold'} />
      </Button>}
  </>

}