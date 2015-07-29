import React from 'react';
import ChatAction from '../actions/ChatAction';
import ChatStore from '../stores/ChatStore';
import KeyGen from '../utils/KeyGenerator';

const StyleSheet = {create: (e) => e};

let getState = () => {
    return {
        name: '',
        email: '',
        message: ''
    }
}

class ChatUserLogin extends React.Component {

    state = getState();

    _onChange = (e) => {
        var nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    _onSubmit = (e) => {
        e.preventDefault();
        ChatAction.chatLogin({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message,
            session: KeyGen.make()
        });
    }

    render() {
        return (
            <div style={styles.thread}>
                <form style={styles.makeCenter} onSubmit={this._onSubmit}>
                    <input
                        required={true}
                        onChange={this._onChange}
                        ref="name"
                        style={styles.inputBox}
                        value={this.state.name}
                        type="text"
                        name="name"
                        placeholder="Name" />
                    <input
                        required={true}
                        onChange={this._onChange}
                        ref="email"
                        style={styles.inputBox}
                        value={this.state.email}
                        type="text"
                        name="email"
                        placeholder="E-mail Address" />
                    <textarea
                        required={true}
                        onChange={this._onChange}
                        ref="email"
                        style={styles.inputBox}
                        value={this.state.message}
                        type="text"
                        name="message"
                        placeholder="Message"
                        rows="7"
                        />
                    <br/>
                    <button>Start Chat</button>
                </form>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    thread: {
        borderWidth: 1,
        borderLeftColor: '#ccc',
        borderRightColor: '#ccc',
        borderBottomColor: '#f2f2f2',
        borderTopColor: '#f2f2f2',
        height: 238,
        background: '#e5e5e5',
        padding: 5,
        overflowY: 'auto',
        borderStyle: 'solid',
        textAlign: 'center'
    },
    makeCenter: {
        padding: 15
    },
    inputBox: {
        padding: 5,
        marginBottom: 10,
        width: '100%',
        borderStyle: 'none'
    }
});

export default ChatUserLogin;