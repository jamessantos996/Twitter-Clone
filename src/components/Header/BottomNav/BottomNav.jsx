import { useState } from 'react';
import { BottomNavigation, BottomNavigationAction, Paper, styled } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const StyledBottomNavigation = styled(Paper)(({ theme }) =>({
    display: 'none',
    margin: '0 !important',
    "@media(max-height: 450px)": {
      display: 'block',
    },
    "@media(max-width: 500px)": {
      display: 'block',
    },
  }));

const BottomNav = () => {
    const [value, setValue] = useState(0);
    return (
        <StyledBottomNavigation sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'red', zIndex: 1000 }} elevation={5}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction label="Explore" icon={<TagOutlinedIcon />} />
                <BottomNavigationAction label="Notifications" icon={<NotificationsNoneOutlinedIcon />} />
                <BottomNavigationAction label="Messages" icon={<MailOutlineOutlinedIcon />} />
            </BottomNavigation>
        </StyledBottomNavigation>
    )
}

export default BottomNav