import React from 'react';
import ChatHeader from './ChatHeader';
import ChatThread from './ChatThread';
import ChatActions from './ChatActions';
import ChatStore from '../stores/ChatStore';
import ChatAction from '../actions/ChatAction';
import ChatUserLogin from './ChatUserLogin';
import config from '../config';

let getState = () => {
    return {
        windowState: ChatStore.getState().minimizeWindow,
        isLogin: ChatStore.getState().isLogin,
        name: ChatStore.getState().name,
        thread: ChatStore.getState().thread,
        session: ChatStore.getState().session
    }
}

class ChatBox extends React.Component {
    
    state = getState();
    
    static defaultProps = {}

    componentWillMount() {
        if (this.state.isLogin) {
            this.ref = new Firebase(config.chatEndpoint);
            this.ref.session = this.ref.child('messages').child(this.state.session);

            this.ref.session.child('data').on('child_added', (snap) => {
                ChatAction.renderMessage(snap.val());
            });
        }
    }

    componentDidMount() {
        ChatStore.listen(this._onChange);
    }

    componentWillUnmount() {
        ChatStore.unlisten(this._onChange);
    }

    _onChange = () => {
        this.setState(getState());
    }

    render() {
        return (
            <div>
                <ChatThread thread={this.state.thread} isHidden={this.state.windowState} />
                <ChatActions isHidden={this.state.windowState} from={this.state.name} />
            </div>
        )
    }
}

export default ChatBox;
