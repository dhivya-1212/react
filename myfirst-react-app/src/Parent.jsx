import React, { createContext } from "react";
import ChildA from "./ChildA";

//Creating context
const data = createContext();
const data1 = createContext();
const data2 = createContext();
const data3 = createContext();

function Parent() {
  const name = "Dhivya";
  const age = 28;
  const location = "Tirupur";
  const pincode = 641652;

  return (
    <div>
      {/*providing data */}
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <data2.Provider value={location}>
            <data3.Provider value={pincode}>
              <ChildA />
            </data3.Provider>
          </data2.Provider>
        </data1.Provider>
      </data.Provider>
    </div>
  );
}
export default Parent;
export { data, data1, data2, data3 };
