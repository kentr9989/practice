import React from "react";

interface Props {
  cartItems: string[],
  onClear: () => void;
}
function Cart({ cartItems,onClear }: Props) {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={onClear}>Clear Cart Button</button>
    </>
  );
}

export default Cart;
