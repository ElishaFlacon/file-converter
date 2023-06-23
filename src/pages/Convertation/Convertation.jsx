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
import './Null.css';


function Convertation() {
    const [files, setFiles] = useState([]);
    const [drag, setDrag] = useState(false);
    const path = useParams();
    const [from, to] = path.convert.split('-');

    useVerifyPath(path.convert);

    const download = (file) => FileService.downloadById(file.fileKey, files);

    const success = (response, file) => {
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
                accept={`.${from}`}
                data={{ from, to }}
                // TODO headers={{ Authorization: `Basic ${btoa("jopa:jopa")}` }}
                onSuccess={success}
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