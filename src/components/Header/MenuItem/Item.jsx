import { Box, ListItemIcon, ListItemText, MenuItem, Stack, Badge, styled, useTheme, useMediaQuery, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { menuItems } from './menuLists'
import TwitterIcon from '@mui/icons-material/Twitter';
import TweetButton from '../../Buttons/TweetButton';
import CreateIcon from '@mui/icons-material/Create';

const StyledBoxItem = styled(Box)(({ theme }) =>({
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
    padding: '12px',
    borderRadius: '20px',
    color:  "#fff",
    textDecoration: 'none',
    ":hover":{
        backgroundColor: 'rgba(231,233,234,0.1)'
    }
}));

const StyledListItemTypography = styled(Typography)(({ theme }) =>({
    fontSize: '20px',
    [theme.breakpoints.down('lg')]: {
        display: 'none'
    }
}));

const Item = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Stack direction="column">
            <StyledBoxItem sx={{
                '&:hover':{
                    backgroundColor: 'transparent',
                    cursor: 'default'
                }
            }}
                
            >
                <StyledBox>
                    <TwitterIcon sx={{
                        '&:hover':{
                            backgroundColor: 'rgba(255,255,255, 0.3)',
                            cursor: 'pointer',
                            borderRadius: '50%',
                        }
                    }}/>
                </StyledBox>
            </StyledBoxItem>
            { menuItems?.map(menu =>(
                <StyledBoxItem key={menu.name}> 
                    <StyledBox display='flex' component={Link} to={menu.to}>
                        <Box>
                            <Badge variant='dot' color="primary">
                                { menu.icon }
                            </Badge>
                        </Box>
                        <StyledListItemTypography>
                            { menu.label }
                        </StyledListItemTypography>
                    </StyledBox>
                </StyledBoxItem>
            ))}
            <StyledBoxItem mt={2}>
                { matches ? (
                    <IconButton sx={{ backgroundColor: "#1D9BF0" }}>
                        <CreateIcon />
                    </IconButton>
                ) :
                (
                    <TweetButton fullWidth={true}/>
                )}
                
            </StyledBoxItem>
        </Stack>
        
    )
}

export default Item;