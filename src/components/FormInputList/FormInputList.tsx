import React, { ElementType, FC, ReactNode, useRef, useState } from 'react';
import { Form, FormInstance, Stack } from 'rsuite';
import FormInput from '../FormInput/FormInput';
import { model } from '../../models';


interface inputProps {
    name: string;
    label: ReactNode;
    accepter?: ElementType;
    rest?: object;
}

interface props {
    formInputs: inputProps[];
    formButtons: ReactNode[];
    data: object;
}


const FormInputList: FC<props> = (props) => {
    const { formInputs, formButtons, data } = props;
    const [formValue, setFormValue] = useState(data);
    const formRef = useRef<FormInstance<Record<string, any>>>(null);


    return (
        <Form
            ref={formRef}
            formValue={formValue}
            onChange={(value) => setFormValue(value)}
            model={model}
        >
            <Stack direction='column' spacing='16px' alignItems='center' >
                {formInputs.map((formInput) => {
                    return (
                        <FormInput
                            key={formInput.name}
                            name={formInput.name}
                            label={formInput.label}
                            accepter={formInput.accepter}
                            {...formInput.rest}
                        />
                    )
                })}

                {formButtons.map((button) => button)}
            </Stack>
        </Form>
    );
}


export default FormInputList;