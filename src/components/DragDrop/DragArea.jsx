import React from 'react';
import classes from './DragDrop.module.css';


function DragArea({ state, setState }) {
    if (state) {
        return (
            <div
                className={classes.drag_area}
                onDragLeave={() => setState(false)}
                onDrop={() => setState(false)}
            />
        );
    }
}


export default DragArea;