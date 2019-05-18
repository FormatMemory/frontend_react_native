function fetch_retry(url, n=1,  options={} ) {
    console.log('Fetch from '+url+' remain retry: '+ n);
    return new Promise(function(resolve, reject) {
        fetch(url, options)
            .then(resolve)
            .catch(function(error) {
                if (n === 1) return reject(error);
                resolve(fetch_retry(url, options, n - 1));
            })
    });
}

export default fetch_retry;