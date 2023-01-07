import { Card } from '@mui/material'
import React from 'react'
import { Title, Admin,Resource } from 'react-admin'
import CardContent from '@mui/material/CardContent'
import Payments from '../Payments'
import Suscriptions from '../Suscriptions'


const Dashboard = () => {
  return (
    <Admin>
      <Resource name='payments' list={<Payments/>}/>
      <Resource name='suscriptions' list={<Suscriptions/>}/>
    </Admin>
  )
}

export default Dashboard
