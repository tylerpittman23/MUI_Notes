import { useState } from 'react'
import ButtonUsage from './assets/components/button';
import SimpleBadge from './assets/components/badge';
import TemporaryDrawer from './assets/components/drawer';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
function App() {

  // the SX PROP is used to directly style different Material UI components < https://mui.com/system/getting-started/the-sx-prop/ > 

  return (
    <>
    {/* Box is a just a normal <div /> html element but can be changed when passed a component='(section, )' prop. 
        Here we use it as a flexbox for our ButtonUsage elements*/}
    <Box sx={{ width: 'screen', p: 2, mt: 4, border: '2px solid blue', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4, flexWrap: 'wrap'}}>

        <ButtonUsage 
          href={"https://mui.com/system/getting-started/the-sx-prop/"} 
          variant={'text'} text={'view SX Prop guide'} /> {/* Not positive but I think text is default */}

        <ButtonUsage variant={'outlined'} text={'Hello World'}sx={{ 
          py: 6, 
          color: 'white',
          bgcolor: 'red',
          '&:hover' : {
            bgcolor: 'yellow',
            color: 'red'
          },
          }}/>

        <ButtonUsage variant={'contained'} text={'this is button'} sx={{ fontSize: '35px', maxWidth: '40%', borderRadius: '9999px'}}/>
    </Box>

    {
      /* The Material-UI Container component is designed to center your content horizontally. 
      It's incredibly useful for implementing max widths and aligning content that shouldn't 
      span the full width of the viewport. */
    }
    <Container 
      maxWidth='sm' /* can be percent, !!! I've found it easier to directly style width and height in the SX prop */
      fixed /* if this prop is added then the container will have a maxWidth at all breakpoints */
      disableGutters /* if this prop is added then the container will not have padding on the left and right */
      sx={{
        bgcolor: '#9fd3c7',
        height: '200px',
        boxShadow: 10,
        borderRadius: 10,
        border: '2px solid gray',
        display: 'flex',
        flexDirection: 'column'
      }} >
        <Typography variant='h1' align='center' sx={{ fontWeight: 'bold'}}>
          Hello
        </Typography>
        <Typography variant='subtitle1' align='center'>  {/* variant: Controls the style of the typography. Common values include h1, h2, h3, h4, h5, h6 for headings, subtitle1, subtitle2, body1, body2 for standard text, caption for small text, and button for button text.*/}        
          Wow a subtitle
        </Typography>
        <Typography
          component='span'
        >
          this is a span, the component type can be changed with passing a component prop 
        </Typography>

    </Container>
    <SimpleBadge count={12}/>
    <TemporaryDrawer />
    </>
  )
}

export default App
