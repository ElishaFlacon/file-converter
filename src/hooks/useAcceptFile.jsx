// хук принимает формат файла (без точки), пример: pdf
// и возвращает функцию, которая проверяет переданный файл на соответствие
export const useAcceptFile = (accept) => {

    return (file) => {
        if (file.name.split('.').at(-1) !== accept) {
            return false
        }

        return true
    }
}