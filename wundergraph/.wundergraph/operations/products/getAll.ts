import { createOperation } from '../../generated/wundergraph.factory'
export default createOperation.query({
  handler: async () => {
    const response = await fetch('http://localhost:3001/products')
    const productsData = await response.json()
    return response.ok
      ? { success: true, products: productsData }
      : { success: false, products: [] }
  },
})
