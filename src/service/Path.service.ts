import { fullPdfList } from "../config";


type V = (path: string) => boolean;


export default class PathService {
    // проверяем ссылку по которой переходит пользователь
    // чтобы не было переходов по ссылкам для которых нет функционала, типо pdf-pdf
    static validation: V = (path) => {
        for (let index = 0; index < fullPdfList.length; index++) {
            if (path === fullPdfList[index].link.split('/').pop()) {
                return true;
            }
        }
        return false;
    }
}