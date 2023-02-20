import { createContext, useState } from 'react'

const FeedbackContext = createContext()
 
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: '1',
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: '2',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ])

  const [edit, setEdit] = useState({
    item: {},
    edit: false,
  })

  const handleEdit = (id) => {
    const newFeedback = feedback.filter((item) => item.id !== id)
    setEdit({ item: feedback.find((item) => item.id === id), edit: true })
    setFeedback(newFeedback)
  }

  const handleDelete = (id) => {
    if (!window.confirm('Are you sure you want to delete the feedback?')) return
    const newFeedback = feedback.filter((item) => item.id !== id)
    setFeedback(newFeedback)
  }

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackContext.Provider
      value={{ feedback, addFeedback, handleDelete, handleEdit, edit }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
