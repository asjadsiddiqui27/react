import React from "react";
import UserContext from "./UserContext";
import Dcomponent from "./Dcomponent";
import { useState } from "react";
function Acomponent({children}) {

  const [userData, setUser] = useState("Waiting");

  let user = { name: "Asjad", rollNo: 56, course: "Btech" };

  return (
    <div>

      <UserContext.Provider value={{ userData,user,setUser }}>
        <Dcomponent />
        {children}
      </UserContext.Provider>
    
    </div>
  );
}
export default Acomponent;
