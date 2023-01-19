import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  cardContentClasses,
  avatarClasses,
  cardMediaClasses,
  dividerClasses,
  Container,
  Stack,
} from "@mui/material";
import { ReplyAll } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { height } from "@mui/system";

const styles = {
  maxWidth: 304,
  margin: "auto",
  boxShadow: "rgb(0 0 0 / 12%) 0px 0px 20px 0px",
  transition: "all 0.3s ease 0s",
  [`& .${cardMediaClasses.root}`]: {
    width: "100%",
    clipPath: "polygon(0px 0px, 100% 0%, 100% 84%, 0% 100%)",
    paddingBottom: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  },
  [`& .${cardContentClasses.root}`]: {
    padding: 3,
  },
  [`& .${avatarClasses.root}`]: {
    width: 50,
    height: 50,
    border: "2px solid #fff",
    margin: "-48px 32px 0 auto",
    [`& .${avatarClasses.img}`]: {
      margin: 0,
    },
  },
};

const subCard = {
  minWidth: 237,
  [`& .${cardMediaClasses.root}`]: {
    height: "100%",
  },
};

const containerStyles = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const PortfolioPage = React.memo(function PostCard() {
  return (
    <Container sx={containerStyles}>
      <Stack direction="row" spacing={2}>
        <Card sx={styles}>
          <CardMedia
            image={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Color_icon_pink_v2.svg/1200px-Color_icon_pink_v2.svg.png"
            }
          />
          <Avatar
            src={
              "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcg5LCG%2FbtqVH98SvGc%2Fhfw9ZE1Khl8k8knK2Ibda1%2Fimg.jpg"
            }
          />
          <CardContent>
            <Typography variant="h4" fontSize="20px" fontWeight="bold" marginBottom="0.4em">
              안옥희
            </Typography>
            <Typography variant="body1" fontSize="16px" color="rgba(0,0,0,0.72)">
              안녕하세요, 안옥희입니다.
              <br />
              잔망루피는 귀여워.
            </Typography>
          </CardContent>
          <Box px={2} pb={2} mt={-1}>
            <IconButton>
              <Link component={NavLink} to="/">
                <ReplyAll />
              </Link>
            </IconButton>
          </Box>
        </Card>
        <Card sx={subCard}>
          <CardMedia
            image={"https://blog.kakaocdn.net/dn/WWXJG/btrIaPiZnQE/7r17t28bo9Ja0NPbLfgSP1/img.jpg"}
          />
        </Card>
        <Card sx={subCard}>
          <CardMedia
            image={
              "http://file3.instiz.net/data/cached_img/upload/2020/06/17/23/b418e93f0c79de21ceac3d7fedf87c42.jpg"
            }
          />
        </Card>
      </Stack>
    </Container>
  );
});

export default PortfolioPage;
