import { Handbag, X } from 'phosphor-react';
import { Button } from '../Button/styles';
import { useShoppingCart } from 'use-shopping-cart'
import { useEffect } from 'react';
import Image from 'next/image';
import pic from '../../assets/foto.jpg'
import {
  AsideCartDisplay,
  CartContentContainer,
  CartInteractionContainer,
  CartItem,
  ImageContainer
} from './styles';

export default function CartDisplay() {
  const {
    cartDetails,
    cartCount,
    shouldDisplayCart,
    removeItem,
    handleCartClick,
  } = useShoppingCart()

  useEffect(() => {
    console.log(shouldDisplayCart)
  }, [shouldDisplayCart])

  function ToggleCart() {
    console.log(cartDetails)
    handleCartClick()
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
          <CartItem>
            <ImageContainer>
              <Image src={pic} alt="Produto" />
            </ImageContainer>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              {/*onClick={removeItem}*/}
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <ImageContainer>
              <Image src={pic} alt="Produto" />
            </ImageContainer>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              {/*onClick={removeItem}*/}
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <ImageContainer>
              <Image src={pic} alt="Produto" />
            </ImageContainer>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              {/*onClick={removeItem}*/}
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <ImageContainer>
              <Image src={pic} alt="Produto" />
            </ImageContainer>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              {/*onClick={removeItem}*/}
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <ImageContainer>
              <Image src={pic} alt="Produto" />
            </ImageContainer>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              {/*onClick={removeItem}*/}
              <button>Remover</button>
            </div>
          </CartItem>
          <CartItem>
            <ImageContainer>
              <Image src={pic} alt="Produto" />
            </ImageContainer>
            <div>
              <span>Camiseta Beyond the Limits</span>
              <strong>R$ 79,90</strong>
              {/*onClick={removeItem}*/}
              <button>Remover</button>
            </div>
          </CartItem>
        </CartContentContainer>

        <CartInteractionContainer>
          <div>
            <span>Quantidade</span>
            <span>x</span>
          </div>

          <div>
            <strong>Valor total</strong>
            <strong>y</strong>
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