export default class FileService {
    static downloadByUrl = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }

    static downloadById = (id, files) => {
        files.forEach((file) => {
            if (file.id === id) {
                this.downloadByUrl(file.url);
            }
        });
    }
}