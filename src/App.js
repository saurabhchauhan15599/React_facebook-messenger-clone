import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message';

function App() {

const [input,setInput]=useState('');
const [messages,setMessages]=useState([
  {username:'saurabh',text:'hey guys'},
  {username:'sam',text:'hii'},{username:'chauhan',text:'whatsapp!!'}
]);
const [username,setUsername]=useState('');

useEffect(()=>{
  //run code here..
  // if its blank inside [], this code runs ONCE when the app component loads
  //if we have a variable like input, it runs every time input changes. 
  setUsername(prompt('please enter your name'));
},[]);

const sendMessage=(event)=>{
  //all the logic here
  event.preventDefault();
  setMessages([...messages, {username:username,text:input}]);
  setInput('');
};

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" />
      <h1>Facebook Messenger</h1>
      <h2>Hello {username}</h2>

      {/* We enclose input and button under form and give type to button so that when we click enter on input it make changes //// also When we use form the browser refreshes automatically, so we cant see change, what we have to do is stop it from refreshing*/}

      <FormControl>
        <InputLabel h>Enter Message..</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button disabled={!input} variant='contained' color='primary' onClick={sendMessage} >Send messages</Button>
      </FormControl>


      {/* message themselves */}
{/* we created a different component called Message so that we can seperately style messages  */}

      {messages.map(message=>(
        <Message 
        message={message}
        username={username} />
      ))}
    </div>
  );
};

export default App; 