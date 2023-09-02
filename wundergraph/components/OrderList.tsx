import { Order } from '../types/Order'

import OrderCard from './OrderCard'

type Props = {
  orders: Order[]
}

const OrderList: React.FC<Props> = ({ orders }) => {
  return (
    <div>
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}

export default OrderList
