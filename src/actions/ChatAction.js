import alt from '../alt';
import ChatService from '../utils/ChatService';
import UserService from '../utils/UserService';
import KeyGen from '../utils/KeyGenerator';
import config from '../config';
import Storage from '../utils/Storage';

class ChatAction {

    renderMessage(message) {
        this.dispatch(message);
    }

    sendMessage(message) {
        let chat = new ChatService(message.session, Storage.get('user').visitor_id);
        delete message.session;
        chat.sendMessage(message);
    }

    minimizeWindow() {
        this.dispatch();
    }

    chatLogin(user) {
        UserService.setVisitor(user);
        this.dispatch(user);
    }
}

export default alt.createActions(ChatAction);