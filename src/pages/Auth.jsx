import {
  Grid, 
  Box,
  Stack,
  Typography,
  Button
} from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const classes = {
  imageContainer: {
    backgroundColor: 'blue'
  },
  background:{
    position: 'relative',
    width: '100%', 
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage:{
    position: 'absolute',
    objectFit: 'fill',
    top: 0,
    left: 0, 
    width: '100%',
    height: '100%',
    zIndex: -1
  },
  backgroundIcon:{
    color: '#fff',
    width: '350px',
    height: '350px'
  },
  authContainer:{
    width: '100%', 
    height: '100vh',
    backgroundColor: '#000',
    padding: '16px'
  },
  stack:{
    padding: '20px'
  },
  icon:{
    width: '43px',
    height: '3rem',
    color: 'rgb(214, 217, 219)',
  },
  formHeading:{
    display: 'inline-block',
    color: '#fff',
    fontSize: '64px',
    fontWeight: 700,
    margin: '48px 0'
  },
  formSubHeading:{
    display: 'inline-block',
    color: '#fff',
    fontSize: '31px',
    fontWeight: 700,
    marginBottom: '32px'
  },
  googleButton:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    gap: '10px',
    width: '240px',
    padding: '5px',
    borderRadius: '15px',
    justifyContent: 'center'
  },
  googleIcon:{
    
  },
  googleText:{

  }
}

const Auth = () => {
  return (
    <Grid container>
      <Grid item xs={6.5} sx={classes.backgroundColor}>
        <Box sx={classes.background}>
          <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="bg" style={classes.backgroundImage} />
          <TwitterIcon sx={classes.backgroundIcon}/>
        </Box>
      </Grid>
      <Grid item xs={5.5} sx={classes.authContainer}>
        <Stack direction='column' sx={classes.stack}>
          <Box>
            <TwitterIcon sx={classes.icon} />
          </Box>
          <Typography variant='h2' component='span' sx={classes.formHeading}>Happening now</Typography>
          <Typography variant='h2' component='span' sx={classes.formSubHeading}>Join Twitter today.</Typography>
          <Button sx={classes.googleButton}>
            <GoogleIcon sx={classes.googleIcon}/>
            <Typography sx={classes.googleText}>Sign up with Google</Typography>
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Auth
