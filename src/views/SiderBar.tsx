import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import moduleCss from './sider-bar.module.scss'
export default function SiderBar() {
    return (
        <>
            <div className={moduleCss.navLayout}>
                <ul className='side-bar-list'>
                    <Link to="projects">Analytics</Link>
                    <Link to="reports">Reports</Link>
                </ul>
                <Outlet />
            </div>
        </>
    )
}
