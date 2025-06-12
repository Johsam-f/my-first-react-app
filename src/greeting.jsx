import { useState } from "react";

export function Person() {
    const [person, setPerson] = useState({ name: "John", age: 100 });
  
    const handleIncreaseAge = () => {
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 }));
      };

      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState('');
      
  
    // this console.log runs every time the component renders
    // what do you think this will print?
    console.log("during render: ", person);
  
    return (
      <>
        <h1>{firstName + ' ' + lastName}</h1>
        <input 
        type="text" 
        value ={firstName}
        placeholder="first name"
        onChange={(event) => setFirstName(event.target.value)}
        />
        <input
         type="text"
         value={lastName}
         placeholder="last name"
         onChange={(event) => setLastName(event.target.value)}
         />
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
  }

  export function CustomInput() {
    const [value, setValue] = useState("12");
  
    return (
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    );
  } 
  

  