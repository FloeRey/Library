function createReactiveObject(name) {
    return {
        name,
        handlers: [],
        addHandler: function (handler) {
            this.handlers.push(handler);
        },
        doIt: function () {
            for (const handler of this.handlers) {
                handler();
            }
        },
    };
}

const reactiveObject3 = createReactiveObject("rObj3");

console.log(reactiveObject3);
