const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PROTO_PATH = './sliver.proto'; // Path to your .proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH);
const sliverProto = grpc.loadPackageDefinition(packageDefinition).sliver;

// Create gRPC client to connect to the Sliver server
const client = new sliverProto.SliverService('localhost:31337', grpc.credentials.createInsecure());

app.use(bodyParser.json());

// API to handle sending commands to Sliver
app.post('/send-command', (req, res) => {
    const { sessionId, command } = req.body;
    const request = { session_id: sessionId, command };

    client.ExecuteCommand(request, (error, response) => {
        if (error) {
            res.status(500).send({ error: 'Error sending command to Sliver' });
        } else {
            res.status(200).send(response);
        }
    });
});

// Serve the React app if needed (optional)
app.use(express.static('build')); // For production use

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
