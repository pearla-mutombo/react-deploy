import { useState, useEffect } from "react";


export default function useSecret(secretKey) {

  const [didMount, setDidMount] = useState(false);

  const [secretValue, setSecretValue] = useState("");

  useEffect(componentDidMount, []);

  function componentDidMount() {
    setDidMount(true);
    const storedValue = sessionStorage.getItem(secretKey);
    setSecretValue(storedValue);
   
  }

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const value = form.elements[secretKey].value;
    sessionStorage.setItem(secretKey, value);
    setSecretValue(value);
    form.reset();
  }
  return[secretValue, handleSubmit, didMount];
}

// function handleSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const value = { "api-key": form.element.apiKey.value };
//     sessionStorage.getItem("user api-key", apiKey);
//     alert("API Key saved successfully to session storage!");
//     setApiKey(apiKey);
//   }

//   function compoundDidMount() {
//     setDidMount(true);
//     sessionStorage.setItem("user api-key", apiKey);
//     setApiKey(apiKey);
//   }