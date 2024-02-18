import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your fullname"
        name="fullname"
      ></InputForm>
      <InputForm
        label="email"
        type="email"
        placeholder="you@email.com"
        name="email"
      ></InputForm>{" "}
      <InputForm
        label="password"
        type="password"
        placeholder="******"
        name="password"
      ></InputForm>
      <InputForm
        label="Confirm password"
        type="password"
        placeholder="******"
        name="confirmPassword"
      ></InputForm>
      <Button classname="bg-Blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;