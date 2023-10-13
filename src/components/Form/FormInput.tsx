import React from 'react'
import { UseFormRegister } from 'react-hook-form';

interface FormInput {
  // register : (label : string , required : any)=> any;
  // register: UseFormRegister<Inputs>;
  register : any;
  label : string;
  placeholder : string;
  error : any;
}

const FormInput: React.FC<FormInput> =({register , label , placeholder , error}) => {
  return (
    <div>
    <label htmlFor={label} className="">
        {label}:
      </label>
      <input
        className="h-6 min-w-min "
        {...register(label, { required: true })}  
        placeholder={placeholder}
        id={label} 
      />
      {error && <span>{label} is required</span>}
    </div>
  )
}

export default FormInput