export default async function makeRequest (url: string, method: string, body?: any) {

    // append the base url to url
    url = process.env.NEXT_PUBLIC_BACKEND_URL + url;

    const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

   return response.json()
}
