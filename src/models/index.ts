import { Schema } from 'rsuite';


const emailWrong = 'Введите верный адрес электронной почты!';
const requiredField = 'Это поле является обязательным!';
const passwordsNotMatch = 'Пароли не совпадают!';
const lengthWrong = 'Имя пользователя не может быть больше 32 символов!';

const { StringType } = Schema.Types;

export const emailModel = Schema.Model({
    email: StringType()
        .isEmail(emailWrong)
        .isRequired(requiredField)
});

export const loginModel = Schema.Model({
    email: StringType()
        .isEmail(emailWrong)
        .isRequired(requiredField),
    password: StringType().isRequired(requiredField),
});

export const registrationModel = Schema.Model({
    username: StringType()
        .maxLength(32, lengthWrong)
        .isRequired(requiredField),
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

export const confirmPasswordModel = Schema.Model({
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

export const confirmProfileModel = Schema.Model({
    username: StringType()
        .maxLength(32, lengthWrong)
        .isRequired(requiredField),
    email: StringType()
        .isEmail(emailWrong)
        .isRequired(requiredField),
})
