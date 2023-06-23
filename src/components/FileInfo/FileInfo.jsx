import React from 'react';
import classes from './FileInfo.module.css';


function FileInfo({ file, onClick }) {
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