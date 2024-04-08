import { useState } from "react";


const CheckOutStepper = ({stepsConfig = []}) =>{
    const [currentStep , setcurrentStep] = useState(1);
    const [isComplete , setisComplete] = useState(false);
    if(!stepsConfig.length){
        return <></>;
    }
    const handleNext = () =>{

        setcurrentStep(prevStep =>{
            if(prevStep === stepsConfig.length){
                setisComplete(true)

            }
            else{
                return prevStep +1;
            }
        })
    }
    const calculateProgressBarWidth = () =>{
        return ((currentStep -1)/stepsConfig.length)
    }
const ActiveComponent  = stepsConfig[currentStep - 1] ?.component;
  return (
    <div className="stepper">
        {stepsConfig.map((step , index) =>{
            return(
                <> <div key = {step.name} className={`step ${currentStep > index+1 || isComplete ? "complete" :""} ${currentStep === index+1 ?"active" :"" }`}>
                <div className="step-number">{currentStep >index+1 || isComplete ? (
                    <span>&#10003;</span>
                ): (
                    index+1
                )}</div>
                <div className="step-name">{step.name}</div>
            </div>
            <div className="progress-bar">
                <div className="progress" style = {{width: `${calculateProgressBarWidth()}%`}}></div>
            </div>
            <ActiveComponent />
            {!isComplete && (<button className="btn" onClick={handleNext}>{currentStep === stepsConfig.length ? "Finish" : "Next"}</button>)}
            
            </>
               

            )

        })}
    </div>
  )
}

export default CheckOutStepper