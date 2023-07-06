import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Uploader } from 'rsuite';
import classes from './Convertation.module.css';
import { API_URL } from '../../api';
import FileService from '../../service/File.service';
import FileInfo from '../../components/FileInfo/FileInfo';
import DragButton from '../../components/UI/DragButton/DragButton';
import DragArea from '../../components/DragDrop/DragArea';
import DragDetector from '../../components/DragDrop/DragDetector';
import { useVerifyPath } from '../../hooks/useVerifyPath';
import { useAcceptFile } from '../../hooks/useAcceptFile';
import { accepts } from '../../config';
import { useShowMessage } from '../../hooks/useShowMessage';
import IAccepts from '../../types/Accepts';
import { FileType } from 'rsuite/esm/Uploader';
import IConversionFiles from '../../types/ConversionFiles';
import IConversionResponse from '../../types/ConversionResponse';
import './Null.css';


function Convertation() {
    const [fileList, setFileList] = useState<FileType[]>([]);
    const [files, setFiles] = useState<IConversionFiles[]>([]);
    const [drag, setDrag] = useState<boolean>(false);

    const path = useParams();
    const [from, to] = path.convert?.split('-') || ['', ''];
    const accept = accepts[from as keyof IAccepts];

    const showMessage = useShowMessage();

    const verifyFormat = useAcceptFile(accept, {
        reject: () => {
            // такая запись setFileList(fileList); потому что состояние fileList
            // при его изменении в onChange, во время текущего вызова - не изменяется на новое
            // если понадобится использовать текущее значение, то setFileList(current=>[...current]);
            setFileList(fileList);
            showMessage('Похоже этот формат не доступ здесь!', 'error');
        }
    });

    useVerifyPath(path.convert || '');

    const download = (file: FileType) => FileService.downloadById(file.fileKey, files);

    const success = (response: IConversionResponse, file: FileType) => {
        setFiles([...files, { url: response.file_url, id: file.fileKey }]);
        FileService.downloadByUrl(response.file_url);
    }


    return (
        <div className={classes.convertation}>
            <DragDetector setState={setDrag} />
            <Uploader
                className={classes.uploader}
                listType='picture-text'
                action={`${API_URL}/upload/file/`}
                accept={accept}
                data={{ from, to }}
                // TODO headers={{ Authorization: `Basic ${btoa("login:password")}` }}
                onChange={(fileList) => setFileList(fileList)}
                onSuccess={success}
                shouldUpload={verifyFormat}
                fileList={fileList}
                renderFileInfo={(file) => <FileInfo file={file} onClick={download} />}
                draggable
            >
                <div>
                    <DragArea state={drag} setState={setDrag} />
                    <DragButton>
                        Выберите {from.toUpperCase()} файлы или перетащите их сюда
                    </DragButton>
                </div>
            </Uploader>
        </div>
    );
}


export default Convertation;