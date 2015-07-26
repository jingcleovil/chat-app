import React from 'react';
import ChatAction from '../actions/ChatAction';

const StyleSheet = { create: (e) => e };

class ChatHeader extends React.Component {

	constructor(props) {
		super(props);
        this.props = props;
        this._closeChat = this._closeChat.bind(this);
        this._changeState = this._changeState.bind(this);
	}

    _closeChat(e) {
        e.preventDefault();
    }

    _changeState() {
        ChatAction.minimizeWindow();
    }

	render() {
		return (
			<div style={styles.handle}>
				<span onClick={this._changeState} style={styles.nameHandle} className="clickable">{this.props.from}</span>
                <span style={styles.headerAction}>
                    <a href="#" onClick={this._closeChat} style={styles.headerActionAnchor}>&times;</a>
                </span>
			</div>
		);
	}
}


const styles = StyleSheet.create({
    handle: {
		borderTopLeftRadius: 3,
		borderTopRightRadius: 3,
        width: 250,
        height: 30,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#4a4e4e',
        color: '#fff',
        fontSize: 14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    nameHandle: {
    	padding: 6,
    	width: 220,
    },
    headerAction: {
        width: 20,
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    headerActionAnchor: {
        color: '#fff',
        padding: 5,
        textDecoration: 'none',
        fontWeight: 400
    }
})

export default ChatHeader;
