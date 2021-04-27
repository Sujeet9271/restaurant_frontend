import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const AfterSignin = [
  {
    title: 'Orders',
    path: '/orders',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Today's Orders",
        path: '/orders/today',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'All Orders',
        path: '/orders/all/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Menu',
    path: '/menu',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Category',
        path: '/menu/category',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Sub Category',
        path: '/menu/subcategory',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Product',
        path: '/menu/products',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'LogOut',
    path: '/Logout',
    icon: <IoIcons.IoIosPaper />
    
  }
];

export const BeforeSignin = [
  {
    title: 'Signin',
    path: '/Signin',
    icon: <AiIcons.AiFillHome />,
    
  },
  {
    title: 'Signup',
    path: '/Signup',
    icon: <IoIcons.IoIosPaper />
    
  }
];