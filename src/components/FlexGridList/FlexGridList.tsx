import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, FlexboxGrid } from 'rsuite';
import classes from './FlexGridList.module.css';
import Icon from '../UI/Icon/Icon';
import IСonversionItem from '../../types/СonversionItem';


interface props {
    items: IСonversionItem[];
    title?: string;
    big?: boolean;
}


const FlexGridList: FC<props> = (props) => {
    const { items, title, big } = props;


    return (
        <FlexboxGrid className={big ? classes.grid_large : classes.grid_small} >
            {title && <div className={classes.title_small}>{title}</div>}

            {items.map((item) => {
                return (
                    <FlexboxGrid.Item
                        className={big && classes.item}
                        key={item.link}
                    >
                        <Link to={item.link} className={big ? classes.link : classes.button_small}>
                            <Button
                                className={big ? classes.button_large : classes.button_small}
                                startIcon={<Icon picture={item.image} size={big ? 'lg' : 'sm'} />}
                            >
                                <div className={big ? classes.title_large : ''}>
                                    {item.title}
                                </div>
                                {big && <div className={classes.text}>{item.text}</div>}
                            </Button>
                        </Link>
                    </FlexboxGrid.Item>
                );
            })}
        </ FlexboxGrid>
    );
}


export default FlexGridList;