"use client";

import { AddIcon, TrashIcon } from "@/src/assets/icons";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXInput from "@/src/components/form/FXInput";
import FXSelect from "@/src/components/form/FXSelect";
import dateToIso from "@/src/utils/dateToIso";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { allDistict } from "@bangladeshi/bangladesh-address";
import { useGetCategories } from "@/src/hooks/categories.hook";

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
  const { data: categories } = useGetCategories();
  console.log(categories);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,

      questions: data.questions?.map(
        (question: { value: string }) => question.value
      ),
      dateFound: dateToIso(data.dateFound),
    };
    console.log(postData);
  };
  const cityOptions = allDistict()
    .sort()
    .map((city: string) => ({
      label: city,
      value: city,
    }));

  return (
    <div className="h-full rounded-xl bg-gradient-to-b from-default-100 px-[73px] py-12">
      <h1 className="text-2xl font-semibold">Post a found item</h1>
      <Divider className="mb-5 mt-3" />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput
                id="title"
                placeholder="Title"
                type="text"
                name="title"
              />
            </div>
            <div className="min-w-fit flex-1">
              <FXDatePicker label="Found date" name="dateFound" />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXInput
                id="location"
                placeholder="Location"
                type="text"
                name="location"
              />
            </div>
            <div className="min-w-fit flex-1">
              <FXSelect
                placeholder="City"
                label="City"
                name="city"
                options={cityOptions}
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 py-2">
            {/* <div className="min-w-fit flex-1">
              <FXSelect
                disabled={!categorySuccess}
                label="Category"
                name="category"
                options={categoryOption}
              />
            </div> */}
            <div className="min-w-fit flex-1">
              <label
                className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
                htmlFor="image"
              >
                Upload image
              </label>
              <input multiple className="hidden" id="image" type="file" />
            </div>
          </div>

          {/* <div className="flex flex-wrap-reverse gap-2 py-2">
            <div className="min-w-fit flex-1">
              <FXTextarea label="Description" name="description" />
            </div>
          </div> */}

          <Divider className="my-5" />

          <div className="flex justify-between items-center mb-5">
            <h1 className="text-xl">Owner verification questions</h1>
            <Button onClick={() => handleQuestions()} isIconOnly>
              <AddIcon />
            </Button>
          </div>

          <div className="space-y-5">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-center">
                <FXInput
                  name={`questions.${index}.value`}
                  placeholder="Question"
                  type="text"
                  id="question"
                />
                <Button
                  isIconOnly
                  className="h-14 w-16"
                  onClick={() => remove(index)}
                >
                  <TrashIcon />
                </Button>
              </div>
            ))}
          </div>

          <Divider className="my-5" />
          <div className="flex justify-end">
            <Button size="lg" type="submit">
              Post
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default CreatePost;
