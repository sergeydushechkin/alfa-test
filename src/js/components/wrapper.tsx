import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const Wrapper:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="wrapper">
      <div className="container">
        {props.children}
      </div>
    </div>
  );
};

export default Wrapper;
