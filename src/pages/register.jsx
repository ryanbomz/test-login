import AuthLayout from "../component/layout/AuthLayout";
import FormRegister from "../component/Fragments/FormLogin";
import { Link } from "react-router-dom";


const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5">
        have an account?{" "}
        <Link href="/Login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
