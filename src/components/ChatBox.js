import React from 'react';
import ChatAction from '../actions/ChatAction';

const StyleSheet = { create: (e) => e }

class ChatBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            chatMessage: ''
        }
        this.props = props;
        this.state.disabled = props.disabled || false;
        this._sendMessage = this._sendMessage.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    _sendMessage(e) {
        if(e.keyCode === 13) {

            ChatAction.sendMessage({
                key: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
                name: this.props.username,
                message: e.target.value
            });

            this.setState({
                chatMessage: ''
            })
        }
    }

    _onChange(e) {
        this.setState({
            chatMessage: e.target.value
        })
    }

    render() {
        return (
            <div style={styles.chatboxHandle}>
                <input
                    disabled={this.state.disabled}
                    onChange={this._onChange}
                    value={this.state.chatMessage}
                    onKeyDown={this._sendMessage}
                    style={styles.chatbox}
                    type="text"/>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    chatboxHandle: {
        borderWidth: 1,
        borderColor: '#ccc'
    },
    chatbox: {
        width: 200,
        height: 30,
        padding: 5,
        fontSize: 13,
        borderColor: '#fff',
        borderWidth: 0
    }
})

export default ChatBox;
