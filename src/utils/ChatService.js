import config from '../config';

class ChatService {

    constructor(session, visitor_id) {
        this.ref = new Firebase(config.chatEndpoint);;
        this.ref.session = this.ref.child('messages').child(session);
        this.ref.visitor = this.ref.child('users').child(visitor_id);
    }
    sendMessage(message) {
        message.created = Firebase.ServerValue.TIMESTAMP;
        this.ref.session.child('data').push(message);
        this.ref.visitor.child('lastmessage').set(message);
    }
}

export default ChatService;
