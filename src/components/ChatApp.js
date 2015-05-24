import React from 'react';
import ChatHeader from './ChatHeader';
import ChatThread from './ChatThread';
import ChatBox from './ChatBox';

const StyleSheet = { create: (e) => e }

class ChatApp extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="chat-app" style={styles.chatMain}>
                <ChatHeader username={this.props.username}/>
                <ChatThread />
                <ChatBox username={this.props.username}/>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    chatMain: {
        width: 250,
        height: 300,
        borderWidth: 1,
        borderColor: '#ccc',
        position: 'fixed',
        bottom: -18,
        right: 17
    },
    wrapper: {
        margin: 15,
        padding: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 3
    }
});

export default ChatApp;