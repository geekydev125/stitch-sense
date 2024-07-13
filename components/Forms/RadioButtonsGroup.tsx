import { UseFormRegister } from "react-hook-form"

import RadioButton from "./RadioButton"
import { IContactFormData } from "./ContactForm"

interface Props {
    register: UseFormRegister<IContactFormData>
}

function RadioButtonsGroup({
    register
}: Props) {
    return (
        <>
            <label>I prefer to be contacted over:</label>
            <div className="flex flex-row gap-x-3">
                <RadioButton register={register} value="phone" label="Phone"/>
                <RadioButton register={register} value="email" label="Email"/>
                <RadioButton register={register} value="phoneAndEmail" label="Phone AND/OR Email" />
            </div>
        </>
    )
}

export default RadioButtonsGroup