import React from 'react'

function UncontrolledComponent() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            `Name: $ {nameRef.current.value} Email: $ {emailRef.current.value}, password`
        )
    };
  return (
    <div>
        <form onSubmit ={handleSubmit}>
            <label>Name: </label>
            <input type='text' ref ={nameRef} />
            <br>
            <label>Email :</label>
            <input type='email' ref={emailRef} />
            </br>
            <label type="password" ref={passwordRef} />

            <button type='submit'>Submit</button>
            
            
            
            
            </form></div>
  )
}
export default 
