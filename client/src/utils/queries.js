// queries.js
import { gql } from '@apollo/client';

// Query to get a single user by ID
export const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
    }
  }
`;

// Query to get all users
export const GET_ALL_USERS = gql`
  query GetAllUsers {
    getAllUsers {
      id
      username
    }
  }
`;

// Query to get a single snowboard by ID
export const GET_SNOWBOARD = gql`
  query GetSnowboard($id: ID!) {
    getSnowboard(id: $id) {
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

// Query to get all snowboards
export const GET_ALL_SNOWBOARDS = gql`
  query GetAllSnowboards {
    getAllSnowboards {
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

// Query to get a single apparel item by ID
export const GET_APPAREL = gql`
  query GetApparel($id: ID!) {
    getApparel(id: $id) {
      id
      pictures
      name
      style
      size
      price
    }
  }
`;

// Query to get all apparel items
export const GET_ALL_APPAREL = gql`
  query GetAllApparel {
    getAllApparel {
      id
      pictures
      name
      style
      size
      price
    }
  }
`;


export const GET_GENERAL_STATS = gql`
  query GetGeneralStats {
    generalStats {
      stats {
        totalVisitors
        monthlyVisitors {
          month
          count
        }
      }
      salesData {
        month
        itemType
        total
      }
    }
  }
`;

export const GET_SNOWBOARD_STATS = gql`
  query GetSnowboardStats {
    snowboardStats {
      mostViewedBoard {
        name
        views
      }
      salesData {
        month
        total
      }
    }
  }
`;

export const GET_APPAREL_STATS = gql`
  query GetApparelStats {
    apparelStats {
      mostViewedApparel {
        name
        views
      }
      salesData {
        month
        total
      }
    }
  }
`;
