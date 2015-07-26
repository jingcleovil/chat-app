import React from 'react';
import ChatAction from '../actions/ChatAction';
import ChatStore from '../stores/ChatStore';
import KeyGen from '../utils/KeyGenerator';

const StyleSheet = {create: (e) => e}

let getState = () => {
    return {
        chatMessage: '',
        session: ChatStore.getState().session,
        disabled: false
    }
}

class ChatBox extends React.Component {

    state = getState();

    static defaultProps = {}

    componentDidMount() {
        React.findDOMNode(this.refs.chatBox).focus();
    }

    _sendMessage = (e) => {
        if (e.keyCode === 13) {

            let message = e.target.value;

            if (!message) {
                return;
            }

            if (!this.state.session) {
                console.warn('Session not set');
                return;
            }

            ChatAction.sendMessage({
                session: this.state.session,
                name: this.props.from,
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

    _onChange = (e) => {
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
        borderColor: '#ccc',
        borderStyle: 'solid'
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
