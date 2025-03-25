import { Box, Stack, ButtonBase, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Icons
import {
  MapIcon,
  EmailIcon,
  PhoneIcon,
  FacebookIcon,
  TwitterIcon,
  BehaceIcon,
} from "Utilis/Icons";
import GitHubIcon from "@mui/icons-material/GitHub";

//Logo
import Logo from "Assets/header/new logo.png";

//Styles
import styles from "Styles/Footer/FooterOne.styles";

const FooterOne = () => {
  return (
    <Box>
      <Box sx={{ mb: "30px" }}>
        <Image src={Logo} width={225} height={150} alt="Logo" />
      </Box>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <MapIcon />
        </Box>
        <Box>
          <Typography variant="body1" component="p">
            Ramdaspeth, Nagpur-440012
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <EmailIcon />
        </Box>
        <Box>
          <Link href="mailto:kaizendesks@gmail.com">
            <a>
              <Typography variant="body1" component="p">
                kaizendesks@gmail.com
              </Typography>
            </a>
          </Link>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Address}>
        <Box>
          <PhoneIcon />
        </Box>
        <Box>
          <Link href="tel:+917249582964">
            <a>
              <Typography variant="body1" component="p">
                +91 7249582964
              </Typography>
            </a>
          </Link>
        </Box>
      </Stack>
      <Stack direction="row" sx={styles.Social}>
        <Link href="https://github.com/Kaizen-Desks">
          <a target="_blank">
            <ButtonBase>
              <GitHubIcon />
            </ButtonBase>
          </a>
        </Link>
        <Link href="https://k-deepak04.netlify.app/">
          <a target="_blank">
            <ButtonBase>
              <BehaceIcon />
            </ButtonBase>
          </a>
        </Link>
        <Link href="https://twitter.com/k_deepak04">
          <a target="_blank">
            <ButtonBase>
              <TwitterIcon />
            </ButtonBase>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/k-deepak04">
          <a target="_blank">
            <ButtonBase>
              <BehaceIcon />
            </ButtonBase>
          </a>
        </Link>
      </Stack>
    </Box>
  );
};
export default FooterOne;
