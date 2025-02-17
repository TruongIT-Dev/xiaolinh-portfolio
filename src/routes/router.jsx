import React from 'react';

export const MainLayout = React.lazy(() => import('../components/Layout'));

export const Navbar = React.lazy(() => import('../layouts/Navbar'));
export const Footer = React.lazy(() => import('../layouts/Footer'));

export const Home = React.lazy(() => import('../components/Home'));