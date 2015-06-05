import alt from '../alt';
import ChatAction from '../actions/ChatAction';

class ChatStore {

    constructor() {
        this.bindListeners({
            handleSendMessage: ChatAction.SEND_MESSAGE,
            handleMinimize: ChatAction.MINIMIZE_WINDOW
        })

        this.thread = [];
        this.minimizeWindow = false;
    }

    handleSendMessage(message) {
        this.thread.push(message);
    }

    handleMinimize() {
        this.minimizeWindow = (!this.minimizeWindow ? true : false);
    }
}

export default alt.createStore(ChatStore, 'ChatStore');