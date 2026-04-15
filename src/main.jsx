import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Home from './pages/homePage/Home'
import Timeline from './pages/timelinePage/Timeline'
// import FriendDetails from './pages/friendDetails/FriendDetails';
import FriendDetails from './pages/friendDetails/FriendDetails'
import TimelineProvider from './Context/TimelineContext'
import Status from './pages/status/Status'


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/friends/:id",
        element: <FriendDetails />
      },
      {
        path: "/timeline",
        element: <Timeline />
      },
      {
        path:"/status",
        element: <Status/>
      }
    ],
    errorElement: <NotFoundPage />
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>

  </StrictMode>,
)
