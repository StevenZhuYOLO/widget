import React from 'react';
import Link from "./link";


const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/wiki" className="item">
        Wiki Search
      </Link>
      <Link href="/dropdown" className="item">
        Drop Down
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;