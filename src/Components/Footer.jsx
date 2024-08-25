import React from "react";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

const Footer = () => {
  return (
    <div className="bg-[#363636] w-full h-[5vh] border-t-2 border-x-2 border-x-[#505050]  border-t-[#505050] flex items-center ">
      <span className="text-[#BDBDBD] px-2 ">
        cart
        <PlayArrowOutlinedIcon /> cart_routes.py
        <PlayArrowOutlinedIcon />
        POST/carts/{"{cart_id}"}
      </span>
    </div>
  );
};

export default Footer;
