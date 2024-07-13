import { FieldErrors, UseFormRegister } from "react-hook-form"
import { IContactFormData } from "./ContactForm"
import FieldErrorMessage from "./FieldErrorMessage"
import TextArea from "./TextArea"

interface Props {
    name: IContactFormData['message']
    required?: boolean,
    placeholder?: string
    errors: FieldErrors<IContactFormData>
    register: UseFormRegister<IContactFormData>
}

function TextAreaWithErrorMessage({
    name,    
    required = false,
    placeholder = "",
    errors,
    register,
}:Props) {
    return (
        <>
            <TextArea name={name} register={register} required={required} placeholder={placeholder} />
            <FieldErrorMessage errors={errors} name={name} />
        </>
    )
}

export default TextAreaWithErrorMessage