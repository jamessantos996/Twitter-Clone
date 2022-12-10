import { Container, Stack, styled } from "@mui/material"
import Feeds from "../Feeds/Feeds"
import Sidebar from "../Sidebar/Sidebar";

const StyledContaner = styled(Container)(({ theme }) => ({
  flex: 1,
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  flex: 1,
  gap: '12px',
  "@media (max-height: 450px) and (max-width: 1520px)": {
    justifyContent: 'center',
  }
}));

const Content = () => {
  return (
    <StyledStack direction='row'>
      <Feeds />
      <Sidebar />
    </StyledStack>
  )
}

export default Content