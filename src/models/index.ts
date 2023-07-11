import { Schema } from 'rsuite';


const emailWrong = 'Введите верный адрес электронной почты!';
const requiredField = 'Это поле является обязательным!';
const passwordsNotMatch = 'Пароли не совпадают!';

const { StringType } = Schema.Types;

export const model = Schema.Model({
    email: StringType()
        .isEmail(emailWrong)
        .isRequired(requiredField),
    password: StringType().isRequired(requiredField),
    verify: StringType()
        .addRule((value, data) => {
            if (value !== data.password) {
                return false;
            }
            return true;
        }, passwordsNotMatch)
        .isRequired(requiredField)
});