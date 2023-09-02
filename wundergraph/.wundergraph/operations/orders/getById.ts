import { createOperation, z } from '../../generated/wundergraph.factory'

export default createOperation.query({
  input: z.object({
    orderID: z.number(),
  }),
  handler: async ({ input }) => {
    const response = await fetch(
      `http://localhost:3002/orders/${input.orderID}`
    )
    const orderData = await response.json()
    return response.ok
      ? { success: true, order: orderData }
      : { success: false, order: {} }
  },
})
