// A custom hook to handle form fields(reuse stateful logic between components.)
import { useState } from "react";

export function useFormFields(initialState) {
  // Our Hook takes the initial state of our form fields as an object and saves it as a state variable called fields. 
  // The initial state in our case is an object where the keys are the ids of the form fields and the values are what the user enters.
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value,
      });
    },
  ];
}
