import { fullPdfList } from "../config";


export default class Path {
    // интерцептор, который проверяет ссылку по которой переходит пользователь
    // чтобы не было переходов по не существующим ссылкам (ссылкам для которых нет функционала, типо pdf-pdf)
    static convertInterceptor(path) {
        for (let index = 0; index < fullPdfList.length; index++) {
            // удаляем 1 букву, т.к. нам приходит путь типо /docx-pdf
            if (path === fullPdfList[index].link.substring(1)) {
                return true;
            }
        }
        return false;
    }
}