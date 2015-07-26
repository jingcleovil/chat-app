import config from '../config';

class ChatService {

    constructor(session) {
        this.ref = new Firebase(config.chatEndpoint);
        this.ref.session = this.ref.child('messages').child(session);
    }
    sendMessage(message) {
        this.ref.session.child('data').push(message);
    }
}

export default ChatService;
