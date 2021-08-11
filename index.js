const findMatching = function(drivers, name) {
    const driver = drivers.filter((driver) => driver.toLowerCase() === name.toLowerCase());
    if(!!driver === true) {
        return driver;
    } else {
        return [];
    }
}

const fuzzyMatch = function(drivers, name) {
    const driver = drivers.filter((driver) => driver[0] === name[0]);
    if(!!driver === true) {
        return driver;
    }
}

const matchName = function(drivers, name) {
    const driver = drivers.filter((driver) => driver[`name`] === name);
    if(!!driver === true) {
        return driver;
    }
}