import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Operation} from "../reducer/reducer";
import {getError} from "../reducer/selectors";

import CardsList from "./cards-list";
import Header from "./header";
import Main from "./main";
import Wrapper from "./wrapper";

const App:React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const errorStyle = React.useRef({color: `red`});

  React.useEffect(() => {
    dispatch(Operation.getCardsData());
  }, [dispatch]);

  return (
    <Wrapper>
      {
        error
          ? <h1 style={errorStyle.current}>{error}</h1>
          :
          <>
            <Header />
            <Main>
              <CardsList />
            </Main>
          </>
      }
    </Wrapper>
  );
};

export default App;
