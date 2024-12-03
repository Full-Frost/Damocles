import React from 'react';

const SessionDetails = ({ selectedSession }) => {
    return (
        <div>
            <h1>Session Details</h1>
            <pre style={{ backgroundColor: '#f5f5f5', padding: '10px' }}>
                {JSON.stringify(selectedSession, null, 2)}
            </pre>
        </div>
    );
};

export default SessionDetails;
