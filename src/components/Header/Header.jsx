import { Box, styled  } from '@mui/material';
import Item from '../MenuItem/Item';
import MyAccount from '../MyAccount/MyAccount';

const StyledBox = styled(Box)(({ theme }) =>({ 
    width: '275px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media(max-height: 450px)': {
      overflow: 'scroll'
    },
    [theme.breakpoints.down('lg')]: {
      width: 'auto'
    },
    // '@media(max-height: 584px)': {
    //   height: '100%'
    // }
    
    
}));

const StyledBoxLayout = styled(Box)(({ theme }) =>({
    flex: 0.4,
    display:'flex',
    justifyContent:'flex-end',
    [theme.breakpoints.down('lg')]: {
      flex: 0.1,
    }
}));


const Header = () => {
  return (
    <StyledBoxLayout>
      <StyledBox>
        <Item />
        <MyAccount />
      </StyledBox>
    </StyledBoxLayout>
  )
}

export default Header