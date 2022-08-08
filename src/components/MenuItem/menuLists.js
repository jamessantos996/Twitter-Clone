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
        icon: <HomeOutlinedIcon />
    },
    {
        name: 'explore',
        label: 'Explore',
        icon: <TagOutlinedIcon />
    },
    {
        name: 'notifications',
        label: 'Notifications',
        icon: <NotificationsNoneOutlinedIcon />
    },
    {
        name: 'messages',
        label: 'Messages',
        icon: <MailOutlineOutlinedIcon />
    },
    {
        name: 'bookmarks',
        label: 'Bookmarks',
        icon: <BookmarkBorderOutlinedIcon />
    },
    {
        name: 'lists',
        label: 'Lists',
        icon: <ListAltOutlinedIcon />
    },
    {
        name: 'profile',
        label: 'Profile',
        icon: <PersonOutlinedIcon />
    },
    {
        name: 'more',
        label: 'More',
        icon: <MoreHorizOutlinedIcon />
    }
]