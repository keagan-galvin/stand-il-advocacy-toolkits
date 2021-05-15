export function handleFetch({
  url,
  headers = [],
  method,
  body,
  cacheDuration = 0,
}) {
  var request = {
    headers: [["content-type", "application/json"]],
    method,
  };

  if (cacheDuration === 0) {
    request.headers.push(["pragma", "no-cache"]);
    request.headers.push(["cache-control", "no-cache"]);
  }

  if (body) {
    if (body instanceof FormData) {
      request.body = body;
      request.headers = [];
    } else request.body = JSON.stringify(body);
  }

  request.headers = request.headers.concat(headers);

  return new Promise(function (resolve, reject) {
    if (cacheDuration > 0) {
      const cache = localStorage.getItem(url);
      if (cache) {
        let o = JSON.parse(cache);
        if (Date.now() <= o.expires) return resolve(o.data);
      }
    }

    fetch(url, request)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        if (response.status === "success") {
          if (cacheDuration > 0) {
            localStorage.setItem(
              url,
              JSON.stringify({
                expires: Date.now() + cacheDuration,
                data: response.data,
              })
            );
          }

          resolve(response.data);
        } else reject(response);
      });
  });
}
