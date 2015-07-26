import React from 'react';
import ChatHeader from './ChatHeader';
import ChatThread from './ChatThread';
import ChatBox from './ChatBox';
import ChatStore from '../stores/ChatStore';
import ChatAction from '../actions/ChatAction';
import ChatUserLogin from './ChatUserLogin';
import config from '../config';

const StyleSheet = {create: (e) => e}

let getState = () => {
    return {
        windowState: ChatStore.getState().minimizeWindow,
        isLogin: ChatStore.getState().isLogin,
        name: ChatStore.getState().name,
        thread: ChatStore.getState().thread,
        session: ChatStore.getState().session
    }
}

class ChatApp extends React.Component {

    state = getState();

    componentWillMount() {
        if (this.state.isLogin) {
            this.ref = new Firebase(config.chatEndpoint);
            this.ref.session = this.ref.child('messages').child(this.state.session);

            this.ref.session.child('data').on('child_added', (snap) => {
                console.log(snap.val());
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

        let chatBody = () => {

            if (this.state.isLogin) {
                return (
                    <div>
                        <ChatThread thread={this.state.thread} isHidden={this.state.windowState} />
                        <ChatBox isHidden={this.state.windowState} from={this.state.name} />
                    </div>
                )
            }

            return <ChatUserLogin />
        }

        return (
            <div className="chat-app" style={styles.chatMain}>
                <ChatHeader from={this.state.isLogin ? this.state.name : 'Register/Login'} />
                { chatBody() }
            </div>
        )
    }
}

const styles = StyleSheet.create({
    chatMain: {
        width: 250,
        borderWidth: 1,
        borderColor: '#ccc',
        position: 'fixed',
        bottom: 0,
        right: 17
    },
    wrapper: {
        margin: 15,
        padding: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 3
    },
    hide: {
        display: 'none'
    }
});

export default ChatApp;
