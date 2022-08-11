import './Card.css'

function Card({ value, image, suit }) {
  return (
    <div className='container'>
      <div className='container__card'>
        <span
          className={suit === "HEARTS" ? "card--red" : suit === "DIAMONDS" ? "card--red" : suit === "SPADES" ? "card--black" : "card--black"}
        >
          {suit}
        </span>
        <span>{value}</span>
      </div>
      <img src={image} />
    </div>
  )
}

export default Card