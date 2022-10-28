import { useShoppingCart } from "../context/ShoppingCartContext"
import items from "../data/items.json"
import { Stack, Button } from 'react-bootstrap'
import { formatCurrency } from "../utilities/formatCurrent"
type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart, increaseItemQuantity, decreaseItemQuantity } = useShoppingCart()
    const item = items.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{ width: "123px", height: "75px", objectFit: 'cover' }}></img>

            <div className="me-auto">
                <div>
                    <b>{item.name}</b>
                    {quantity > 1 &&
                        <span className="me-2 text-muted">
                            x {quantity} 
                        </span>
                    }
                </div>
                <div className="text-muted ">
                    {formatCurrency(item.price)}
                </div>
            </div>

            <div> {formatCurrency(item.price * quantity)}</div>
            <Button variant="outline-danger" size="sm" onClick={() =>  {removeFromCart(item.id)}} > &times;</Button>
        </Stack>
    )
}