import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion'


function FeedbackList() {
  const { feedback } = useContext(FeedbackContext)
  const { handleDelete } = useContext(FeedbackContext)
  
  if (!feedback || feedback.lenght === 0) {
    return <p>No Feedback yet</p>
  }
  

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
export default FeedbackList
