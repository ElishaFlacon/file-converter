import IConversionFiles from "../types/ConversionFiles";


type DBU = (file_url: string) => void;
type DBI = (id: string | number | undefined, files: IConversionFiles[]) => void;


export default class FileService {
    static downloadByUrl: DBU = (file_url) => {
        const link: HTMLAnchorElement = document.createElement('a');

        link.href = file_url;
        document.body.appendChild(link);

        link.click();
        link.remove();
    }

    // скачивает файл по айди из списка существующих
    static downloadById: DBI = (id, files) => {
        files.forEach((file) => {
            if (file.id === id) {
                this.downloadByUrl(file.url);
            }
        });
    }
}