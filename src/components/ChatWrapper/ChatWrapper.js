import React, { useState } from "react";
import "./ChatWrapper.css";
import Chat from "./Chat/Chat";
import Icon from "./Icon/Icon";

function ChatWrapper() {
    const [open, setOpen] = useState(false);

    if (open) {
        return (
            <div className="chat-wrapper shadow">
                <Chat onClick={setOpen} />
            </div>
        );
    } else {
        return (
            <div className="chat-wrapper shadow">
                <Icon onClick={setOpen} />
            </div>
        );
    }
}

export default ChatWrapper;
