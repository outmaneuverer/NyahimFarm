import React from 'react'
import OrderVisit from '../components/OrderVisit'
import MapSection from '../components/MapComponent'

const OrderVisitpage: React.FC = () => {
  return (
    <div>
      <MapSection />
      <OrderVisit />
    </div>
  )
}

export default OrderVisitpage