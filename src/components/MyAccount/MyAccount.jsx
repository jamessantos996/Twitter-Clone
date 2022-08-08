import { Button, Avatar, Stack, styled, Typography } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const StyledButton = styled(Button)(({ theme }) => ({
    borderRadius: '60px'
    
}));

const MyAccount = () => {
  return (
    <StyledButton fullWidth sx={{ textTransform: 'none' }}>
        <Stack direction='row' alignItems='center' gap={3}>
            <Avatar>J</Avatar>
            <Stack direction='column'>
                <Typography variant='body2' textAlign='left'>James</Typography>
                <Typography variant='overline' textAlign='left'>@Jamessss996</Typography>
            </Stack>
            <MoreHorizOutlinedIcon />
        </Stack>
    </StyledButton>
  )
}

export default MyAccount