import React from 'react'
import BaseContainer from '../components/base-container';
import { Box, Link, Typography } from '@material-ui/core'

const ServicesPage: React.FC = () => {
  return <BaseContainer title='Services'>
    <Typography variant='h3'>Services</Typography>
    <Typography variant='body1'>We provides various logistical services that students can apply for.</Typography>
    <Box mt={4}>
      <Typography variant='h4'>Locker Service</Typography>
      <Typography variant='body1'>Application for locker services is open all year round. Simply fill in <Link color='secondary' href='https://bit.ly/soclocker_application'>
        this form
      </Link> to get a locker located in School of Computing! Do spend a minute or so reading our locker usage <Link color='secondary' href='https://bit.ly/soclockerterms'>
        Terms &amp; Conditions
      </Link> and do remember to clear away your stuff at the end of your locker validity period or risk having them disposed away!</Typography>
    </Box>
    <Box mt={4}>
      <Typography variant='h4'>Extension Cord Loan</Typography>
      <Typography variant='body1'>We provide Extension Cord Loan services to all computing undergraduates on a daily basis. Simply knock on our clubroom’s door and request for it from any Management Committee member and sign out! If there’s no one in when returning, you can drop it into the Extension Cord Returning Box just outside our clubroom!</Typography>
    </Box>
    <Box mt={4}>
      <Typography variant='h4'>Board Games Loan</Typography>
      <Typography variant='body1'>We also have quite a range of board games available for loan to all computing undergraduates. Similar to how Extension Cord Loan works, simply approach any of our Management Committee to notify them of your intention to loan board games and sign out for them! Just let us know if you wish to browse through our collection before deciding!</Typography>
    </Box>
    <Box mt={4}>
      <Typography variant='h4'>Need Help?</Typography>
      <Typography variant='body1'>Feel free to contact us at <Link color='secondary' href='mailto:connect@nuscomputing.com'>
        connect@nuscomputing.com
      </Link> if you have any further queries.</Typography>
    </Box>
  </BaseContainer>;
}

export default ServicesPage
