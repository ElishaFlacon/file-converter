import { Schema } from 'rsuite';


const emailWrong = 'Введите верный адрес электронной почты!';
const requiredField = 'Это поле является обязательным!';
const passwordsNotMatch = 'Пароли не совпадают!';

const { StringType } = Schema.Types;

export const loginModel = Schema.Model({
    email: StringType()
        .isEmail(emailWrong)
        .isRequired(requiredField),
    password: StringType().isRequired(requiredField),
});

export const registrationModel = Schema.Model({
    email: StringType()
        .isEmail(emailWrong)
        .isRequired(requiredField),
    password: StringType().isRequired(requiredField),
    verifyPassword: StringType()
        .addRule((value, data) => {
            if (value !== data.password) {
                return false;
            }
            return true;
        }, passwordsNotMatch)
        .isRequired(requiredField)
});