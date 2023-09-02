import { useRouter } from 'next/router'

import { useQuery, withWunderGraph } from '../../components/generated/nextjs'

import BackButton from 'components/BackButton'

const Order = () => {
  const router = useRouter()

  const { productID } = router.query

  const { data: productData } = useQuery({
    operationName: 'products/getByID',

    input: {
      productID: parseInt(productID as string),
    },
  })

  const product = productData?.product

  if (!product) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <BackButton />

        <div className="max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="flex flex-col items-center justify-between p-8">
            <h2 className="text-xl font-bold"> Product not found!</h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <BackButton />

      <div className="max-w-4xl overflow-hidden rounded-lg bg-white shadow-lg">
        <img
          className="h-56 w-full object-cover object-center"
          src="https://dummyimage.com/720x400"
          alt={product.name}
        />

        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>

          <p className="mt-2 text-sm text-gray-600">{product.description}</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-800">
              ${product.price.toFixed(2)}
            </span>

            <button className="rounded bg-gray-800 px-3 py-1 font-semibold text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withWunderGraph(Order)
