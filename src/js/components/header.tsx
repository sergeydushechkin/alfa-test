import * as React from "react";

const Header:React.FunctionComponent = () => {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <h1 className="site-header__heading">NASA Astronomy Picture of the Day (APOD)</h1>
        <div className="site-header__checkbox checkbox">
          <input className="visually-hidden" type="checkbox" name="liked" id="liked" />
          <label htmlFor="liked">Show only liked</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
