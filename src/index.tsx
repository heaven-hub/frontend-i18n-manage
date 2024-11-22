import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/theme/reset.scss';
import Routers from './Routers';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Routers />
    </React.StrictMode>
);
