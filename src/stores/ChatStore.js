import alt from '../alt';
import ChatAction from '../actions/ChatAction';
import ChatUtils from '../utils/ChatUtils';
import UserService from '../utils/UserService';

class ChatStore {

    constructor() {
        this.bindListeners({
            handleMinimize: ChatAction.MINIMIZE_WINDOW,
            handleChatLogin: ChatAction.CHAT_LOGIN,
            handleRenderMessage: ChatAction.RENDER_MESSAGE
        })

        this.thread = [];
        this.minimizeWindow = ChatUtils.chatWindowState;
        this.isLogin = UserService.isLogin;
        this.name = UserService.name;
        this.session = UserService.session;
    }

    handleRenderMessage(message) {
        this.thread.push(message);
    }

    handleMinimize() {
        let chatState = (!this.minimizeWindow ? true : false);
        this.minimizeWindow = chatState;
        ChatUtils.setState(chatState);
    }

    handleChatLogin(user) {
        this.isLogin = true;
        this.nickname = user.nickname;
        this.session = user.session;
    }

    handleGetMessages(messages) {
        this.thread = messages;
    }
}

export default alt.createStore(ChatStore, 'ChatStore');