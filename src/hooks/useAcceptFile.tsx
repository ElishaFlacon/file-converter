import { FileType } from "rsuite/esm/Uploader";

interface callbacks { fulfilled?: Function; reject?: Function }

export type UAFHook = (accept: string, callbacks: callbacks) => UAFUnder;
export type UAFUnder = (file: FileType) => boolean;


// хук принимает формат файла (без точки), пример: pdf
// и возвращает функцию, которая проверяет переданный файл на соответствие
// fulfilled и reject это callback функции, которые выполняются 
// при выполнении и отклонении, примерно как в промисах
export const useAcceptFile: UAFHook = (accept, callbacks) => {
    return (file) => {
        const format: string = file.name?.split('.').at(-1) || '';

        // используем !accept.includes(format), а не format !== accept
        // потому что в accept лежит много форматов, пример ".doc, .doxc, .ttf"
        if (!accept.includes(format)) {
            callbacks.reject && callbacks.reject();

            return false;
        }

        callbacks.fulfilled && callbacks.fulfilled();

        return true;
    }
}