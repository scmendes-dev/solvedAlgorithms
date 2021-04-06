function job() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){ resolve("hello world"); }, 2000);
    
    });
}

module.exports = job;
