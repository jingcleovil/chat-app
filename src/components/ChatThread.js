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
	}

    componentDidMount() {
        ChatStore.listen(this._onChange);
    }

    componentWillUnmount() {
        ChatStore.unlisten(this._onChange);
    }

    _onChange() {
        this.setState(threadState());
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
			<div style={styles.thread}>
				<div className="thread" style={styles.threadHandle}>
                    { thread() }
				</div>
			</div>
		);
	}
}

const styles = StyleSheet.create({
	thread: {
		height: 220,
        background: '#f2f2f2',
        padding: 10,
        position: 'relative',
        overflow: 'hidden'
	},
	threadHandle: {
		position: 'absolute',
		bottom: 0,
		width: 225
	}
});

export default ChatThread;