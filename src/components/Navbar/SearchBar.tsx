import { Search } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FC } from "react";
import { Flex } from "../../styles";

interface SearchBarProps {}

const SearchBar: FC<SearchBarProps> = ({}) => {
    return (
        <Flex gap={1}>
            <OutlinedInput sx={{ width: 350 }} placeholder='Search...' />
            <IconButton>
                <Search />
            </IconButton>
        </Flex>
    );
};

export default SearchBar;
