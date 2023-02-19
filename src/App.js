import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import About from './pages/About'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete the feedback?')) return
    const newFeedback = feedback.filter((item) => item.id !== id)
    setFeedback(newFeedback)
  }
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }

  const Root = [
    <FeedbackForm handleAdd={addFeedback} />,
    <FeedbackStats feedback={feedback} />,
    <FeedbackList feedback={feedback} handleDelete={handleDelete} />,
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
    <>
      <Header />
      <div className='container'>
        <RouterProvider router={router} />
      </div>
      
    </>
  )
}

export default App
