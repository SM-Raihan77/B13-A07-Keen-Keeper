import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Home from './pages/homePage/Home'
import Timeline from './pages/timelinePage/Timeline'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
      children: [ 
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/timeline",
          element: <Timeline />
        }
      ],
      errorElement: <NotFoundPage />
  },
 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
