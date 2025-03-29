"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

const CreatePost = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const {} = useFieldArray({
    control,
    name: "questions",
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <p>Create Post</p>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput
            id="title"
            name="title"
            placeholder="Title"
            type="text"
            required
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
