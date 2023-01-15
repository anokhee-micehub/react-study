import { Stack } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import StyleCard from "./StyleCard";
import CssModuleCard from "./CssModuleCard";
import MaterialCard from "./MaterialCard";

const CardDisplay = () => {
  const { param } = useParams();
  switch (param) {
    case "InlineStyleCard":
      return (
        <Stack gap={2}>
          <StyleCard />
          {param}
        </Stack>
      );
    case "CSSModuleCard":
      return (
        <Stack gap={2}>
          <CssModuleCard />
          {param}
        </Stack>
      );
    case "StyledComponentCard":
      return <Stack gap={2}>{param}</Stack>;
    case "MaterialCard":
      return (
        <Stack gap={2}>
          <MaterialCard />
          {param}
        </Stack>
      );
  }
};

export default CardDisplay;
