import React from 'react';

export default function SingleLot(props) {
  const lot = props.lot
  const score = (lot.review_count * lot.rating) / (lot.review_count + 1)
  return (
    <div>
      <img src={lot.image_url} alt='Parking Lot' />
      <p>Address: {lot.address}</p>
      <p>Rating: {lot.rating}</p>
      <p>Number of Reviews: {lot.review_count}</p>
      <p>Score: {score}</p>
      <a href={lot.url}>View on Yelp</a>
    </div>
  )
}
