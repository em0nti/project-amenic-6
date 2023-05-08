export const save = (key, value) => {
    try {
        const data = JSON.stringify(value);
        localStorage.setItem(key, data);
    } catch (err) {
        console.error('Stringyfy error', err.message);
    };
    
};

export const load = (key) => {
    try {
        const data = localStorage.getItem(key);
        return data === null ? undefined : JSON.parse(data);

    } catch (err) {
        console.error('Parse error', err.message);
    };
};

export const remove = (key, value) => {
    try {
        let data = localStorage.getItem(key);
        const parsedData = JSON.parse(data);
        const removedElIndex = parsedData.findIndex(element => element === value);
        parsedData.splice(removedElIndex, 1);
        data = JSON.stringify(parsedData);
        localStorage.setItem(key, data);

    } catch (err) {
        console.error('Parse error', err.message);
    };

    // const arr = load(key);
    // const removedElIndex = arr.findIndex(element => element === x);
    // arr.splice(removedElIndex, 1);
    // save(key, arr);
    // localStorage.removeItem(key);
};