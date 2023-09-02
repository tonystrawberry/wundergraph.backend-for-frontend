import { Order } from '../types/Order'

import Link from 'next/link'

type Props = {
  order: Order
}

const OrderCard: React.FC<Props> = ({ order }) => {
  return (
    <Link
      href={{
        pathname: `/orders/${order.id}`,
      }}
    >
      <div className="duration-50 mb-4 h-60 transform cursor-pointer rounded-lg bg-white p-4 shadow-lg transition-transform hover:translate-x-2">
        <h2 className="text-lg font-medium">Order #{order.id}</h2>

        <p className="my-2 text-lg font-semibold text-gray-500">
          {order.status}
        </p>

        <ul className="mb-2 border-y">
          {order.items.map((item) => (
            <li key={item.productId}>
              {item.quantity} x Product ID {item.productId}
            </li>
          ))}
        </ul>

        <p className="text-gray-500">
          Shipping Address: {order.shippingAddress.address},{' '}
          {order.shippingAddress.city}, {order.shippingAddress.state}{' '}
          {order.shippingAddress.zip}
        </p>

        <p className="text-gray-500">Delivery Date: {order.deliveryDate}</p>
      </div>
    </Link>
  )
}

export default OrderCard
