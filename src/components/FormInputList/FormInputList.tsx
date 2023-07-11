import React, { ElementType, FC, ReactNode, Ref } from 'react';
import { Form, FormInstance, Stack } from 'rsuite';
import FormInput from '../FormInput/FormInput';


interface inputProps {
    name: string;
    label: ReactNode;
    accepter?: ElementType;
    rest?: object;
}

interface props {
    formInputs: inputProps[];
    formButtons: ReactNode[];
    formValue: object;
    setFormValue: Function;
    formRef: Ref<FormInstance<Record<string, any>>>;
    model: any;
}


const FormInputList: FC<props> = (props) => {
    const { formInputs, formButtons, formValue, setFormValue, formRef, model } = props;


    return (
        <Form
            ref={formRef}
            formValue={formValue}
            onChange={(value) => setFormValue(value)}
            model={model}
        >
            <Stack direction='column' spacing='36px' alignItems='center' >
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
                <Stack direction='column' spacing='12px' alignItems='center'>
                    {formButtons.map((button) => button)}
                </Stack>
            </Stack>
        </Form>
    );
}


export default FormInputList;