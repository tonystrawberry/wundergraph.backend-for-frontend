import { useRouter } from 'next/router'

import { useQuery, withWunderGraph } from '../../components/generated/nextjs'

import BackButton from 'components/BackButton'

type ItemInOrder = {
  productId: number

  quantity: number
}

const Order = () => {
  const router = useRouter()

  const { orderID } = router.query

  const { data: orderData } = useQuery({
    operationName: 'orders/getByID',

    input: {
      orderID: parseInt(orderID as string),
    },
  })

  const order = orderData?.order

  if (!order) {
    return (
      <div className="">
        <BackButton />

        <div className="flex min-h-screen flex-col items-center justify-center text-white">
          <div className="mt-12 rounded-lg bg-white p-6 text-sm text-black md:p-12 md:text-lg">
            <div className="flex flex-col items-center justify-between">
              <h2 className="text-xl font-bold"> Order not found!</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex">
      <BackButton />

      <div className="flex min-h-screen w-screen items-center justify-center text-white">
        <div className="mt-12 rounded-lg bg-white p-6 text-sm text-black shadow-xl md:p-12 md:text-lg">
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-xl font-bold">Order #{order.id}</h2>

            <span
              className={`${
                order.status === 'Processing'
                  ? 'text-yellow-500'
                  : order.status === 'Shipped'
                  ? 'text-green-500'
                  : 'text-red-500'
              } font-bold`}
            >
              {order.status}
            </span>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold">Items</h3>

            <ul className="list-inside list-disc">
              {order.items.map((item: ItemInOrder) => (
                <li key={item.productId}>
                  {item.quantity} x Product #{item.productId}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold">Shipping Address</h3>

            <p>{order.shippingAddress.name}</p>

            <p>{order.shippingAddress.address}</p>

            <p>
              {order.shippingAddress.city}, {order.shippingAddress.state}{' '}
              {order.shippingAddress.zip}
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-bold">Delivery Date</h3>

            <p>{new Date(order.deliveryDate).toDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withWunderGraph(Order)
