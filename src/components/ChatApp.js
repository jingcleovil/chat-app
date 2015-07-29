import React from 'react';
import ChatHeader from './ChatHeader';
import ChatThread from './ChatThread';
import ChatActions from './ChatActions';
import ChatStore from '../stores/ChatStore';
import ChatAction from '../actions/ChatAction';
import ChatUserLogin from './ChatUserLogin';
import config from '../config';
import ChatBox from './ChatBox';

const StyleSheet = {create: (e) => e}

let getState = () => {
    return {
        isLogin: ChatStore.getState().isLogin,
        name: ChatStore.getState().name
    }
}

class ChatApp extends React.Component {

    state = getState();

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
            <div className="chat-app" style={styles.chatMain}>
                <ChatHeader from={this.state.isLogin ? this.state.name : 'Register/Login'} />
                {this.state.isLogin
                    ? <ChatBox/>
                    : <ChatUserLogin />
                }
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
