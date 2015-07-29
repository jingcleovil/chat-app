class Storage {
    get(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }
}

export default new Storage;