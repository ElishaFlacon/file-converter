import React, { FC } from 'react';
import classes from './DragDrop.module.css';


interface props {
    state: boolean;
    setState: Function;
}


const DragArea: FC<props> = (props) => {
    const { state, setState } = props;

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