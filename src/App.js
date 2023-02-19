import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import About from './pages/About'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  const Root = [
    <FeedbackForm />,
    <FeedbackStats />,
    <FeedbackList />,
    <AboutIconLink />,
  ]

  const router = createBrowserRouter([
    {
      path: '/',
      element: Root.map((item, index) => <div key={index}>{item}</div>),
    },
    {
      path: '/about',
      element: <About />,
    },
  ])

  return (
    <FeedbackProvider>
      <Header />
      <div className='container'>
        <RouterProvider router={router} />
      </div>
    </FeedbackProvider>
  )
}

export default App
