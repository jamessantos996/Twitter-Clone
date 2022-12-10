import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export const menuItems = [
    {
        name: 'home',
        label: 'Home',
        icon: <HomeOutlinedIcon />,
        to: '/home'
    },
    {
        name: 'explore',
        label: 'Explore',
        icon: <TagOutlinedIcon />,
        to: '/explore'
    },
    {
        name: 'notifications',
        label: 'Notifications',
        icon: <NotificationsNoneOutlinedIcon />,
        to: '/notifications'
    },
    {
        name: 'messages',
        label: 'Messages',
        icon: <MailOutlineOutlinedIcon />,
        to: '/messages'
    },
    {
        name: 'bookmarks',
        label: 'Bookmarks',
        icon: <BookmarkBorderOutlinedIcon />,
        to: '/bookmarks'
    },
    {
        name: 'lists',
        label: 'Lists',
        icon: <ListAltOutlinedIcon />,
        to: '/lists'
    },
    {
        name: 'profile',
        label: 'Profile',
        icon: <PersonOutlinedIcon />,
        to: '/makiesss'
    },
    {
        name: 'more',
        label: 'More',
        icon: <MoreHorizOutlinedIcon />,
        to: '#'
    }
]