import React from 'react'
import Menswallet from './MensWallet/Menswallet'

const NavigateProDetails = () => {
    const navigate = useNavigate()
  const handleProductdetails =()=>{
navigate('/productdetails')
  }
  return (
    <div onClick={NavigateProDetails}>

    </div>
  )
}

export default NavigateProDetails
