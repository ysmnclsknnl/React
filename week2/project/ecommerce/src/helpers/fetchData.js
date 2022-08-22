const fetchData = async (url, setData, setLoading, setError) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setError(false);
  } catch (er) {
    setError(true);
  } finally {
    setLoading(false);
  }
};

export default fetchData;
