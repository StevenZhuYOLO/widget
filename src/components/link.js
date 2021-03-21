import React from 'react';

const Link = ({ className, href, children }) => {
  const onClickHelper = (e) => {
    if (e.metaKey || e.ctrlKKey) {
      return null;
    }

    e.preventDefault();
    window.history.pushState({},"",href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return (
    <a onClick={onClickHelper} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;