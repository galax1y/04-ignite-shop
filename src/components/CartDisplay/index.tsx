import { Handbag, X } from 'phosphor-react';
import { Button } from '../Button/styles';
import { useShoppingCart } from 'use-shopping-cart'
import { useEffect } from 'react';
import { AsideCartDisplay, CartContentContainer, CartInteractionContainer, CartItem } from './styles';
import Image from 'next/image';
import pic from '../../assets/foto.jpg'

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

  return <h1>
    {shouldDisplayCart ?
      <AsideCartDisplay>


        <Button onClick={ToggleCart} variant={'transparent'} >
          <X size={24} weight='bold' />
        </Button>

        <CartContentContainer>
          <h2>Sacola de compras</h2>

          <CartItem>
            <Image src={pic} alt="Produto" width={94} height={94} />
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
  </h1>

}