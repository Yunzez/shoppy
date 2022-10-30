import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrent'
export type StoreItemProps = { id: number, name: string, price: string| number, imgUrl: string }

export function StoreItem(
    { id, name, price, imgUrl }: StoreItemProps
) {
    const { getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeFromCart
    } = useShoppingCart()

    const quantity = getItemQuantity(id)
    return (
        <Card className='h-100'>
            <Card.Img variant="top" src={imgUrl} height="200px" style={{
                objectFit: "cover"
            }} />
            <Card.Body className='d-flex flex-column' />
            <Card.Title className='d-flex justify-content-between mb-2 p-1 align-items-baseline'>
                <b className='fs-5'>{name}</b>
                <p className='ms-2 text-muted' >{formatCurrency(price)}</p>
            </Card.Title>
            <div className='p-3'>
                {quantity === 0 ? (
                    <Button className="me-auto" onClick={() => increaseItemQuantity(id)}>Add to cart</Button>
                ) : (
                    <div className='d-flex align-items-center justify-content-around' style={{ gap: '1rem' }}>
                        <div className='d-flex align-items-center justify-content-around'>
                            <Button onClick={() => decreaseItemQuantity(id)} >-</Button>
                            <span className='fs-3 me-2 ms-2'>{quantity}</span>
                            <Button onClick={() => increaseItemQuantity(id)} >+</Button>
                        </div>
                        <Button onClick={() => removeFromCart(id)} variant="danger" className='fs-6'>delete</Button>
                    </div>
                )}
            </div>
        </Card>
    )
}