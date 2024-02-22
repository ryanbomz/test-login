import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen item-center">
      <div className="w-full masx-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          selamat datang, silahkan isi data diri anda
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? "dont have an account ? "
            : "already have an account ? "}

          {type === "Login" && (
            <Link href="/Register" className="font-bold text-blue-600">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link href="/Login" className="font-bold text-blue-600">
              Login
            </Link>
          )}

          {type === "logout" && (
            <Link to="/home" className="font-bold text-blue-600">
              Logout
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
