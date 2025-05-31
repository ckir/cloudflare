import apiNasdaqFetch from './apiNasdaq.mjs';

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
        // return new Response(JSON.stringify(await apiNasdaqFetch(params.get('url'))));
        return Response.json(await apiNasdaqFetch(apiEndpoint));
      } else {
        return Response.json({ error: 'Method Not Allowed'}, { status: 405 });
      }
    }
    return Response.json({ error:  'Not Found'}, { status: 404 });
  }
};
