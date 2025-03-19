export default async (request, context) => {
  const url = new URL(request.url);
  const path = url.pathname;

  // Set content type based on file extension
  if (path.endsWith('.css')) {
    return new Response(request.body, {
      headers: {
        'Content-Type': 'text/css',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  if (path.endsWith('.js') || path.endsWith('.mjs')) {
    return new Response(request.body, {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // For all other requests, continue with the original response
  return context.next();
}; 