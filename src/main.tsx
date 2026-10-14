import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PlayDemo from './PlayDemo'
import Support from './Support'
import DownloadGame from './DownloadGame'
import Instructions from './Instructions'

import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";

const appRouter = createHashRouter([
    {
	path: "/",
	element: <App />
    },
    {
	path: "/play",
	element: <PlayDemo />
    },
    {
	path: "/support",
	element: <Support/>
    },
    {
	path: "/download",
	element : <DownloadGame/>
    },
    {
	path:"/howto",
	element: <Instructions/>
    }
 ]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
