import alt from '../alt';

class ChatAction {

    sendMessage(message) {
        this.dispatch(message);
    }
}

export default alt.createActions(ChatAction);