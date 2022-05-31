export const numArr = (data) => {
    if (!Array.isArray(data)) {
        return data.split(',').map(item => +item);
    } else {
        return data;
    }
}

export const labelsArr = (labels) => {
    if (!Array.isArray(labels)) {
        return labels.split(',');
    } else {
        return labels;
    }
}