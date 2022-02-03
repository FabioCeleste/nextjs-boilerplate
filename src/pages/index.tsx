import type { NextPage } from "next";

import styled from "styled-components";

const Header = styled.h1`
  color: red;
`;

const Home: NextPage = () => {
  return <Header>Hi</Header>;
};

export default Home;
