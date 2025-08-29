import React, { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [choose, setChoose] = useState("");
//   const [message, setMessage] = useState("");
//   const [radio, setRadio] = useState("");
//   const [policy, setPolicy] = useState(false);

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log({
//       name,
//       lastName,
//       email,
//       phone,
//       choose,
//       message,
//       radio,
//       policy,
//     });
//   }
  

//   return (
//     <div>
      
//       <div><h1>Form Demo</h1></div>
//       <h2>you typed is {name}</h2>
//       <h2>you typed is {lastName}</h2>
//       <h2>you typed is {email}</h2>
//       <h2>you typed is {phone}</h2>
//       <h2>you typed is {choose}</h2>
//       <h2>you typed is {message}</h2>
//       <h2>you typed is {radio}</h2>

//       <form onSubmit={handleSubmit}>
//         <label>First Name </label>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           type="text"
//           placeholder="enter your first name"
//         />
//         <br />

//         <label>Last Name </label>
//         <input
//           onChange={(e) => setLastName(e.target.value)}
//           value={lastName}
//           type="text"
//           placeholder="enter your last name"
//         />
//         <br />

//         <label>Email </label>
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email"
//           placeholder="example@mail.com"
//         />
//         <br />

//         <label>Phone No. </label>
//         <input
//           onChange={(e) => setPhone(e.target.value)}
//           value={phone}
//           type="tel"
//           placeholder="example: +91 12345-67890"
//         />
//         <br />

//         <div>
//           <label>---Choose---</label>
//           <select value={choose} onChange={(e) => setChoose(e.target.value)}>
//             <option value="">Select an option</option>
//             <option value="apple">apple</option>
//             <option value="banana">banana</option>
//             <option value="grapes">grapes</option>
//             <option value="pineapple">pineapple</option>
//           </select>
//         </div>
//         <br />

//         <label>Message:</label>
//         <textarea
//           rows="4"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <br />

//         <div>
//           <label>Male:</label>
//           <input
//             type="radio"
//             value="male"
//             checked={radio === "male"}
//             onChange={(e) => setRadio(e.target.value)}
//           />
//           <label>Female:</label>
//           <input
//             type="radio"
//             value="female"
//             checked={radio === "female"}
//             onChange={(e) => setRadio(e.target.value)}
//           />
//         </div>
//         <br />

//         <label>I accept the terms and conditions</label>
//         <input
//           type="checkbox"
//           checked={policy}
//           onChange={(e) => setPolicy(e.target.checked)}
//           required
//         />
//         <br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }






//! This is the take multiple value from input using dry principle......
 
function App() {
  const inputs = [
    { name: "name", type: "text", placeholder: "First Name" },
    { name: "lastName", type: "text", placeholder: "Last Name" },
    { name: "email", type: "email", placeholder: "Email" },
    { name: "phone", type: "tel", placeholder: "Phone Number" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div>
      <h1>Form Demo</h1>

      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <div key={input.name}>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={formData[input.name]}
              onChange={handleChange}
            />
            <br />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>

      {/* Show Output on Screen */}
      <h2>Output:</h2>
      <p>First Name: {formData.name}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
    </div>
  );
}

export default App;

