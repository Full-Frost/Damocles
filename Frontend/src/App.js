import React, { useEffect, useState } from 'react';
import SessionList from './components/SessionList';
import CommandInput from './components/CommandInput';
import SessionDetails from './components/SessionDetails';

function App() {
    const [logs, setLogs] = useState([]);
    const [groupedSessions, setGroupedSessions] = useState({});
    const [selectedSessionID, setSelectedSessionID] = useState(null);
    const [command, setCommand] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    // fetchLogs function and other useEffect remain unchanged...

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            {/* Sidebar */}
            <div style={{ width: '300px', borderRight: '1px solid #ddd', padding: '10px', overflowY: 'auto' }}>
                <SessionList
                    sessions={groupedSessions}
                    onSelectSession={setSelectedSessionID}
                    selectedSessionID={selectedSessionID}
                />
            </div>

            {/* Main Content Area */}
            <div style={{ flex: 1, padding: '20px' }}>
                {selectedSessionID ? (
                    <>
                        <SessionDetails selectedSession={selectedSessionID} />
                        <CommandInput command={command} setCommand={setCommand} sendCommand={sendCommand} />
                        {response && (
                            <div>
                                <h3>Response</h3>
                                <pre style={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
                                    {JSON.stringify(response, null, 2)}
                                </pre>
                            </div>
                        )}
                    </>
                ) : (
                    <h1>Select a Session</h1>
                )}
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </div>
        </div>
    );
}

export default App;
