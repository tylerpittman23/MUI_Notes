import Button from '@mui/material/Button';

// button takes a variant that will give it some default styling, and any other styles passed with the sx Prop 
// https://mui.com/system/getting-started/the-sx-prop/
export default function ButtonUsage({ variant, sx, text, href }) {
    return <Button href={href} target={'blank'} variant={variant} sx={sx}>{text}</Button>;
  }


//   export default function ButtonUsage() {
//     return <Button variant="contained">Hello world</Button>;
//   }
  
  