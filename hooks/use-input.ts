
import React, { useState } from 'react';

const useInput = (validateValue:(input:string) => boolean) =>{
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e:React.FormEvent<HTMLInputElement>) =>{
    setEnteredValue(e.currentTarget.value);
  }

  const inputBlurHandler = () =>{
    setIsTouched(true)
  }

  const reset = () =>{
    setEnteredValue('');
    setIsTouched(false);
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useInput;