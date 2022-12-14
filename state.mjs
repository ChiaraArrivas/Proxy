export class State {
    constructor(initialState, callback) {
        this.initialState = {value: initialState}
        this.callback = callback;

        const handler = {
            get: (target, prop) => {
                if(typeof target[prop] === "object") {
                    return new Proxy(target[prop], handler)
                }
                return target[prop]
            },
            set: (target, prop, value) => {
                target[prop] = value;

                if(typeof this.callback === "function") {
                    this.callback(this.state);
                }

                return true;
            }
        }

        this.state = new Proxy(this.initialState.value, handler)
    }
    
}