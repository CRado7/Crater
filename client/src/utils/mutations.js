// mutations.js
import { gql } from '@apollo/client';

// Mutation to create a new user
export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      id
      username
    }
  }
`;

// Mutation to login a user
export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

// Mutation to logout a user
export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;

// Mutation to create a new snowboard
export const CREATE_SNOWBOARD = gql`
  mutation CreateSnowboard($picture: String!, $name: String!, $shape: String!, $sizes: [String!]!, $flex: String!, $boardConstruction: String!) {
    createSnowboard(picture: $picture, name: $name, shape: $shape, sizes: $sizes, flex: $flex, boardConstruction: $boardConstruction) {
      id
      picture
      name
      shape
      sizes
      flex
      boardConstruction
      price
    }
  }
`;

// Mutation to create a new apparel item
export const CREATE_APPAREL = gql`
  mutation CreateApparel($pictures: [String!]!, $style: String!, $size: String!) {
    createApparel(pictures: $pictures, style: $style, size: $size) {
      id
      pictures
      name
      style
      size
      price
    }
  }
`;
