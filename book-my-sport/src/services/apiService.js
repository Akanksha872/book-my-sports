const apiUrl = process.env.REACT_APP_API_URL;

export const getData = async (url) => {
  let responseData = await fetch(`${apiUrl}/${url}`)
  return responseData;
};

export const postData = async (url, data) => {
  let responseData = await fetch(`${apiUrl}/${url}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  return responseData;
};