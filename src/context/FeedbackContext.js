import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [edit, setEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    const res = await fetch('/feedback?_sort=id&_order=desc')
    const data = await res.json()
    setFeedback(data)
    setIsLoading(false)
  }

  const handleEdit = async (id) => {
    const res = await fetch(`/feedback/${id}`)
    const data = await res.json()
    setEdit({
      item: data,
      edit: true,
    })
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete the feedback?')) return
    await fetch(`/feedback/${id}`, {
      method: 'DELETE',
    })
    setFeedback(feedback.filter((item) => item.id !== id))  
  }

  const addFeedback = async (newFeedback) => {
    const res = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })
    const data = await res.json()
    setFeedback([data, ...feedback])
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        handleDelete,
        handleEdit,
        edit,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
