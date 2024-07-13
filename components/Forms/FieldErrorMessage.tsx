import { FieldErrors } from "react-hook-form"
import { IContactFormData } from "./ContactForm"

interface Props {
    name: IContactFormData[keyof IContactFormData]
    errors: FieldErrors<IContactFormData>
}

function FieldErrorMessage({
    name,
    errors,
}: Props) {
    return (
        <p className="text-sm text-red-500 min-h-[20px] pl-2">
            {
                errors[(name as keyof IContactFormData)] && errors[(name as keyof IContactFormData)]?.message as string
            }
        </p>
    )
}

export default FieldErrorMessage