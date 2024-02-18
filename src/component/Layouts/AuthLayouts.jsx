const AuthLayout = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, title } = props;
  return (
    <div className="flex justify-center min-h-screen item-center">
      <div className="w-full masx-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          selamat datang, silahkan isi data diri anda
        </p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
