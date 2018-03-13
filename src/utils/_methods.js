const attempt = (fn, ...args) => {
    try {
        return fn(args);
    } catch (e) {
        return e instanceof Error ? e : new Error(e);
    }
};

const getElementByItem = (item) => {
    return document.querySelector(`[data-item=${item}]`)
};

export default {
    attempt,
    getElementByItem
}
