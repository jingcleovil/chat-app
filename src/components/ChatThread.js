import React from 'react';
import ChatStore from '../stores/ChatStore';
import ChatThreadItem from './ChatThreadItem';
import ChatAction from '../actions/ChatAction';

const StyleSheet = { create: (e) => e };

class ChatThread extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
        this._scrollToBottom = this._scrollToBottom.bind(this);
	}


    componentDidUpdate() {
        this._scrollToBottom();
    }

    _scrollToBottom() {
        var thread = React.findDOMNode(this.refs.thread);
        thread.scrollTop = thread.scrollHeight;
    }

	render() {
        
        let showThread = () => {
            let thread = this.props.thread;
            return Object.keys(thread).map((index) => {
                return (
                    <ChatThreadItem
                        key={index}
                        name={thread[index].name}
                        message={thread[index].message}
                        />
                )
            })
        }

		return (
            <div ref="thread" style={this.props.isHidden ? styles.hide : styles.thread}>
                <div className="thread" style={styles.threadHandle}>
                    { showThread() }
                </div>
            </div>
		);
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
        borderStyle: 'solid'
	},
	threadHandle: {
		bottom: 0,
		width: 240
	},
    hide: {
        display: 'none'
    }
});

export default ChatThread;