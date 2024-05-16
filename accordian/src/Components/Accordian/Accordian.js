import React  , {useState}from 'react'
import { Questions } from './Api'
import './Accordian.css'
import MyAccordian from './MyAccordian'
const Accordian = () => {
  const [data , setData] = useState(Questions);
  return (

<>
<section className='main-div'>
  <h1>Web3</h1>
{
  data.map(
    (curElem) => {
      return <MyAccordian key = {curElem.id} {...curElem}/>
  
  
    })

}
</section>


  

</>
  )
}

export default Accordian