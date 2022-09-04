import { func } from "joi";
import { Offcanvas } from "react-bootstrap";
import { UseShoppingCart } from "../../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

type  ShoppingCartProps={
    isOpen:boolean
}
export function ShoppingCart({isOpen}:ShoppingCartProps){
    const {closeCart,cartItems}=UseShoppingCart()
    
    return (
        <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
            <Offcanvas.Header  closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>

            </Offcanvas.Header>
            <Offcanvas.Body>
                {cartItems.map(item=>(
                    <CartItem key={item.id} {...item}/>
                ))}
            </Offcanvas.Body>
        </Offcanvas>
    )
}