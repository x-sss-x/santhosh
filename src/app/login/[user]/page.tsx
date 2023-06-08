import Input from "@/components/Input";
import LoginWithGoogle from "@/components/LoginWithGoogle";
import Button from "@/components/Button";

const Login = () => {
  return (
    <div>
      <h1 className="font-bold text-xl text-center m-4">
        Log into the existing account
      </h1>
      <div className="m-3">
        <Input inputVariant="email" placeholder="Phone number / email "></Input>
      </div>

      <div className="m-3">
        <Input inputVariant="username" placeholder="ID"></Input>
      </div>
      <div className="m-3">
        <Input inputVariant="password" placeholder="********"></Input>
      </div>
      <div className="m-3">
        <Button> Sign up</Button>
      </div>
      <h2 className="text-center text-xl m-2"> or </h2>
      <div className="">
      <LoginWithGoogle />
      <p className="ml-28 text-center text-sm text-sky-600 mb-4">
        forgot password?
      </p>
      </div>
      <div>
      <h1 className="font-bold text-lg text-center">
        Dont have an account?
      </h1>
      <h3 className=" text-center text-md text-sky-600">
            sign up
      </h3>
      </div>
    </div>

  );
};

export default Login;
