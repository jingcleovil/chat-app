import alt from '../alt';
import ChatService from '../utils/ChatService';
import UserService from '../utils/UserService';
import KeyGen from '../utils/KeyGenerator';
import config from '../config';

class ChatAction {

    renderMessage(message) {
        this.dispatch(message);
    }

    sendMessage(message) {
        let chat = new ChatService(message.session);
        chat.sendMessage(message);
    }

    minimizeWindow() {
        this.dispatch();
    }

    chatLogin(user) {
        UserService.loginUser(user)
            .done((userData) => {
                this.dispatch(userData);
            })
    }
}

export default alt.createActions(ChatAction);