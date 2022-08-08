import { Box } from "@mui/material"
import ShowMoreTweets from "../ShowMoreTweets/ShowMoreTweets"
import Tweet from "../Tweet/Tweet"

const Tweets = () => {
  return (
    <Box>
        <ShowMoreTweets />
        <Tweet />
    </Box>
  )
}

export default Tweets