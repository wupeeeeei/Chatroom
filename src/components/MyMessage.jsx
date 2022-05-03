//chat bubble we send
const MyMessage =({message})=>{
    if(message?.attachments?.lenghth>0){
        return(
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{float:'right'}}
            />
        )
    }
    return(
        <div className="message" style={{float:'right',marginRight:'18px',color:'white',backgroundColor:'#B9887D'}}>
            {message.text}
        </div>
    )
}

export default MyMessage;