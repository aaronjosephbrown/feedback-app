import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { v4 as uuidv4 } from 'uuid'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useEffect } from 'react'

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const { addFeedback, edit } = useContext(FeedbackContext)
  useEffect(() => {
    if (edit.edit) {
      setBtnDisabled(false)
      setText(edit.item.text)
      setRating(edit.item.rating)
    }
  }, [edit])

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Your review must more than 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        id: uuidv4(),
        text,
        rating,
      }
      addFeedback(newFeedback)
      setText('')
    }
    setRating(10)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your services with us?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating)
          }}
        />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            value={text}
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
