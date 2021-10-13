import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const Main:React.FunctionComponent<Props> = (props: Props) => {
  return (
    <main>
      <section className="site-main">
        <h2 className="visually-hidden">Astronomy Picture of the Day cards</h2>
        {props.children}
      </section>
    </main>
  );
};

export default Main;
