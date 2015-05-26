import React from 'react';
import ScrollArea from 'react-scrollbar';
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
            <ScrollArea
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false}>
                <div style={styles.thread}>
                    <div className="thread" style={styles.threadHandle}>
                        { thread() }
                    </div>
                </div>
            </ScrollArea>

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