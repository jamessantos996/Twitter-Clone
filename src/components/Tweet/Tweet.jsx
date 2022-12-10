import { Avatar, Box, IconButton, Stack, Typography, styled, Tooltip } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';

const ButtonContainer = styled(Box)(({ theme, buttonColor }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  ":hover .MuiButtonBase-root": {
    color: buttonColor,
    // backgroundColor: buttonColor
  },
  ":hover .MuiTypography-root": {
    color: buttonColor
  }
}))

const Tweet = () => {
  return (
    <Stack direction='row' gap={2} px={3} pt={2}>
      <Avatar>L</Avatar>
      <Stack direction='column'>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack direction='row' alignItems='center' gap={0.5}>
            <Typography fontSize={15} fontWeight={700}>League of Legends: Wild Rift</Typography>
            <VerifiedIcon fontSize='small'/>
            <Typography variant='caption'>@wildrift</Typography>
            <Typography variant='caption'>·</Typography>
            <Typography variant='caption'>13h</Typography>
          </Stack>
          <IconButton size='small'>
            <MoreHorizOutlinedIcon />
          </IconButton>
        </Stack>
        <Typography>"Godlike" takes on new meaning with God Fist Lee Sin, now live in Wild Rift! 👊</Typography>
        <Box sx={{ width: '100%', height: 'auto', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '20px', overflow: 'hidden' }} mt={2}>
          <img 
            src="https://pbs.twimg.com/media/FZW96NfVQAAXi-n?format=jpg&name=small"
            style={{ width: '100%', objectFit: 'contain' }}
           />
        </Box>
        <Stack direction='row' justifyContent='space-between' maxWidth={425}>
          <Tooltip title="Reply" placement='bottom-start'>
            <ButtonContainer buttonColor='#1d9bf0'>
              <IconButton size='small'>
                <ModeCommentOutlinedIcon fontSize='small'/>
              </IconButton>
              <Typography>24</Typography>
            </ButtonContainer>
          </Tooltip>
          <Tooltip title="Retweet" placement='bottom-start'>
            <ButtonContainer buttonColor='#00ba7c'>
              <IconButton>
                <ShareOutlinedIcon fontSize='small'/>
              </IconButton>
              <Typography>39</Typography>
            </ButtonContainer>
          </Tooltip>
          <Tooltip title="Like" placement='bottom-start'>
            <ButtonContainer buttonColor='#f91880'>
              <IconButton>
                <FavoriteBorderOutlinedIcon fontSize='small'/>
              </IconButton>
              <Typography>575</Typography>
            </ButtonContainer>
          </Tooltip>
          <Tooltip title="Share" placement='bottom-start'>
            <ButtonContainer buttonColor='#1d9bf0'>
              <IconButton>
                <IosShareOutlinedIcon fontSize='small'/>
              </IconButton>
            </ButtonContainer>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Tweet