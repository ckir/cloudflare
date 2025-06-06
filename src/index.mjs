import WebLib from 'weblib';

export default {

  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const params = url.searchParams;
    const route = url.pathname;
    const method = request.method;
    const apiEndpoint = params.get('url');

    if (!apiEndpoint) {
      return Response.json({error: 'Bad Request: Missing "url" parameter'}, { status: 400 });
    }
    if (route === '/api/nasdaq/') {
      if (method === 'GET') {
        return Response.json(await WebLib.Common.Markets.Nasdaq.Api.Retrieve.endpoint(apiEndpoint));
      } else {
        return Response.json({ error: 'Method Not Allowed'}, { status: 405 });
      }
    }
    return Response.json({ error:  'Not Found'}, { status: 404 });
  }
};

// const apiNasdaq = (await weblib.markets.nasdaq.apiNasdaq);
// const b = await apiNasdaq();
// let a = 5;

// Example usage in another file
// import * as weblib from 'weblib';

// const nasdaqApi = await WebLib.Common.Markets.ApiNasdaq.apiNasdaqFetch('https://api.nasdaq.com/api/market-info');
// console.log(nasdaqApi); // Output: Data from Nasdaq

// console.log(weblib.Common.Utils.utilityFunction()); // Output: Utility Function Result
// console.log(weblib.Cloudflare.cloudflareFunction()); // Output: Cloudflare function executed.
