import React from "react";

// import { RouteInterface } from "Config/routes";

const loadRoute = (route: string): React.FC => {
  const Element = React.lazy(() => import(`../${route}`));

  // if (route.navBar) {
  //   const NavBar = React.lazy(() => import("Views/NavBar"));

  //   const ElementWithNavBar: React.FC = () => (
  //     <NavBar>
  //       <Element />
  //     </NavBar>
  //   );

  //   return ElementWithNavBar;
  // } else {
  return Element;
  // }
};

export default loadRoute;
