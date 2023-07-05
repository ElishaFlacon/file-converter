import React, { FC } from 'react';
import classes from './FileInfo.module.css';
import { FileType } from 'rsuite/esm/Uploader';


interface props {
    file: FileType;
    onClick: Function;
}


const FileInfo: FC<props> = (props) => {
    const { file, onClick } = props;


    return (
        <>
            <span className={classes.title}>
                {file.name}
            </span>
            {file.status === 'finished' &&
                <div className={classes.absolute_text} onClick={() => onClick(file)}>
                    <span>Нажмите чтобы скачать</span>
                </div>
            }
        </>
    );
}


export default FileInfo;