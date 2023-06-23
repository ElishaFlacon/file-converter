import React from 'react';
import classes from './DragButton.module.css';


function DragButton({ children }) {
    return (
        <div className={classes.button}>
            {children}
        </div>
    );
}


export default DragButton;