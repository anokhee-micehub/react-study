import { Button, capitalize, Stack } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const CardsPage = () => {
  return (
    <div>
      <Stack direction="row" gap={2} m={2}>
        {["InlineStyleCard", "CSSModuleCard", "StyledComponentCard", "MaterialCard"].map(v => (
          <Button LinkComponent={Link} to={v} variant="soft" key={v} color="info">
            {capitalize(v)}
          </Button>
        ))}
      </Stack>
      <Outlet />
    </div>
  );
};
