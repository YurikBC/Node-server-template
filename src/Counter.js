const Counter = {
    init() {
        return { count: 0 };
    },

    incrementBy(state, { number }) {
        let count = state.count + number;
        return { count };
    },

    logTotal(state) {
        console.log(state.count);
    }
};


export default Counter;
