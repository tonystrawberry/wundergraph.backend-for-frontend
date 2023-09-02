import { createOperation, z } from '../../generated/wundergraph.factory'

export default createOperation.query({
  input: z.object({
    productID: z.number(),
  }),
  handler: async ({ input }) => {
    const response = await fetch(
      `http://localhost:3001/products/${input.productID}`
    )
    const productResponse = await response.json()
    return response.ok
      ? { success: true, product: productResponse }
      : { success: false, product: {} }
  },
})
