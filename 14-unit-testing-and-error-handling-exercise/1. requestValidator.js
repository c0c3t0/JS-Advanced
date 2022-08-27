function requestValidator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriPattern = /^([\w\d\.]+|\*)$/g;
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messagePattern = /^([^<>\\&'"]*)$/g;

    if (!(obj.hasOwnProperty('method')) || !validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method')
    }
    if (!(obj.hasOwnProperty('uri')) || !uriPattern.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI')
    }
    if (!(obj.hasOwnProperty('version')) || !validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version')
    }
    if (!(obj.hasOwnProperty('message')) || !messagePattern.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message')
    }
    return obj;
}

// console.log(requestValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }));

// console.log(requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));

console.log(requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
}));