const chatState = "chatState";

class ChatUtils {

    constructor() {
        let chatState = sessionStorage.getItem('chatState');

        this.chatWindowState =  this.chatState(chatState);
        this.roomId = sessionStorage.getItem('session');
    }

    chatState(chatState) {
        if(chatState === null || chatState === "false") {
            return false;
        }
        return true;
    }

    setState(state) {
        sessionStorage.setItem(chatState, state);
    }
}

export default new ChatUtils();