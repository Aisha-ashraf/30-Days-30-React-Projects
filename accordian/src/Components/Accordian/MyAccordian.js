import React , {useState} from 'react'
import './Accordian.css'


const MyAccordian = ({Question , answer}) => {
    const [show , setShow] = useState(false);
  return (
    <>
    <div className='main-heading'>
        <button onClick={() => setShow(!show)}>{show? '–':'+'}</button>
    <h1>{Question}</h1>
    </div>
    {show && <p className='answers'>{answer}</p>}
   
    </>
    
  )
}

export default MyAccordian