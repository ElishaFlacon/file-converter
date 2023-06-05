import React from 'react';
import { Link } from 'react-router-dom';
import { Button, FlexboxGrid } from 'rsuite';
import '../styles/GridList.css';


function GridList({ items, title }) {
    return (
        <FlexboxGrid className='grid-list'>
            <div className='grid-list__title'>
                {title}
            </div>

            {items.map((item) => {
                return (
                    <FlexboxGrid.Item key={item.title}>
                        <Link to={item.link}>
                            <Button
                                className='grid-list__button'
                                appearance='subtle'
                                startIcon={item.image}
                                block
                            >
                                {item.title}
                            </Button>
                        </Link>
                    </FlexboxGrid.Item>
                );
            })}

        </FlexboxGrid >
    );
}


export default GridList;