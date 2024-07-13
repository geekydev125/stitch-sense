import { UseFormRegister } from "react-hook-form"
import { IContactFormData } from "./ContactForm"


interface Props {
    value: IContactFormData['contactMethod'],
    label: string,
    required?: boolean,
    register: UseFormRegister<IContactFormData>
}

function RadioButton({
    value,
    label,
    required = false,
    register
}: Props) {
    return (
        <div className="form-control">
            <label className="label cursor-pointer">
                <input required={required} {...register('contactMethod')} type="radio" name="contactMethod" value={value} className="radio checked:bg-dark" />
                <span className="ml-2 label-text">{label}</span>
            </label>
        </div>
    )
}

export default RadioButton