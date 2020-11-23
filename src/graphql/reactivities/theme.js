import { makeVar, gql } from "@apollo/client";

export const darkMode = makeVar(false);

export const GET_DARK_MODE = gql`
  query getDarkMode{
    darkMode @client
  }
`