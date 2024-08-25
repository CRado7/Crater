import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      name
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts($category: ID, $name: String) {
    products(category: $category, name: $name) {
      _id
      name
      description
      image
      quantity
      price
      category {
        _id
        name
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query getProduct($id: ID!) {
    product(_id: $id) {
      _id
      name
      description
      image
      quantity
      price
      category {
        _id
        name
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    user {
      _id
      firstName
      lastName
      email
      billing {
        _id
        cardholderName
        cardNumber
        expirationDate
        cvv
        address
        city
        state
        zip
      }
      shipping {
        _id
        address
        city
        state
        zip
      }
    }
  }
`;

export const GET_ORDER = gql`
  query getOrder($id: ID!) {
    order(_id: $id) {
      _id
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          _id
          name
        }
      }
    }
  }
`;

export const CHECKOUT = gql`
  query checkout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;