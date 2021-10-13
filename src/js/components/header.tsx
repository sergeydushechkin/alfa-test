import * as React from "react";

const Header:React.FunctionComponent = () => {
  return (
    <header className="site-header">
      <div className="site-header__container">
        <div className="site-header__checkbox checkbox">
          <input className="visually-hidden" type="checkbox" name="liked" id="liked" />
          <label htmlFor="liked">Show only liked</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
