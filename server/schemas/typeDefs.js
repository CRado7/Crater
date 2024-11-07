const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # User Type Definition
  type User {
    id: ID!
    username: String!
    password: String!
  }

  # Snowboard Type Definition
  type Snowboard {
    id: ID!
    picture: String!
    name: String!
    shape: String!
    sizes: [String!]!
    flex: String!
    boardConstruction: String!
    price: Float!
    views: Int
  }

  # Apparel Type Definition
  type Apparel {
    id: ID!
    pictures: [String!]!
    name: String!
    style: String!
    size: String!
    price: Float!
    views: Int
  }

  # Token Type for login mutation
  type Token {
    token: String!
  }

  # Site Stats Type Definition for admin page
  type SiteStats {
    totalVisitors: Int!
    monthlyVisitors: [MonthlyVisitorData!]!
  }

  type MonthlyVisitorData {
    month: String!
    count: Int!
  }

  # Sales Type Definition
  type SalesData {
    month: String!
    itemType: String!
    total: Float!
  }

  # General Stats Type Definition for admin
  type GeneralStats {
    stats: SiteStats
    salesData: [SalesData!]!
  }

  # Snowboard-specific Stats
  type SnowboardStats {
    mostViewedBoard: Snowboard
    salesData: [SalesData!]!
  }

  # Apparel-specific Stats
  type ApparelStats {
    mostViewedApparel: Apparel
    salesData: [SalesData!]!
  }

  # Queries for fetching data
  type Query {
    # User-related queries
    getUser(id: ID!): User
    getAllUsers: [User!]!

    # Product-related queries
    getSnowboard(id: ID!): Snowboard
    getAllSnowboards: [Snowboard!]!
    getApparel(id: ID!): Apparel
    getAllApparel: [Apparel!]!

    # Admin-specific queries
    generalStats: GeneralStats!
    snowboardStats: SnowboardStats!
    apparelStats: ApparelStats!
  }

  # Mutations for modifying data
  type Mutation {
    # User-related mutations
    createUser(username: String!, password: String!): User!
    login(username: String!, password: String!): Token!
    logout: String!

    # Product-related mutations
    createSnowboard(
      picture: String!, 
      name: String!, 
      shape: String!, 
      sizes: [String!]!, 
      flex: String!, 
      boardConstruction: String!, 
      price: Float!
    ): Snowboard!

    createApparel(
      pictures: [String!]!,
      name: String!,
      style: String!, 
      size: String!, 
      price: Float!
    ): Apparel!
  }
`;

module.exports = typeDefs;
