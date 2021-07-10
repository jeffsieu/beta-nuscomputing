import React from 'react'
import BaseContainer from '../components/base-container';
import { Box, Link, Typography } from '@material-ui/core';

function AboutPage() {
  return <BaseContainer title='About'>
      <Box mt={4} mb={4}>
        <Typography variant='h3'>
          About NUS Students' Computing Club
        </Typography>
        <Typography variant='body1'>
          The NUS Students’ Computing Club, colloquially referred to as the Computing Club, is a constituent club under the NUS Students’ Union (NUSSU). It comprises and represents all undergraduates pursuing a degree in NUS School of Computing.
        </Typography>
      </Box>
      <Box mt={4} mb={4}>
        <Typography variant='h4'>History</Typography>
        <Typography variant='body1'>
          Established when NUS School of Computing gained independence as a separate faculty in 1998,
            the NUS Students’ Computing Club is the official faculty club and sole union representative
            of all undergraduates in NUS School of Computing. The club has since been taking care of the
            student life in NUS School of Computing by organising various events and activities to
            promote campus vibrancy. We safeguard the interest of our undergraduates, ensure their
            voices are heard, provide welfare, and form the bridge between our students and the school.
        </Typography>
      </Box>
      <Box mt={4} mb={4}>
        <Typography variant='h4'>Vision</Typography>
        <Typography variant='body1'>
          NUS Students’ Computing Club serves to continually support our faculty, to build close-knitted
          relationships among Computing Club members past and present and drive the charge for campus vibrancy.
        </Typography>
      </Box>
      <Box mt={4} mb={4}>
        <Typography variant='h4'>Mission</Typography>
        <Typography variant='body1'>
          NUS Students’ Computing Club’s mission is to lead the strive for excellence and to continually advance,
          for the needs and welfare of our fellow students.
        </Typography>
      </Box>
      <Box mt={4} mb={4}>
        <Typography variant='h4'>Constitution</Typography>
        <Typography variant='body1'>
          The constitution defines the framework that the NUS Students' Computing Club follows. Read
          it <Link href="/constitution.pdf" target="_blank" rel="noreferrer">here</Link>.
        </Typography>
      </Box>
  </BaseContainer>;
}

export default AboutPage
