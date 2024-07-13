import { UseFormRegister } from "react-hook-form"
import { IContactFormData } from "./ContactForm"

interface Props {
    name: IContactFormData[keyof IContactFormData]
    register: UseFormRegister<IContactFormData>
    required?: boolean,
    placeholder?: string
}

function TextArea({
    name,
    register,
    required = false,
    placeholder = ""
}: Props) {
    return (
        <textarea {...register('message')} name={name} required={required} placeholder={`${placeholder} ${required ? "*" : ''}`} className="textarea textarea-bordered focus:outline-none focus:border-primary w-full min-h-[100px] text-base"></textarea>
    )
}

export default TextArea