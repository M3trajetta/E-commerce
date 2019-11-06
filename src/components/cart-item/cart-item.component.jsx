import React from 'react';
import {
  CartItemContainer,
  CartItemImg,
  ItemDetailsContainer
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div>
      <CartItemContainer>
        <CartItemImg src={imageUrl} alt={name} />
        <ItemDetailsContainer>
          <span>{name}</span>
          <span>
            {quantity} x ${price}
          </span>
        </ItemDetailsContainer>
      </CartItemContainer>
    </div>
  );
};

export default CartItem;
