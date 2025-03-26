"use client";
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface formConfig {
  defaultValues?: Record<string, any>;
  resolver?: any;
}
interface IProps extends formConfig {
  children: ReactNode;
  onSubmit: SubmitHandler<any>;
}
const FXForm = ({ children, onSubmit, defaultValues, resolver }: IProps) => {
  const methods = useForm({
    defaultValues,
    resolver,
  });
  const submitHandler = methods.handleSubmit;
  const formConfig: formConfig = {};
  if (!!defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }
  return (
    <FormProvider {...methods}>
      <form
        action="
   "
        onSubmit={submitHandler(onSubmit)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FXForm;
