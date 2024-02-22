import AuthLayout from "../component/Layouts/AuthLayout";
import FormLogin from "../component/Fragments/FormLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
      <p className="text-sm mt-5">
        Dont have an account?{" "}
        <Link href="/Register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
