import React from 'react'
import Navbar from '../Components/Navbar.tsx'



type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className=''>
      <Navbar/>
       <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque aperiam deleniti assumenda incidunt laudantium perspiciatis expedita mollitia sint, cumque exercitationem! Est error eveniet quod earum labore quos tenetur, dolorem voluptatum!</p>
    </div>
  )
}

export default Dashboard