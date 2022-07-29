import React from 'react';
import Generic from '../pages/Generic';
import HomePage from '../pages/Home';
import { Aboutpage } from '../pages/Aboutpage';
import { Contactpage } from '../pages/Contactpage';
import  Serviespage  from '../pages/Serviespage';
import  {Newspage}  from '../pages/Newspage';
import Newsidpage from '../pages/Newsidpage';
import Catalogpage from '../pages/Catalogpage';
import Catalogidpage from '../pages/Catalogidpage';
// import PropertiesPage from '../pages/Properties';


export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    Element: <HomePage />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: 'About',
    path: '/about',
    Element: <Aboutpage />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: 'Catalog',
    path: '/cotalog',
    Element: <Catalogpage />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: 'News',
    path: '/news',
    Element: <Newspage />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 5,
    title: 'Contact',
    path: '/contact',
    Element: <Contactpage />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 6,
    title: 'Servies',
    path: '/servies',
    Element: <Serviespage/>,
    search: '?',
    hidden: true,
    private: false,
  },
  {
    id: 7,
    title: 'NewsId',
    path: '/news/:id',
    Element: <Newsidpage/>,
    search: '?',
    hidden: true,
    private: false,
  },
  {
    id: 8,
    title: 'CatalogId',
    path: '/Catalog/:id',
    Element: <Catalogidpage/>,
    search: '?',
    hidden: true,
    private: false,
  },
];