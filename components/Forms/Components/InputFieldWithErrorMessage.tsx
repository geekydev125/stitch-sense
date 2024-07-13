import { FieldErrors, UseFormRegister } from "react-hook-form"
import { IContactFormData } from "../ContactForm"
import FieldErrorMessage from "./FieldErrorMessage"
import InputField from "./InputField"

interface Props {
    name: IContactFormData[keyof IContactFormData]
    register: UseFormRegister<IContactFormData>
    errors: FieldErrors<IContactFormData>
    required?: boolean,
    placeholder?: string
}

function InputFieldWithErrorMessage({
    name,
    register,
    errors,
    required = false,
    placeholder = ""
}: Props) {
    return (
        <div className="flex flex-col w-full">
            <InputField name={name} register={register} required={required} placeholder={placeholder} />

            <FieldErrorMessage name={name} errors={errors} />
        </div>
    )
}

export default InputFieldWithErrorMessage