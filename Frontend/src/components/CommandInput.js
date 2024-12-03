import React from 'react';

const CommandInput = ({ command, setCommand, sendCommand }) => {
    return (
        <div>
            <h2>Execute Command</h2>
            <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder="Enter command"
                style={{ width: '100%', padding: '8px', margin: '10px 0' }}
            />
            <button onClick={sendCommand} style={{ padding: '8px 16px' }}>
                Send Command
            </button>
        </div>
    );
};

export default CommandInput;
