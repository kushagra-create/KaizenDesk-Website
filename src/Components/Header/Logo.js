import { Box } from "@mui/material";
import Image from "next/image";
import { Link } from "react-scroll";

//Logos
import Logos from "Assets/header/new logo.png";

const Logo = () => {
  return (
    <Box sx={{ mt: "2px", a: { cursor: "pointer" } }}>
      <Link to="home" spy={true} smooth={true} duration={500}>
        <Image src={Logos} width={225} height={150} alt="Logo" />
      </Link>
    </Box>
  );
};
export default Logo;
