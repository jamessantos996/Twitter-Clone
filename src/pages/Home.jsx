import {
    Stack,
    Container
} from '@mui/material';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';

const Home = () => {
  return (
    <Container maxWidth='xxl'>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Header />
          <Content />
        </Stack>
    </Container>
  )
}

export default Home