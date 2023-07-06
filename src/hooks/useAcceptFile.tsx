interface callbacks { fulfilled: Function; reject: Function }
type Hook = (accept: string, callbacks: callbacks) => Under;
type Under = (file: File) => boolean;


// хук принимает формат файла (без точки), пример: pdf
// и возвращает функцию, которая проверяет переданный файл на соответствие
// fulfilled и reject это callback функции, которые выполняются 
// при выполнении и отклонении, примерно как в промисах
export const useAcceptFile: Hook = (accept, callbacks) => {
    return (file: File) => {
        const format: string = file.name.split('.').at(-1) || '';

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