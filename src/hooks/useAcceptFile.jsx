// хук принимает формат файла (без точки), пример: pdf
// и возвращает функцию, которая проверяет переданный файл на соответствие
// fulfilled и reject это callback функции, которые выполняются 
// при выполнении и отклонении, примерно как в промисах
export const useAcceptFile = (accept, { fulfilled, reject }) => {
    return (file) => {
        const format = file.name.split('.').at(-1);

        // используем !accept.includes(format), а не format !== accept
        // потому что в accept лежит много форматов, пример ".doc, .doxc, .ttf"
        if (!accept.includes(format)) {
            reject && reject();

            return false;
        }

        fulfilled && fulfilled();

        return true;
    }
}