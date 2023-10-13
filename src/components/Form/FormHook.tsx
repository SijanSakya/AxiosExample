"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";


import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import FormInput from "./FormInput";

type Inputs = {
  Username: string;
  Email: string;
  date: string;
};

export default function FormHook({title}:{title:string}) {
  const [inputType, setInputType] = useState("");
  const [focused, setFocused] = useState(false);

  const validationSchema = Yup.object().shape({
    dob: Yup.string()
      .required("Date is required")
      .matches(
        /^\d{1}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
        "Date must be a valid date in the format YYYY-MM-DD"
      ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  //   console.log(watch(""));

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <FormInput
          register={register}
          label="email"
          placeholder="Email"
          error={errors.Email}
          
        />
  
        <FormInput
          register={register}
          label="Username"
          placeholder="Username"
          error={errors.Username}
        />
        {/* <Form.Control
          readOnly={false}
          autoComplete="on"
          className="mt-3"
          type="date"
          placeholder="date"
          value=""
          style={{ borderRadius: "40px" }}
          {...register("date", { required: true ,valueAsDate: true})}
          onFocus={() => {
            setInputType("date");
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
            setInputType("text");
          }}
        />  */}

       
      

        <button className="bg-red-200 mt-3 col-md-1" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
