class KeyGenerator {
    make() {
        return this.sfour() + this.sfour() + '-' + this.sfour() + '-' + this.sfour() + '-' +
            this.sfour() + '-' + this.sfour() + this.sfour() + this.sfour();
        //return (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    }

    sfour() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
}

export default new KeyGenerator();