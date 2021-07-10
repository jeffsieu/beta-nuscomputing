/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import MaterialThemeProvider from './MaterialThemeProvider';

const storageBrightness = localStorage.getItem('themeBrightness');

export const wrapRootElement = ({ element }) => {
  return <MaterialThemeProvider storageBrightness={storageBrightness}>{element}</MaterialThemeProvider>;
};