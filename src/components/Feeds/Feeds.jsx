import { Box, Divider, IconButton, Typography } from '@mui/material'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { TweetForm } from '../TweetForm/TweetForm';
import Tweets from '../Tweets/Tweets';

const Feeds = () => {
  return (
    
    <Box sx={{ maxWidth: '600px' }} position='relative' display='flex' flexDirection='column' gap={0.5} borderLeft='1px solid #3c3b3b' borderRight='1px solid #3c3b3b'>
      <Box position='sticky' py={2} px={2} sx={{ top: 0, left: 0, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backdropFilter: 'blur(4px)', zIndex: 100}}>
        <Typography variant='h6' fontWeight={800}>Home</Typography>
        <IconButton>
          <AutoAwesomeOutlinedIcon />
        </IconButton>
      </Box>
      <TweetForm />
      <Divider />
      <Tweets /> 
    </Box>
  )
}

export default Feeds