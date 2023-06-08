export const toPdfList = [
    {
        title: 'WORD в PDF',
        text: 'Конвертировать ваши документы в PDF-файл, который будет таким же самым как и оригинальный DOC или DOCX',
        image: 'doc.svg',
        link: '/docx-pdf',
    },
    {
        title: 'POWERPOINT в PDF',
        text: 'Конвертировать ваши презентации в PDF-файл, который будет таким же самым как и оригинальный PPT или PPTX',
        image: 'ppt.svg',
        link: '/pptx-pdf',
    },
    {
        title: 'EXCEL в PDF',
        text: 'Преобразование ваших таблиц с колонками в PDF файл, с учетом ширины PDF. Книжная или альбомная ориентация. Ваш выбор',
        image: 'xls.svg',
        link: '/xlsx-pdf',
    },
    {
        title: 'JPG в PDF',
        text: 'Конвертируйте ваши изображения в формат PDF. Регуляция ориентации и полей',
        image: 'image.svg',
        link: '/jpg-pdf',
    },
    {
        title: 'HTML в PDF',
        text: 'Преобразуйте веб-страницы в HTML в PDF-файл. Скопируйте и вставьте URL-адрес нужной страницы и конвертируйте его в формат PDF одним щелчком мыши',
        image: 'html.svg',
        link: '/html-pdf',
    },
]

export const fromPdfList = [
    {
        title: 'PDF в WORDF',
        text: 'Конвертируйте ваши PDF файлы в легко редактируемые DOC и DOCX документы. Преобразованный WORD документ будет точным почти на 100%',
        image: 'doc.svg',
        link: '/pdf-docx',
    },
    {
        title: 'PDF в  POWERPOINT',
        text: 'Конвертируйте ваши PDF файлы в легко редактируемые PPT и PPTX слайд-шоу',
        image: 'ppt.svg',
        link: '/pdf-pptx',
    },
    {
        title: 'PDF в EXCEL',
        text: 'Извлекайте данные прямо из PDF-файлов в электронные таблицы EXCEL, всего через несколько секунд',
        image: 'xls.svg',
        link: '/pdf-xlsx',
    },
    {
        title: 'PDF в JPG',
        text: 'Извлекайте все изображения, содержащиеся в PDF или конвертируйте каждую страницу в файл JPG',
        image: 'image.svg',
        link: '/pdf-jpg',
    },
]

export const fullPdfList = [...fromPdfList, ...toPdfList]

export const homeTitle = 'Онлайн - инструменты для любителей PDF'
export const homeDescription = 'Полностью бесплатные онлайн-инструменты для объединения, разделения, сжатия PDF-файлов, преобразования документов Office в PDF-файлы, преобразования PDF-файлов в JPG и JPG в PDF. Без необходимости установки'