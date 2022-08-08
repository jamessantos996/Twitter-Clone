import { Stack } from "@mui/material"
import Feeds from "../Feeds/Feeds"
import Sidebar from "../Sidebar/Sidebar"

const Content = () => {
  return (
    <Stack sx={{ flex: 1, gap: 3 }} direction='row'>
        <Feeds />
        <Sidebar />
    </Stack>
  )
}

export default Content