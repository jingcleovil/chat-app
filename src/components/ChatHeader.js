import React from 'react';

const StyleSheet = { create: (e) => e };

class ChatHeader extends React.Component {

	constructor(props) {
		super(props);
        this.props = props;
	}

	render() {
		return (
			<div style={styles.handle}>
				<span style={styles.nameHandle}>{this.props.username}</span>
			</div>
		);
	}
}

const styles = StyleSheet.create({
    handle: {
        width: 250,
        height: 26,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#333',
        color: '#fff',
        fontSize: 13
    },
    nameHandle: {
    	paddingLeft: 5,
    	paddingRight: 5,
    	paddingBottom: 5,
    	paddingTop: 5,
    	display: 'inline-block',
    	width: 210
    }
})

export default ChatHeader;