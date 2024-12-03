import React from 'react';

const SessionList = ({ sessions, onSelectSession, selectedSessionID }) => {
    return (
        <div>
            <h3>Sessions</h3>
            {Object.keys(sessions).map(name => (
                <div key={name} style={{ marginBottom: '10px' }}>
                    <details>
                        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>{name}</summary>
                        <ul>
                            {sessions[name].map(session => (
                                <li
                                    key={session.ID}
                                    style={{
                                        cursor: 'pointer',
                                        margin: '5px 0',
                                        textDecoration: selectedSessionID === session.ID ? 'underline' : 'none'
                                    }}
                                    onClick={() => onSelectSession(session.ID)}
                                >
                                    {session.ID}
                                </li>
                            ))}
                        </ul>
                    </details>
                </div>
            ))}
        </div>
    );
};

export default SessionList;
