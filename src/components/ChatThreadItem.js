import React from 'react';
const StyleSheet = {create: (e) => e};

class ChatThreadItem extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div className="threadItem clearfix" key={this.props.key} style={styles.threadItem}>
                <div className="threadMsg" style={styles.threadMsg}>
                    { this.props.message }
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    threadItem: {
        display: 'block'
    },
    threadMsg: {
        padding: 5,
        fontSize: 12,
        background: '#fff',
        marginBottom: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#ddd',
        color: '#262626',
        position: 'relative',
        display: 'inline-block',
        float: 'right',
        marginRight: 5
    }
});

export default ChatThreadItem;
