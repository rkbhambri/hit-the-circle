
export const parseData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const validateValues = (value) => {
    var regex = /^[a-zA-Z0-9!@#$%^&*)(. _-]{0,16}$/;
    return regex.test(value);
};

export const getNumbersArray = (limit) => {
    const arr = [];
    for (let i = 1; i <= limit; i++) {
        arr.push(i);
    }
    return arr;
};

export const getRandomNumber = (to) => {
    return Math.floor(Math.random() * to) + 1;
};

export const isEqual = (item1, item2) => {
    if (typeof (item1) === 'number' && typeof (item2) === 'number') {
        return item1 === item2;
    }
    if (typeof (item1) === 'string' && typeof (item2) === 'string') {
        return item1.toLowerCase() === item2.toLowerCase();
    }
};

export const isObjectEmpty = (obj) => {
    return Object.keys(obj).length === 0;
};

export const isEmpty = (item) => {
    if (typeof item === 'number') {
        return false;
    }
    return item.trim() === '';
};

export const isArrayNotEmpty = (arr) => {
    return arr.length > 0;
};

export const indexOf = (arr, value) => {
    return arr.indexOf(value);
};

export const isBoolean = (value) => {
    return typeof value === "boolean";
};

export const isNumber = (value) => {
    return typeof value === "number";
};

export const isString = (value) => {
    return typeof value === "string";
};

export const deleteItem = (array, id) => {
    const updatedData = array.filter(item => item !== id);
    return updatedData;
};

export const isIncludes = (array, value) => {
    return array.includes(value);
};
