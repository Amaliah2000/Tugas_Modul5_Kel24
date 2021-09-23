import React, {useState} from "react";
import "../Context.css";
import "../index.css";

export default function App() {

  const [values, setValues] = useState ({
    name: "",
    telp: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNameInputChange = (event) => {
    setValues({...values, name: event.target.value})
  }

  const handleTelpInputChange = (event) => {
    setValues({...values, telp: event.target.value})
  }

  const handleAddressInputChange = (event) => {
    setValues({...values, address: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.name && values.telp && values.address) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
          {submitted && valid ? <div class="success-message">Success! Thank you for Purchasing</div> :null}
        <input
        value={values.name}
        onChange={handleNameInputChange}
          // id="first-name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="firstName"
        />
        {submitted && !values.name ?<span>Please enter your name</span> : null}
        <input
        value={values.telp}
        onChange={handleTelpInputChange}
          // id="last-name"
          class="form-field"
          type="text"
          placeholder="Telephone Number"
          name="lastName"
        />
        {submitted && !values.telp  ?<span>Please enter telephone number</span> : null}
        <input
        value={values.address}
        onChange={handleAddressInputChange}
          // id="email"
          class="form-field"
          type="text"
          placeholder="Address"
          name="email"
        />
        {submitted && !values.address ? <span>Please enter an address</span> :null}
        <button class="form-field" type="submit">
         Purchase
        </button>
      </form>
    </div>
  );
}