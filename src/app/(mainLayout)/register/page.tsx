"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { useUserRegistration } from "@/src/hooks/auth.hook";
import registerValidationSchema from "@/src/schemas/register.schema";
import { registerUser } from "@/src/services/AuthServices";
import { Button } from "@heroui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler } from "react-hook-form";

const Register = () => {
  const router = useRouter();
  const {
    mutate: handleUserRegistration,
    isPending,
    data,
  } = useUserRegistration();
  const onSubmit: SubmitHandler<FieldValues> = async (userInfo) => {
    const newUserInfo = {
      ...userInfo,
      profilePhoto:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    };

    handleUserRegistration(newUserInfo);
    if (data?.success) {
      router.push("/login");
    }
  };
  return (
    <>
      <div className="flex h-[calc(100vh-100px)] flex-col items-center justify-center">
        <h3 className="my-2 text-xl font-bold">Register with FoundX</h3>
        <p className="mb-4">Help Lost Items Find Their Way Home</p>
        <div className="w-[35%]">
          <FXForm
            //! Only for development
            defaultValues={{
              name: "Mir Hussain",
              email: "mir@gmail.com",
              mobileNumber: "01711223344",
              password: "123456",
            }}
            resolver={zodResolver(registerValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FXInput placeholder="Name" name="name" id="name" type="text" />
            </div>
            <div className="py-3">
              <FXInput
                placeholder="Email"
                name="email"
                id="email"
                type="text"
              />
            </div>
            <div className="py-3">
              <FXInput
                placeholder="Mobile Number"
                name="mobileNumber"
                id="mobileNumber"
                type="text"
              />
            </div>
            <div className="py-3">
              <FXInput
                placeholder="Password"
                name="password"
                type="password"
                id="password"
              />
            </div>

            <Button
              className="my-3 w-full rounded-md bg-default-900 text-default"
              size="lg"
              type="submit"
            >
              Registration
            </Button>
          </FXForm>
          <div className="text-center">
            Already have an account ? <Link href={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
