import { useState } from 'react';
import { Avatar, Box, Button, ButtonGroup, IconButton, Stack, TextField, styled } from '@mui/material'
import TweetButton from '../Buttons/TweetButton'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const StyledForm = styled(Stack)(({ theme }) => ({
    ".MuiOutlinedInput-root.Mui-active":{
        backgroundColor: 'red'
    }
}))

export const TweetForm = () => {
    const [isPublic, setIsPublic] = useState(false);
  return (
    <Box px={1} >
        <Stack direction='row' gap={1} alignItems='flex-start'>
            <Avatar sx={{ height: 55, width: 55 }}>J</Avatar>
            <StyledForm direction='column' gap={1} flex={1}>
                <TextField className='input' sx={{ height: 55 }} placeholder="What's happening?" fullWidth multiline onClick={() => setIsPublic(true)}/>
                {isPublic && (
                    <Box className='public' py={1} sx={{ borderBottom: '1px solid #3c3b3b' }}>
                        <Button startIcon={<PublicOutlinedIcon />} sx={{ textTransform: 'none' }}>Everyone can reply</Button>
                    </Box>
                )}
                <Stack direction='row' justifyContent='space-between'>
                    <ButtonGroup>
                        <IconButton>
                            <ImageOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <GifBoxOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <PollOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <EmojiEmotionsOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <ScheduleOutlinedIcon />
                        </IconButton>
                        <IconButton disabled>
                            <PlaceOutlinedIcon />
                        </IconButton>
                    </ButtonGroup>
                    <TweetButton fullWidth={false} />
                </Stack>
            </StyledForm>
        </Stack>
    </Box>
  )
}
