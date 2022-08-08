import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) =>({
    backgroundColor: '#1D9BF0',
    borderRadius: 50,
    padding: '10px 20px',
    color: '#fff'
}));

const TweetButton = ({ fullWidth }) => {
  return (
    <StyledButton fullWidth={fullWidth}>Tweet</StyledButton>
  )
}

export default TweetButton;