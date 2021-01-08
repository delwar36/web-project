export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};
export const getDate = (date) => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateObject = new Date(date);
    return monthNames[dateObject.getMonth()].substr(0, 3) + ' ' + dateObject.getDate() + ',' + dateObject.getFullYear();
};

export const getTime = (date) => {
    const dateObject = new Date(date);
    return dateObject.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
}