import * as React from "react";
import CardsList from "./cards-list";
import Header from "./header";
import Main from "./main";
import Wrapper from "./wrapper";

const App:React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <CardsList />
      </Main>
    </Wrapper>
  );
};

export default App;
