import React from 'react';
import classes from './DragDrop.module.css';


function DragDetector({ setState }) {
    return (
        <div
            className={classes.drag_detector}
            onDragEnter={() => setState(true)}
        />
    );
}


export default DragDetector;