import config from '../config';
import KeyGen from './KeyGenerator';


class UserService {

    constructor() {
        let isLogin = sessionStorage.getItem('isLogin');
        this.firebase = new Firebase(config.chatEndpoint)

        this.messages = this.firebase.child('messages');
        this.visitors = this.firebase.child('users');

        this.isLogin = this.checkIsLogin(isLogin);
        this.name = sessionStorage.getItem('name');
        this.session = sessionStorage.getItem('session');
    }

    setVisitor(user) {

        let visitor_id = KeyGen.make();

        let message = {
            message: user.message,
            from: user.name,
            created_at: Firebase.ServerValue.TIMESTAMP
        }

        this.visitors.child(visitor_id).set({
            name: user.name,
            email: user.email,
            state: 1,
            session_id: user.session,
            created_at: Firebase.ServerValue.TIMESTAMP,
            updated_at: Firebase.ServerValue.TIMESTAMP,
            lastmessage: message
        })


        sessionStorage.setItem('user',JSON.stringify({
            name: user.name,
            email: user.email,
            session: user.session,
            visitor_id: visitor_id
        }));

        this.messages.child(user.session + "/data").push(message);

        sessionStorage.setItem('isLogin', true);
        sessionStorage.setItem('name', user.name);
        sessionStorage.setItem('email', user.email);
        sessionStorage.setItem('session', user.session);
    }

    checkIsLogin(isLogin) {
        if (isLogin == null || isLogin == "false") {
            return false;
        }
        return true;
    }
}

export default new UserService();