import express, { Application, Request, Response } from 'express'

import { orders } from './mockdata/tutorialData'

const app: Application = express()

const PORT: number = 3002

app.use(express.json())

// Endpoint to get all orders

app.get('/orders', (req: Request, res: Response) => {
  res.json(orders)
})

// Endpoint to get order by ID

app.get('/orders/:id', (req: Request, res: Response) => {
  const order = orders.find(
    (o) => o.id === parseInt(req.params.id)
  )

  if (!order) {
    res.status(404).send('Order not found')
  } else {
    res.json(order)
  }
})

// Endpoint to update order status

app.put('/orders/:id', (req: Request, res: Response) => {
  const order = orders.find(
    (o) => o.id === parseInt(req.params.id)
  )

  if (!order) {
    res.status(404).send('Order not found')
  } else {
    order.status = req.body.status

    res.json(order)
  }
})

// Start server

app.listen(PORT, () => {
  console.log(`Order tracking service started on port ${PORT}`)
})
