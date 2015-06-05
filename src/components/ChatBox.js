import React from 'react';
import ChatAction from '../actions/ChatAction';

const StyleSheet = {create: (e) => e}

let getState = () => {
    return {
        chatMessage: ''
    }
}

class ChatBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = getState();
        this.props = props;
        this.state.disabled = props.disabled || false;
        this._sendMessage = this._sendMessage.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    _sendMessage(e) {
        if (e.keyCode === 13) {

            let message = e.target.value;

            if (!message) {
                return;
            }

            ChatAction.sendMessage({
                key: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
                name: this.props.username,
                message: message
            });

            this.setState({
                chatMessage: ''
            })
        }
    }

    componentDidUpdate(obj) {
        if (obj.isHidden === true) {
            React.findDOMNode(this.refs.chatBox).focus();
        }
    }

    _onChange(e) {
        this.setState({
            chatMessage: e.target.value
        })
    }

    render() {
        return (
            <div style={this.props.isHidden ? styles.hide : styles.chatboxHandle}>
                <input
                    ref="chatBox"
                    disabled={this.state.disabled}
                    onChange={this._onChange}
                    value={this.state.chatMessage}
                    onKeyDown={this._sendMessage}
                    style={styles.chatbox}
                    type="text" />
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
    },
    hide: {
        display: 'none'
    }
})

export default ChatBox;
