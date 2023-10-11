import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Root from '../MainLayout/Root';
const Router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>
    },
  ]);

export default Router;