import alt from '../alt';
import ChatAction from '../actions/ChatAction';

class ChatStore {

    constructor() {
        this.bindListeners({
            handleSendMessage: ChatAction.SEND_MESSAGE
        })
        this.thread = [];
    }

    handleSendMessage(message) {
        this.thread.push(message);
    }
}

export default alt.createStore(ChatStore, 'ChatStore');