import React, { FC } from 'react';
import classes from './DragDrop.module.css';


interface props {
    setState: Function;
}


const DragDetector: FC<props> = (props) => {
    const { setState } = props;

    return (
        <div
            className={classes.drag_detector}
            onDragEnter={() => setState(true)}
        />
    );
}


export default DragDetector;