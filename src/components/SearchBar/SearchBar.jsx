import { TextField, InputAdornment, styled, Box } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const StyledTextField = styled(TextField)(({ theme }) =>({
    "& .MuiOutlinedInput-root": {
        border: '1px solid rgba(0,0,0,0)',
        borderRadius: '50px',
        backgroundColor: '#202327'
    },
    "& .MuiOutlinedInput-root.Mui-focused": {
        backgroundColor: 'transparent',
        "& > fieldset": {
            borderColor: "#1d9cf0"
        },
        "& > .MuiInputAdornment-root": {
            color: "#1d9cf0",
        }
    }
}));

const SearchBar = () => {
  return (
    <Box position='sticky' mb={2}>
        <StyledTextField
            fullWidth
            placeholder="Search Twitter"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchOutlinedIcon />
                </InputAdornment>
            ),
            }}
        />
    </Box>
  )
}

export default SearchBar