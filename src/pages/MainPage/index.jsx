import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css';
import data from './linklist.json'

const MainPage = () => {
    return (
        <div id="mainpage">
            <div id="menuoageinner">
                TedfordMedia Demos (temporary page)
                <div id="pagelinksholder">
                    {data.links.map(item => (
                        <div className='pagelink' key={item.to}>
                            <Link to={item.to}>{item.label} </Link>
                        </div>
                    ))}
                </div></div>
        </div>
    );
};

export default MainPage;