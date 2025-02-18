import React from 'react';

export const MainLayout = React.lazy(() => import('../components/Layout'));

export const Navbar = React.lazy(() => import('../layouts/Navbar'));
export const Footer = React.lazy(() => import('../layouts/Footer'));

export const Unavaiable = React.lazy(() => import('../components/Unavaiable'));

export const Home = React.lazy(() => import('../components/Home'));
export const Hobby = React.lazy(() => import('../components/Hobby'));
export const Job = React.lazy(() => import('../components/Job'));
export const CV = React.lazy(() => import('../components/CV'));