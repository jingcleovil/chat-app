import alt from '../alt';

class ChatAction {

    sendMessage(message) {
        this.dispatch(message);
    }

    minimizeWindow() {
        this.dispatch();
    }
}

export default alt.createActions(ChatAction);