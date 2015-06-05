import React from 'react';
import ChatHeader from './ChatHeader';
import ChatThread from './ChatThread';
import ChatBox from './ChatBox';
import ChatStore from '../stores/ChatStore';

const StyleSheet = {create: (e) => e}

let getState = () => {
    return {
        windowState: ChatStore.getState().minimizeWindow
    }
}

class ChatApp extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = getState();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        ChatStore.listen(this._onChange);
    }

    componentWillUnmount() {
        ChatStore.unlisten(this._onChange);
    }

    _onChange() {
        this.setState(getState());
    }

    render() {
        return (
            <div className="chat-app" style={styles.chatMain}>
                <ChatHeader username={this.props.username} />
                <ChatThread isHidden={this.state.windowState} />
                <ChatBox isHidden={this.state.windowState} username={this.props.username} />
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