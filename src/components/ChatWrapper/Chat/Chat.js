import React from "react";
import "./Chat.css";

function Chat(props) {
    return (
        <div className="chat d-flex flex-column bg-white">
            <div className="chat-header d-flex justify-content-end">
                <button onClick={() => props.onClick(false)}>X</button>    
            </div>
            <div className="chat-content">

            </div>
        </div>
    );
}

export default Chat;
