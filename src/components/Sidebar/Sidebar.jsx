import { Box, styled } from '@mui/material'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Trends from '../Trends/Trends';

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
      display: 'none'
  }
}))

const Sidebar = () => {
  return (
    <StyledBox sx={{ width: '350px' }}>
      <SearchBar />
      <Trends />
    </StyledBox>

  )
}

export default Sidebar