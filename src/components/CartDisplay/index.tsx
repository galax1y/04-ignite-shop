import { Handbag } from 'phosphor-react';
import { Button } from '../Button/styles';
import { useShoppingCart } from 'use-shopping-cart'
import { useEffect } from 'react';
import { AsideCartDisplay } from './styles';

export default function CartDisplay() {
  const {
    cartDetails,
    shouldDisplayCart,
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
      </AsideCartDisplay> :
      <Button onClick={ToggleCart}>
        <Handbag size={24} weight={'bold'} />
      </Button>}
  </h1>

}