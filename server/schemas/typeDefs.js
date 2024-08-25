const typeDefs = `
type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    billing: [Billing]
    shipping: [Shipping]
    }

type Billing {
    _id: ID
    cardholderName: String
    cardNumber: String
    expirationDate: String
    cvv: String
    address: String
    city: String
    state: String
    zip: String
    }

type Shipping {
    _id: ID
    address: String
    city: String
    state: String
    zip: String
    }

type Auth {
    token: ID!
    user: User
    }

type Category {
    _id: ID
    name: String
    }

type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
    }

type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
    }

input Checkout {
    products: [ID]!
    }

type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Order
    }

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addBilling(cardholderName: String!, cardNumber: String!, expirationDate: String!, cvv: String!, address: String!, city: String!, state: String!, zip: String!): User
    addShipping(address: String!, city: String!, state: String!, zip: String!): User
    login(email: String!, password: String!): Auth
    addCategory(name: String!): Category
    addProduct(name: String!, description: String!, image: String!, quantity: Int!, price: Float!, category: ID!): Product
    addOrder(products: [ID]!): Order
    }
`;