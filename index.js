const express = require('express');
const app = express();
const cors = require('cors')
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidV4 } = require('uuid');

app.use(cors());
app.use(express.static('public'));

io.on('connection', (socket) => {
    const id = socket.handshake.query.id;
    socket.join(id);

    socket.on('send-message', ({ recipients, text }) => {
        recipients.forEach((recipient) => {
            const newRecipients = recipients.filter((r) => r !== recipient);
            newRecipients.push(id);
            socket.broadcast.to(recipient).emit('receive-message', {
                recipients: newRecipients, sender: id, text, timestamp: new Date(),
            });
        });
    });
});

server.listen(8000, () => console.log('Chat server started'));