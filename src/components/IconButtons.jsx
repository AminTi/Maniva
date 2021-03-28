import React from "react";
import { Box } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

const IconButtons = () => {
  return (
    <Box>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <IconButton>
        <AddShoppingCartIcon />
      </IconButton>
    </Box>
  );
};

export default IconButtons;
