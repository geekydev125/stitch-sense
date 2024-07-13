import { UseFormRegister } from "react-hook-form"

import RadioButton from "./RadioButton"
import { IContactFormData } from "./ContactForm"

interface Props {
    register: UseFormRegister<IContactFormData>,
    required?: boolean
}

function RadioButtonsGroup({
    register,
    required
}: Props) {
    return (
        <>
            <label>I prefer to be contacted over:</label>
            <div className="flex flex-row gap-x-3">
                <RadioButton required={required} register={register} value="phone" label="Phone"/>
                <RadioButton required={required} register={register} value="email" label="Email"/>
                <RadioButton required={required} register={register} value="phoneAndEmail" label="Phone AND/OR Email" />
            </div>
        </>
    )
}

export default RadioButtonsGroup