import React from 'react';
import ChatStore from '../stores/ChatStore';
import ChatThreadItem from './ChatThreadItem';

let threadState = () => {
    return {
        thread: ChatStore.getState().thread
    }
}

const StyleSheet = { create: (e) => e };

class ChatThread extends React.Component {

	constructor(props) {
		super(props);
        this.state = threadState();
		this.props = props;
        this._onChange = this._onChange.bind(this);
        this._scrollToBottom = this._scrollToBottom.bind(this);
	}

    componentDidMount() {
        ChatStore.listen(this._onChange);
    }

    componentWillUnmount() {
        ChatStore.unlisten(this._onChange);
    }

    componentDidUpdate() {
        this._scrollToBottom();
    }

    _onChange() {
        this.setState(threadState());
    }

    _scrollToBottom() {
        var thread = React.findDOMNode(this.refs.thread);
        thread.scrollTop = thread.scrollHeight;
    }

	render() {

        let thread = () => {
            let thread = this.state.thread;
            return Object.keys(thread).map((item) => {
                return (
                    <ChatThreadItem
                        key={thread[item].key}
                        name={thread[item].name}
                        message={thread[item].message}
                        />
                )
            })
        }

		return (
            <div ref="thread" style={this.props.isHidden ? styles.hide : styles.thread}>
                <div className="thread" style={styles.threadHandle}>
                    { thread() }
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
        overflowY: 'auto'
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