export const localStorage = () => {
    return window.localStorage;
};

export const setStorage = (key: string, value: string) => {
    localStorage().setItem(key, value);
};

export const getStorage = (key: string) => {
    localStorage().getItem(key);
};

export const clearStorage = () => {
    localStorage().clear();
};

export const removeItem = (key: string) => {
    localStorage().removeItem(key);
};
