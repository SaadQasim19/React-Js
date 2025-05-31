// import { useToast } from "@chakra-ui/react";

import formStore from "../Zustand/formStore.js";

export default function Form() {
  // const toast =  useToast();
  const { formData, setField, resetForm } = formStore((state) => state);

  const handleChange = (e) => {
    //& name and value are destructured from the event target of input fields of form , nothing else.

    const { name, value } = e.target;
    setField(name, value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      console.log("All fields are required");
      // toast({
      //   title: "Error",
      //   description: "All fields are required",
      //   status: "error",
      //   duration: 3000,
      //   isClosable: true,
      // });
    } else {
      // toast({
      //   title: "Success",
      //   description: "Form submitted successfully",
      //   status: "success",
      //   duration: 3000,
      //   isClosable: true,
      // });
      console.log(formData);
      resetForm();
    }
  };

  return (
    <div>
      <h2>Form Handling With ZuStand</h2>
      <form onSubmit={handleForm}>
        <input
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter Your Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit">Submit Form</button>

        <button onClick={resetForm}>Reset Form</button>
      </form>
    </div>
  );
}
