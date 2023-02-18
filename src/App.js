import { useState } from 'react'
import FeedbackData from './data/FeedbackData'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const handleDelete = (id) => {
    if(!window.confirm('Are you sure you want to delete the feedback?')) return
    const newFeedback = feedback.filter((item) => item.id !== id)
    setFeedback(newFeedback)
  }
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback,...feedback])
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={handleDelete} />
      </div>
    </>
  )
}

export default App
