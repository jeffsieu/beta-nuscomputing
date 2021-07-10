import React from 'react'
import BaseContainer from '../components/base-container';
import { Typography } from '@material-ui/core'

const NotFoundPage: React.FC = () => {
  return <BaseContainer title='404 Not Found'>
    <Typography variant='h1'>404 Page not found :(</Typography>
  </BaseContainer>;
}

export default NotFoundPage
