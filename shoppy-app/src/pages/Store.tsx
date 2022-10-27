import storeItems from '../data/items.json'
import {Row, Col} from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
export function Store() {
    return (<>
     <h2>Store</h2>
     <Row md={2} xs={1} lg = {3} className = 'g-3'>
        {storeItems.map ((item) => (
            <Col>
            <StoreItem key ={item.id} {...item} />
            
            </Col>
        ))}
     </Row>
    </>
   
    )
}