import React from 'react';

const StyleSheet = { create: (e) => e };

class ChatHeader extends React.Component {

	constructor(props) {
		super(props);
        this.props = props;
        this._closeChat = this._closeChat.bind(this);
	}

    _closeChat(e) {
        e.preventDefault();
        console.log('test');
    }

	render() {
		return (
			<div style={styles.handle}>
				<span style={styles.nameHandle} className="clickable">{this.props.username}</span>
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
        height: 26,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#333',
        color: '#fff',
        fontSize: 13,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    nameHandle: {
    	paddingLeft: 5,
    	paddingRight: 5,
    	paddingBottom: 5,
    	paddingTop: 5,
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