/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let cur = init
    return {
        increment : () => {
            return ++cur
        },
        reset : () => {
            cur = init
            return cur
        },
        decrement : () => {
            return --cur
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */