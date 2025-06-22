import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <nav>
        <div>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/about">About</Link>
                </li>
                <li>
                    <Link to = "/layout">Layout</Link>
                </li>
                <li>
                    <Link to = "/nopage">No Page</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Layout