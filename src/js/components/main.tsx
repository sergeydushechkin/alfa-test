import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const Main:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <main>
      <section className="site-main">
        {props.children}
      </section>
    </main>
  );
};

export default Main;
