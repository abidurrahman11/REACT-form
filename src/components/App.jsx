import React, { useState } from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event){
    const {name, value} = event.target;

    if (name === "fName"){
      setFullName(preValue => {
        return{
          fName: value,
          lName: preValue.lName
        }
      })
    }
    else if (name === "lName"){
      setFullName(preValue => {
        return{
          fName: preValue.fName,
          lName: value
        }
      })
    }
  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" value={fullName.fName} />
        <input name="lName" onChange={handleChange} placeholder="Last Name" value={fullName.lName} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
