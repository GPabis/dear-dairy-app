import { FC, useState } from "react";


const Home:FC= (props) => {

  const [name, setName] = useState('User');
  const [email, setemail] = useState('gpabis@gmail.com');
  const [password, setpassword] = useState('zaq12wsx');


  const inputHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setName(event.currentTarget.value);
  }

  const getResponseHandler = () =>{
    fetch('./api/user').then(res => res.json()).then(data => console.log(data));
  }

  const postResponseHandler = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    fetch(event.currentTarget.action, {
      method: "POST",
      body: JSON.stringify({name, email, password}),
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => res.json()).then(data => console.log(data)).catch(error => console.log(error));
  }

  return (
    <>
    <button onClick={getResponseHandler}>Test</button>
      <div>
        <h1>Hello World</h1>
        <form action="./api/user" method="POST" onSubmit={postResponseHandler}>
          <input id="name" type="text" required name="name" onChange={inputHandler}/>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}


export default Home;