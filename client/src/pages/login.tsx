import React from 'react';
import { gql, ApolloClient, useApolloClient, useMutation } from '@apollo/client';

import { LoginForm, Loading } from '../components';
import { isLoggedInVar } from '../cache';
import * as LoginTypes from './__generated__/login';

export const LOGIN_USER = gql`
  mutation Login($email: String!) {
    login(email: $email) {
      id,
      token
    }
  }
`;

export default function Login() {
//  const client: ApolloClient<any> = useApolloClient();
  const [login, { loading, error }] = useMutation<
   LoginTypes.login,
   LoginTypes.loginVariables>(
    LOGIN_USER,
    {
      onCompleted({ login }) {
        localStorage.setItem('token', login as string);
//        localStorage.setItem('userId', login.id as string);
        isLoggedInVar(true);
      }
    }
  );

  if (loading) return <Loading />;
  if (error) return <p>An error occurred</p>;

  return <LoginForm login={login} />;
}