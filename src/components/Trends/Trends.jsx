import { Box, MenuList, Typography, styled, MenuItem, ListItemText, Stack, IconButton } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const StyledBox = styled(Box)(({ theme }) => ({
    borderRadius: '10px',
    backgroundColor: '#16181C'
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
    fontWeight: 800
}))

const Trends = () => {
  return (
    <StyledBox>
        {/* StyledTypography */}
        <MenuList>
            <MenuItem>
                <ListItemText><StyledTypography variant='h5'>Trends for you</StyledTypography></ListItemText> 
            </MenuItem>
            <MenuItem sx={{ width: '100%' }} disableRipple>
                <Stack direction='row' sx={{ width: '100%' }} justifyContent='space-between'>
                    <Stack direction='column'>
                        <Typography variant='caption' color='#71767B'>Trending in Philippines</Typography>
                        <Typography variant='subtitle2'>Makiesss</Typography>
                        <Typography variant='caption' color='#71767B'>70.7K Tweets</Typography>
                    </Stack>
                    <IconButton sx={{ borderRadius: '50%', height: '35px', width: '35px' }} size='small'>
                        <MoreHorizOutlinedIcon />
                    </IconButton>
                </Stack>
            </MenuItem>
        </MenuList>
    </StyledBox>
  )
}

export default Trends