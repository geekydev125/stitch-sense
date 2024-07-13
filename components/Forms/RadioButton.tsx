import { UseFormRegister } from "react-hook-form"
import { IContactFormData } from "./ContactForm"


interface Props {
    value: IContactFormData['contactMethod'],
    label: string,
    register: UseFormRegister<IContactFormData>
}

function RadioButton({
    value,
    label,
    register
}: Props) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <input {...register('contactMethod')} type="radio" name="contactMethod" value={value} className="radio checked:bg-dark" />
                <span className="ml-2 label-text">{label}</span>
            </label>
        </div>
    )
}

export default RadioButton