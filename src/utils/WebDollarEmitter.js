class WebDollarEmitter
{
    static on(eventName, fCallback) {
        this.getEmitter().on(eventName, fCallback);
    }

    static off(eventName, fCallback) {
        this.getEmitter().removeListener(eventName, fCallback);
    }

    static once(eventName, fCallback) {
        this.getEmitter().once(eventName, fCallback);
    }

    static getEmitter() {
        return WebDollar.StatusEvents._emitter;
    }
}

export default WebDollarEmitter;
