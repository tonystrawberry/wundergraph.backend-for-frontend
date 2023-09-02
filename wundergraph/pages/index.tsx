import { NextPage } from 'next'

import React, { useState } from 'react'

/* WG stuff */

import { useQuery, withWunderGraph } from '../components/generated/nextjs'

/* my components */

import ProductList from '../components/ProductList'

import OrderList from '../components/OrderList'

import Sidebar from '../components/Sidebar'

/* my types*/

import { Product } from 'types/Product'

import { Order } from 'types/Order'

const Home: NextPage = () => {
  // add more tabs as and when you require them

  const [activeTab, setActiveTab] = useState<'Product Catalog' | 'Orders'>(
    'Product Catalog'
  )

  const handleTabClick = (tab: 'Product Catalog' | 'Orders') => {
    setActiveTab(tab)
  }

  // Using WunderGraph's auto-generated data fetching hooks

  const { data: productsData } = useQuery({
    operationName: 'products/getAll',
  })

  // …and again.

  const { data: ordersData } = useQuery({
    operationName: 'orders/getAll',
  })

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />

      <main className="flex-grow p-8">
        {activeTab === 'Product Catalog' ? (
          <ProductList products={productsData?.products as Product[]} />
        ) : activeTab === 'Orders' ? (
          <OrderList orders={ordersData?.orders as Order[]} />
        ) : (
          // account for any other tab, if present. Placeholder for now.

          <div className="text-white"> Under Construction</div>
        )}
      </main>
    </div>
  )
}

export default withWunderGraph(Home)
