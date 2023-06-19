import React, { useMemo, useState } from 'react';
import Path from '../service/Path.service'
import { useParams } from 'react-router-dom';
import { Uploader } from 'rsuite';
import Text from '../components/UI/Text/Text';
import '../styles/Convertation.css';


function Convertation() {
    const [files, setFiles] = useState([]);
    const path = useParams();

    const data = useMemo(() => {
        const splited = path.convert.split('-')

        const from = splited[0]
        const to = splited[1]

        return {
            from,
            to,
            accept: from,
        }
    }, [path])

    // проверка, что ссылка коректная 
    // и у нас есть функционал с такой конвертацией
    // возможно стоит сделать просто перенаправление на home
    if (!Path.convertInterceptor(path.convert)) {
        return (
            <div className='convertation'>
                <Text size='xl'>
                    page not found
                </Text >
            </div>
        );
    }


    const downloadFileById = (id) => {
        files.forEach((file) => {
            if (file.id === id) {
                downloadFile(file.url);
            }
        })
    }

    const downloadFile = (file) => {
        const link = document.createElement('a');
        link.href = file;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
    }


    return (
        <div className='convertation'>
            <Uploader
                className='asd'
                listType='picture-text'
                action='http://localhost:8000/upload/file/'
                accept={`.${data.accept}`}
                data={{
                    from: data.from,
                    to: data.to,
                }}
                onSuccess={(response, file) => {
                    setFiles([
                        ...files,
                        {
                            url: response.file_url,
                            id: file.fileKey,
                        }
                    ]);
                    downloadFile(response.file_url);
                }}
                renderFileInfo={(file) => {
                    return (
                        <>
                            <span>{file.name}</span>
                            {file.status === 'finished' &&
                                <div
                                    className='absolute-text'
                                    onClick={() => downloadFileById(file.fileKey)}
                                >
                                    <span>Нажмите чтобы скачать</span>
                                </div >
                            }
                        </>
                    );
                }}
                draggable
            >
                <div>
                    <span className='drag'>
                        Выберите {data.from} файлы или перетащите их сюда
                    </span>
                </div>
            </Uploader>
        </div>
    );
}


export default Convertation;