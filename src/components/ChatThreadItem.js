import React from 'react';
import Storage from '../utils/Storage';

const StyleSheet = {create: (e) => e};

class ChatThreadItem extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        let name = Storage.get('user').name;

        let cls = () => {
            if(name === this.props.name) {
                return 'right';
            }
            return '';
        }

        return (
            <div className="threadItem clearfix" key={this.props.key} style={styles.threadItem}>
                <div className={`threadMsg ${cls()}`} style={styles.threadMsg}>
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
        marginBottom: 10,
        borderRadius: 3,
        marginRight: 5
    }
});

export default ChatThreadItem;
