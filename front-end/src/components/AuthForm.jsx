import Input from "./Input";
import { useState } from "react";

const initialState = { userName: "", password: "", confirmPassword: "" };

const AuthForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSwapSignInSignUp = () => {
    setIsSignIn((state) => !state);
    setShowPassword(false);
    setFormData(initialState);
  };
  const handleShowPassword = () => {
    setShowPassword((state) => !state);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex h-fit w-[20rem] flex-col rounded-lg border-2 border-black bg-white p-5 drop-shadow-xl"
      >
        <p className="mb-2 text-lg">{isSignIn ? "Sign in" : "Sign up"}</p>
        <Input
          name={"userName"}
          placeHolder={"Username"}
          type={"text"}
          value={formData.userName}
          handleChange={handleChange}
        />
        <Input
          name={"password"}
          placeHolder={"Password"}
          type={showPassword ? "text" : "password"}
          value={formData.password}
          handleChange={handleChange}
          handleShowPassword={handleShowPassword}
        />
        {!isSignIn && (
          <Input
            name={"confirmPassword"}
            placeHolder={"Confirm Password"}
            type={"password"}
            value={formData.confirmPassword}
            handleChange={handleChange}
            handleShowPassword={handleShowPassword}
          />
        )}

        <button
          type="submit"
          className="mt-2 cursor-pointer rounded-md bg-blue-600 px-3 py-2 text-center font-semibold uppercase text-white hover:bg-blue-700"
        >
          {isSignIn ? "Sign in" : "Sign up"}
        </button>

        <div className="mt-2 flex w-full justify-center gap-2">
          <p>{isSignIn ? "Doesn't have account?" : "Already have account?"}</p>
          <a
            className="cursor-pointer text-blue-600 hover:text-blue-700"
            onClick={handleSwapSignInSignUp}
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </a>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
