import React from "react";
import { ThemeProvider } from "styled-components";
import MaterialCard from "./components/MaterialCard";
// import CssModuleCard from "./components/CssModuleCard";
import StyledCard from "./components/StyledCard";

const blueTheme = {
  colors: {
    primary: "#228be6",
  },
};

const orangeTheme = {
  colors: {
    primary: "#ef891c",
  },
};

function App() {
  return (
    <div>
      <MaterialCard />
      <ThemeProvider theme={blueTheme}>
        <StyledCard />
      </ThemeProvider>
      <ThemeProvider theme={orangeTheme}>
        <StyledCard />
      </ThemeProvider>
    </div>
  );
}

export default App;

{
  /* <CssModuleCard /> */
}
{
  /* ordered값을 그냥 적으면 암묵적true */
}
{
  /* <List ordered fontSize="20px">
  <ListItem>아침</ListItem>
  <li>점심</li>
  <li>저녁</li>
</List> */
}
{
  /* orderd값을 아예 적지않으면 기본값 적용 */
}
{
  /* <List fontSize="1.5rem">
  <li>사과</li>
  <li>바나나</li>
  <li>포도</li>
</List> */
}
