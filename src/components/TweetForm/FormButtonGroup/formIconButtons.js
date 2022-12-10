import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export const formButtons = [
    {
        name: 'media',
        title: 'Media',
        icon: <ImageOutlinedIcon />
    },
    {
        name: 'gif',
        title: 'GIF',
        icon: <GifBoxOutlinedIcon />
    },
    {
        name: 'poll',
        title: 'Poll',
        icon: <PollOutlinedIcon />
    },
    {
        name: 'emoji',
        title: 'Emoji',
        icon: <EmojiEmotionsOutlinedIcon />
    },
    {
        name: 'schedule',
        title: 'Schedule',
        icon: <ScheduleOutlinedIcon />
    },
    {
        name: 'location',
        title: 'Location',
        icon: <PlaceOutlinedIcon />
    }
]