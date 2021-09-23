import React from 'react'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className='navigation'>
                  <img  src='https://logos-download.com/wp-content/uploads/2016/03/Netflix_Logo_2000.png' alt='logo'/>
            <ul>
                <Link to='/'>
                <li>
                <i class="fas fa-home"></i>Home
                </li>
                </Link>
                <Link to='/Movies'>
                <li><i class="fas fa-film"></i>Movies</li>
                </Link>
                <Link to='/About'>
                <li><i class="far fa-question-circle"></i>About</li>
                </Link>

            </ul>
        </div>
    );
};


