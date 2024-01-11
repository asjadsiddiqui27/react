import React from "react";
import { Link, Outlet } from "react-router-dom";
// import Acomponent from '../../props/Acomponent';
import Hooks from "./Hooks";
import FromState from "./FromState";
import ProductListState from "./ProductListState";
import LifeCycle from "./LifeCycle";
import UseEffect from "./UseEffect";
import StoreProd from "./StoreProd";
import Dcomponent from "../../props/Dcomponent";
import UserContext from "../../props/UserContext";
// import Acomponent from "../../props/Acomponent";
import Ccomponent from "../../props/Ccomponent";

// import Acomponent from "../../props/Acomponent.JSX";
// import State from './State';

function Services() {
  return (
    <div>

      <Ccomponent/>
      {/* <Acomponent /> */}
      <hr />
      <br />
      <StoreProd />
      <br />
      {/* <UseEffect/> */}
      <hr />
      <hr />
      <br />
      <LifeCycle />
      <br />
      <br />
      <FromState />
      <br />
      <hr />
      <ProductListState />
      <br />
      <Hooks />
      <br />
      {/* <Acomponent/> */}
      <hr />
      <Link to="nestedrouting"> Nested Routing</Link>
      <br />
      <br />
      <Link to="webdev"> webdev</Link>
      <hr />
      <hr />

      <Outlet />

      <br />
      <br />
    </div>
  );
}

export default Services;
