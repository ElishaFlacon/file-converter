import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FlexboxGrid } from 'rsuite';
import '../styles/GridList.css';
import Icon from './UI/Icon/Icon';


function GridList({ items, title, big }) {
    return (
        <FlexboxGrid className={big ? 'grid-list-b' : 'grid-list-s'} >
            {title && <div className='grid-list__title-s'>{title}</div>}

            {items.map((item) => {
                return (
                    <FlexboxGrid.Item
                        className={big ? 'grid-list__item' : ''}
                        key={item.link}
                    >
                        <Link to={item.link} className={big ? 'grid-list__link' : 'grid-list__button-s'}>
                            <Button
                                className={big ? 'grid-list__button-b' : 'grid-list__button-s'}
                                startIcon={<Icon picture={item.image} size={big ? 'lg' : 'sm'} />}
                            >
                                <div className={big ? 'grid-list__title-b' : ''}>
                                    {item.title}
                                </div>
                                {big && <div className='grid-list__text'>{item.text}</div>}
                            </Button>
                        </Link>
                    </FlexboxGrid.Item>
                );
            })}
        </ FlexboxGrid>
    );
}


export default GridList;