const fetchData = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    console.log(`response is${res}`);
    return;
  }
  try {
    const data = await res.json();
    return data;
  } catch (er) {
    return;
  }
};

export default fetchData;
