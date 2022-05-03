import { ChatEngine } from 'react-chat-engine';
import './App.css';
import  ChatFeed from './components/ChatFeed';
import Modal from './components/Modal';
const App = () => {
    if (!localStorage.getItem('username')) return <Modal/>

    return ( < ChatEngine 
        height = "100vh"
        projectID = "7fc62178-89cd-4e41-b9e4-9c6e6c4245c7"
        userName = {localStorage.getItem('username')}
        userSecret = {localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App;