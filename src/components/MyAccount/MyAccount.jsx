import { Box, Button, Avatar, Stack, styled, Typography, useTheme, useMediaQuery } from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const StyledStack = styled(Stack)(({ theme }) => ({
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '16px',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'flex-end'
    }
}));

const StyledButton = styled(Box)(({ theme }) => ({
    borderRadius: '60px',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '12px',
    margin: '12px 0',
    cursor: 'pointer',
    ":hover":{
      backgroundColor: 'rgba(231,233,234,0.1)'
    },
    [theme.breakpoints.down('lg')]: {
      padding: '0px'
    }
}));

const MyAccount = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  return (
      <StyledButton fullWidth sx={{ textTransform: 'none' }}>
          <StyledStack direction='row' alignItems='center' gap={2} justifyContent='space-between'>
            {
              matches ? (
                <Avatar>J</Avatar>
              )
              :
              (
                <>
                  <Avatar>J</Avatar>
                  <Stack direction='column'>
                      <Typography variant='body2' textAlign='left'>James</Typography>
                      <Typography variant='overline' textAlign='left'>@Jamessss996</Typography>
                  </Stack>
                  <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <MoreHorizOutlinedIcon />
                  </Box>
                </>
              )
            }
              
          </StyledStack>
      </StyledButton>
  )
}

export default MyAccount