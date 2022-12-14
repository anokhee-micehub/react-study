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

const propsObj = {
  image: (
    <img
      src="https://googlefonts.github.io/korean/public/assets/og-img.png"
      alt="Google Fonts + 한국어"
    />
  ),
  title: "Google Fonts + 한국어",
  category: "OSS",
  summary: `좋은 타이포그래피를 통해 웹은 더욱 아름답고, 빠르며, 누구나 참여할 수 있는 공간이 될 수
  있습니다. Google Fonts는 이 사이트에 수록된 오픈 소스 한글 폰트를 머신 러닝에 기반을 둔
  최적화 기술을 통해 시범적으로 제공합니다.`,
  link: "https://googlefonts.github.io/korean/",
};

function App() {
  return (
    <div>
      <MaterialCard />
      <ThemeProvider theme={blueTheme}>
        <StyledCard {...propsObj} />
      </ThemeProvider>
      <ThemeProvider theme={orangeTheme}>
        <StyledCard {...propsObj} />
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
