import { UseFormRegister } from "react-hook-form"
import { IContactFormData } from "../ContactForm"

interface Props {
    name: IContactFormData[keyof IContactFormData]
    register: UseFormRegister<IContactFormData>
    required?: boolean,
    placeholder?: string
}

function InputField({
    name,
    register,
    required = false,
    placeholder = ""
}: Props) {
    return (
        <input required={required} placeholder={`${placeholder} ${required ? "*" : ''}`} {...register(name as keyof IContactFormData)} type="text" className="input input-bordered w-full focus:outline-none focus:border-primary" />
    )
}

export default InputField