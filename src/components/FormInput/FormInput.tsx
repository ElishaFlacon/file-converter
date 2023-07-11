import React, { ElementType, FC, ReactNode } from 'react';
import { Form } from 'rsuite';


interface props {
    name: string;
    label: ReactNode;
    accepter?: ElementType;
}


const FormInput: FC<props> = (props) => {
    const { name, label, accepter, ...rest } = props;


    return (
        <Form.Group controlId={`${name}-0`}>
            <Form.ControlLabel>
                {label}
            </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
}


export default FormInput;