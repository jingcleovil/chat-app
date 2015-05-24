import React from 'react';
const StyleSheet = { create: (e) => e };

class ChatThreadItem extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div key={this.props.key} style={styles.threadItem}>
                <b>{this.props.name}</b>
                { this.props.message }
            </div>
        )
    }
}

const styles = StyleSheet.create({
    threadItem: {
        padding: 5,
        fontSize: 12,
        background: '#fff',
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd'
    }
});

export default ChatThreadItem;
