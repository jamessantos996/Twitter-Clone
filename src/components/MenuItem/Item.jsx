import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, Badge, styled, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { menuItems } from '../MenuItem/menuLists'
import TwitterIcon from '@mui/icons-material/Twitter';
import TweetButton from '../Buttons/TweetButton';
import CreateIcon from '@mui/icons-material/Create';

const StyledMenuItem = styled(MenuItem)(({ theme }) =>({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    ":hover":{
        backgroundColor: 'transparent'
    },
    [theme.breakpoints.down('lg')]: {
        justifyContent: 'flex-end'
    }
}));

const StyledBox = styled(Box)(({ theme }) =>({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    padding: '5px 10px',
    borderRadius: '20px',
    ":hover":{
        backgroundColor: 'rgba(231,233,234,0.1)'
    }
}));

const StyledListItemText = styled(ListItemText)(({ theme }) =>({

    "& .MuiTypography-root": {
        fontSize: '20px',
    },
    [theme.breakpoints.down('lg')]: {
        display: 'none'
    }
}));

const Item = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <MenuList>
            <MenuItem disableRipple sx={{
                '&:hover':{
                    backgroundColor: 'transparent',
                    cursor: 'default'
                }
            }}>
                <TwitterIcon sx={{
                    '&:hover':{
                        backgroundColor: 'rgba(255,255,255, 0.3)',
                        cursor: 'pointer',
                        borderRadius: '50%',
                    }
                }}/>
            </MenuItem>
            { menuItems?.map(menu =>(
                <StyledMenuItem key={menu.name} disableRipple component={Link} to='/'> 
                    <StyledBox display='flex'>
                        <ListItemIcon>
                            <Badge variant='dot' color="primary">
                                { menu.icon }
                            </Badge>
                        </ListItemIcon>
                        <StyledListItemText>
                            { menu.label }
                        </StyledListItemText>
                    </StyledBox>
                </StyledMenuItem>
            ))}
            <MenuItem disableRipple>
                { matches ? (
                    <IconButton>
                        <CreateIcon />
                    </IconButton>
                ) :
                (
                    <TweetButton fullWidth={true}/>
                )}
                
            </MenuItem>
        </MenuList>
        
    )
}

export default Item;