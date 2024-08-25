import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;

export const ADD_BILLING = gql`
  mutation addBilling(
    $cardholderName: String!
    $cardNumber: String!
    $expirationDate: String!
    $cvv: String!
    $address: String!
    $city: String!
    $state: String!
    $zip: String!
  ) {
    addBilling(
      cardholderName: $cardholderName
      cardNumber: $cardNumber
      expirationDate: $expirationDate
      cvv: $cvv
      address: $address
      city: $city
      state: $state
      zip: $zip
    ) {
      _id
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
    }
  }
`;

export const ADD_SHIPPING = gql`
  mutation addShipping($address: String!, $city: String!, $state: String!, $zip: String!) {
    addShipping(address: $address, city: $city, state: $state, zip: $zip) {
      _id
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

export const ADD_CATEGORY = gql`
  mutation addCategory($name: String!) {
    addCategory(name: $name) {
      _id
      name
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $name: String!
    $description: String!
    $image: String!
    $quantity: Int!
    $price: Float!
    $category: ID!
  ) {
    addProduct(
      name: $name
      description: $description
      image: $image
      quantity: $quantity
      price: $price
      category: $category
    ) {
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

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
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