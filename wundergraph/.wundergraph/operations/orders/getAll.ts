import { createOperation } from '../../generated/wundergraph.factory'
export default createOperation.query({
  handler: async () => {
    const response = await fetch('http://localhost:3002/orders')
    const ordersResponse = await response.json()
    return response.ok
      ? { success: true, orders: ordersResponse }
      : { success: false, orders: [] }
  },
})
