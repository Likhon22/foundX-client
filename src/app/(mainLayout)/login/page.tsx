"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import loginValidations from "@/src/schemas/login.schema";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Login = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="bg-gray-100 p-12 rounded-md w-[35%] mx-auto shadow-md ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl my-2 font-bold text-black">Login</h1>
          <p className="mb-4 text-gray-600">
            Welcome Back! Please enter your details
          </p>
        </div>
        <div>
          <FXForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginValidations.loginValidationSchema)}
          >
            <div className="py-3">
              <FXInput
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="py-3">
              <FXInput
                placeholder="Password"
                type="text"
                id="password"
                name="password"
                required
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md"
              >
                Login
              </Button>
            </div>
          </FXForm>
        </div>
      </div>
    </div>
  );
};

export default Login;
