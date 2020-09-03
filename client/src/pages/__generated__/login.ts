/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface Login_login {
  __typename: "User";
  id: string;
  token: string | null;
}

export interface login {
  login: string | null;
}

export interface loginVariables {
  email: string;
}
