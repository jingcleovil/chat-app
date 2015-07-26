import config from '../config';

class UserService {

    constructor() {
        let isLogin = sessionStorage.getItem('isLogin');

        this.fireBaseRef = new Firebase(config.chatEndpoint + "/messages");
        this.isLogin = this.checkIsLogin(isLogin);
        this.name = sessionStorage.getItem('name');
        this.session = sessionStorage.getItem('session');
    }

    loginUser(user) {

        this.fireBaseRef.child(user.session + "/data").push({
            message: user.message,
            from: user.name
        })

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