import React, { useState } from 'react'
import useChat from '../../hooks/useChat';

function Chat() {
    const [userInput, setUserInput] = useState('');
    const { responses, loading, error, askBot } = useChat();

    const handleChat = async (event) => {
        event.preventDefault();
        if (!userInput.trim()) return;

        try {
            await askBot(userInput);
            setUserInput('');
        } catch (err) {
            console.error('Chat error:', err);
        }
    }

    const handleChange = (event) => {
        const { value } = event.target;
        setUserInput(value);
    }

    return (
        <div className="page-container">
            <div className="chat-container">
                <div className="chat-box">
                    <div className="chat-messages">
                        <div className="message-list">
                            {error && (
                                <div className="error-message">
                                    Error: {error.message}
                                </div>
                            )}
                            {userInput && (
                                <div className="user-message">
                                    {userInput}
                                </div>
                            )}
                            {responses && (
                                <div className="bot-message">
                                    {loading ? (
                                        <div className="loading">Loading...</div>
                                    ) : (
                                        responses
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="chat-input">
                        <form onSubmit={handleChat} className="input-form">
                            <input
                                name="user-input"
                                onChange={handleChange}
                                value={userInput}
                                disabled={loading}
                                placeholder="Type your message..."
                            />
                            <button
                                type="submit"
                                disabled={loading || !userInput.trim()}
                            >
                                {loading ? 'Sending...' : 'Ask'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat