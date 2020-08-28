import React, { useState } from 'react'
import Form from './Form'
import axios from 'axios'
import SingleLot from './SingleLot'

export default function Main() {
  const [parkingLots, setParkingLots] = useState([])
  const getParkingLots = async (location) => {
    const { data } = await axios.post('/api/parkingLots', location)
    setParkingLots(JSON.parse(data).businesses)
  }
  return (
    <div>
      <Form getParkingLots={getParkingLots} />
      <div>
        {parkingLots.length ?
          parkingLots.map(lot => {
            return (
              <SingleLot lot={lot} key={lot.id} />
            )
          })
          : (<h3>No Results</h3>)}
      </div>
    </div>
  )
}
