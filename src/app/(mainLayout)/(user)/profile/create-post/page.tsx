"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@heroui/button";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

const CreatePost = () => {
  const methods = useForm();
  const { control, handleSubmit } = methods;
  const { append, fields, remove } = useFieldArray({
    control,
    name: "questions",
  });
  const handleQuestions = () => {
    append({ name: "questions" });
  };
  const onSubmit = (data: any) => {
    const postData = {
      ...data,

      questions: data.questions?.map(
        (question: { value: string }) => question.value
      ),
    };
    console.log(postData);
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
          <br />
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner Verification</h1>
            <Button onClick={() => handleQuestions()}>Append</Button>
          </div>
          {fields.map((field, index) => (
            <div className="flex items-center my-6 gap-2" key={field.id}>
              <FXInput
                id={`questions.${index}`}
                name={`questions.${index}.value`}
                placeholder="Question"
                type="text"
                required
              />
              <Button onClick={() => remove(index)}>Remove</Button>
            </div>
          ))}
          <br />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
