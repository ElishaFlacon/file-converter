import { fullPdfList } from "../config";


type V = (path: string) => boolean;


export default class PathService {
    // проверяем ссылку по которой переходит пользователь
    // чтобы не было переходов по ссылкам для которых нет функционала, типо pdf-pdf
    static validation: V = (path) => {
        for (let index = 0; index < fullPdfList.length; index++) {
            // удаляем 1 букву, т.к. нам приходит путь типо /docx-pdf
            if (path === fullPdfList[index].link.substring(1)) {
                return true;
            }
        }
        return false;
    }
}