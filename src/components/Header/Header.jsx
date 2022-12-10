import { Box, styled  } from '@mui/material';
import Item from './MenuItem/Item'
import MyAccount from '../MyAccount/MyAccount';
import BottomNav from './BottomNav/BottomNav';

const StyledBox = styled(Box)(({ theme }) =>({ 
    position: 'fixed',
    width: '275px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '20px',
    [theme.breakpoints.down('lg')]: {
      width: 'auto',
      padding: '10px',
    },
    "@media(max-height: 450px)": {
      overflow: 'scroll',
      display: 'none',
    }
    
    
}));

const StyledBoxLayout = styled(Box)(({ theme }) =>({
    flex: 0.4,
    display:'flex',
    justifyContent:'flex-end',
    [theme.breakpoints.down('lg')]: {
      flex: 0.1,
    },
    "@media(max-width: 500px)": {
      display: 'none',
    },
    "@media(max-height: 450px)": {
      display: 'none',
    },

}));

const Header = () => {

  return (
    <>
      <StyledBoxLayout>
        <StyledBox>
          <Item />
          <MyAccount />
        </StyledBox>
      </StyledBoxLayout>
      <BottomNav />
    </>
  )
}

export default Header