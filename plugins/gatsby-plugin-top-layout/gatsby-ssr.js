/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import MaterialThemeProvider from './MaterialThemeProvider';

export const wrapRootElement = ({ element }) => {
  return <MaterialThemeProvider>{element}</MaterialThemeProvider>;
};