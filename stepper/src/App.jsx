import CheckOutStepper from './components/checkOutStepper'
import './App.css'
const CHECKOUT_STEPS =[ 
  {
    name:"customer Info" ,
    component :() => <div>Provide your contact details.</div> 
  } ,
  {
    name:"shipping Info" ,
    component :() => <div>Provide your shipping details.</div>

  },
  {
    name:"payment" ,
    component :() => <div>Complete payment for your order</div>

  },
  { name:"Delivered" ,
  component :() => <div>your order has been delivered.</div>
}
]


const App= () => {
 

  return (
    <>
<CheckOutStepper stepsConfig = {CHECKOUT_STEPS}/>
    </>
  )
}

export default App
