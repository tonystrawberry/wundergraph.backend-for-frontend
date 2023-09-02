const products = [
  {
    id: 1,
    name: "Men's Casual Premium Slim Fit T-Shirt",
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    price: 11.99,
  },
  {
    id: 2,
    name: "Women's 3-in-1 Snowboard Jacket Winter Coats",
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    price: 49.99,
  },
  {
    id: 3,
    name: "Rain Jacket Women's Windbreaker Striped Climbing Raincoats",
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    price: 59.99,
  },
  {
    id: 4,
    name: "MBJ Women's Solid Short Sleeve Boat Neck V",
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem.",
    price: 11.99,
  },
  {
    id: 5,
    name: "Men's Cotton Jacket",
    description:
      "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    price: 54.45,
  },
];

const orders = [
  {
    id: 1,
    status: "Processing",
    items: [
      { productId: 1, quantity: 2 },
      { productId: 2, quantity: 1 },
    ],
    shippingAddress: {
      name: "John Doe",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
    deliveryDate: "2023-05-01",
  },
  {
    id: 2,
    status: "Shipped",
    items: [{ productId: 3, quantity: 1 }],
    shippingAddress: {
      name: "Jane Smith",
      address: "456 Elm St",
      city: "Anytown",
      state: "CA",
      zip: "67890",
    },
    deliveryDate: "2023-05-03",
  },
];

module.exports = { products, orders }
