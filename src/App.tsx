import { useMultistepForm } from './useMultistepForm'
import { AccountForm } from './AccountForm'
import { UserForm } from './UserForm'
import { AddressForm } from './AddressForm'
import { useState, FormEvent } from 'react'


type FormData = {
  firstName: string
  lastName: string
  age: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA = {
  firstName: '',
  lastName: '',
  age: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm />, <AddressForm />, <AccountForm />
  ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    next()
  }
  return <div style={{
    position: 'relative',
    background: 'white',
    border: '1px solid black',
    padding: '2rem',
    margin: '1rem',
    borderRadius: '.5rem',
    fontFamily: 'Arial'
  }}>
    <form onSubmit={onSubmit}>
      <div style={{ position: 'absolute', top: '.5rem', right: '.5rem'}}>
        {currentStepIndex + 1} / {steps.length} 
      </div>
      {step}
      <div style={{
        marginTop: '1rem',
        display: 'flex',
        gap: '.5rem',
        justifyContent: 'flex-end'
      }}>
        {!isFirstStep && (<button type="button" onClick={back}>Back</button>)}
        {/* <button type="button" onClick={next}> */}
        {isLastStep ? <button disabled>Finished</button> : <button type="submit" >Next</button>
}
      </div>
    </form>
  </div>
}

export default App
