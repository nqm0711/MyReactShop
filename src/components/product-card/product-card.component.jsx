import {useDispatch, useSelector} from 'react-redux';

import {selectCartItems} from '../../store/cart/cart.selector';
import {addItemToCart} from '../../store/cart/cart.reducer';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import {Footer, Name, Price, ProductCartContainer,} from './product-card.styles';
import {currencyFormatter} from "../../App";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={image} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{currencyFormatter(price)}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;
