import { useEffect, useState } from 'react';

const Route = ({path, children}) => {
  const [currentPath, setcurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setcurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate");
    };
  }, []);

  return window.location.pathname === path ? children : null;
};

export default Route;