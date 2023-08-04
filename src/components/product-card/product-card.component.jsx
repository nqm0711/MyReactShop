import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {CartContext} from '../../contexts/cart.context';
import {Footer, Name, Price, ProductCartContainer,} from './product-card.styles';
import {currencyFormatter} from "../../App";
import {useContext} from "react";

const ProductCard = ({ product }) => {
  const { name, price, image } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);

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
