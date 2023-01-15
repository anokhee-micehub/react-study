import { Box, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import React from "react";

export const PortfolioPage = () => {
  return (
    <Link component={NavLink} to="/">
      홈페이지로 돌아가기
    </Link>
  );
};
