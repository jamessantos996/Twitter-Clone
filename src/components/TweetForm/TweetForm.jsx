import { useState } from 'react';
import { Avatar, Box, Button, Stack, TextField, styled } from '@mui/material'
import TweetButton from '../Buttons/TweetButton'

import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import FormButtonGroup from './FormButtonGroup/FormButtonGroup';

const StyledBox = styled(Stack)(({ theme }) => ({
    "@media(max-width: 500px)": {
        display: 'none',
    }
}))

const StyledForm = styled(Stack)(({ theme }) => ({
    ".MuiOutlinedInput-root.Mui-active":{
        backgroundColor: 'red'
    }
}))

export const TweetForm = () => {
    const [isPublic, setIsPublic] = useState(false);
  return (
    <StyledBox px={1} >
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
                    <FormButtonGroup />
                    <TweetButton fullWidth={false} />
                </Stack>
            </StyledForm>
        </Stack>
    </StyledBox>
  )
}
