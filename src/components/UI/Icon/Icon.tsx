import React, { FC, useMemo } from 'react';
import classes from './Icon.module.css';


interface props {
    picture: string;
    size?: 'lg' | 'sm';
}


const Icon: FC<props> = (props) => {
    const { picture, size } = props;

    const style = useMemo(() => {
        if (size === 'lg') {
            return classes.lg;
        }
        return classes.sm;
    }, [size])


    return (
        <img
            className={style}
            src={require(`../../../assets/${picture}`)}
            alt="?"
        />
    );
}


export default Icon;