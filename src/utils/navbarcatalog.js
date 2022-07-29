import React from 'react';
import Generic from '../pages/Generic';
// import HomePage from '../pages/Home';
// import CatalogPage from '../pages/Catalogpage'


export const navbars = [
  {
    id: 1,
    title: 'Ophthalmology',
    path: '/ophthalmology',
    Element: <Generic />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: 'Sterilization and Disinfection',
    path: '/sterilization_and_disinfection',
    Element: <Generic />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: 'Patient Life Support',
    path: '/patient_life_support',
    Element: <Generic />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: 'Stomatology ',
    path: '/stomatology ',
    Element: <Generic />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 5,
    title: 'Hospital Furniture',
    path: '/hospital_furniture',
    Element: <Generic />,
    search: '?',
    hidden: false,
    private: false,
  },
];
export default navbars