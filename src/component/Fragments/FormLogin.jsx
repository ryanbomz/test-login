import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="email"
        type="email"
        placeholder="you@email.com"
        name="email"
      ></InputForm>
      <InputForm
        label="password"
        type="password"
        placeholder="******"
        name="password"
      ></InputForm>

      <Button classname="bg-Blue-600 w-full"> Login</Button>
    </form>
  );
};

export default FormLogin;
