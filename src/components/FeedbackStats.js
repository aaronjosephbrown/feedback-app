import Proptypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {
  const averageRating =
    (feedback.reduce((total, item) => total + item.rating, 0) / feedback.length).toFixed(1).replace('.0', '') || 0

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      rating: Proptypes.number.isRequired,
      text: Proptypes.string.isRequired,
    })
  ),
}

export default FeedbackStats
