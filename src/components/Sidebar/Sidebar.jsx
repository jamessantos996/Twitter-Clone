import { Box } from '@mui/material'
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Trends from '../Trends/Trends'

const Sidebar = () => {
  return (
    <Box sx={{ width: '350px' }}>
      <SearchBar />
      <Trends />
    </Box>

  )
}

export default Sidebar