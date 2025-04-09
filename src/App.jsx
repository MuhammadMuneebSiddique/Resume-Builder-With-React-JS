import React from 'react'
import LandingPage from './pages/LandingPage'
import ResumeForm from './components/ResumeTemplate01'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import ContactSection from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

const App = () => {


  const router = createBrowserRouter([
      {
        path:"/",
        element:<LandingPage/>
      },
      {
          path:"/components/ResumeForm",
          element:<ResumeForm/>
      },
      {
          path:"/components/ContactSection",
          element:<ContactSection />
      },
      {
          path:"/components/AboutPage",
          element:<AboutPage />
      }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App