exports = module.exports = (message) => {

    var resultMsg = `Hello: ${message}`;

    return new Promise( (resolve, reject) => {
        resolve(resultMsg);
    });

}