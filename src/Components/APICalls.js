export const fetchAllJobs = async () => {
  const response = fetch(
    "https://fe-cors-proxy.herokuapp.com", {
      headers: {
        "Target-URL": "https://careerdaybe.herokuapp.com/jobs"
      }
    })
  const data = (await response).json()
  console.log(data)
  return data
}

const fetchSingleJob = async (id) => {
  const response = fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": `https://careerdaybe.herokuapp.com/job/${id}`,
    },
  });
  const data = (await response).json();
  console.log(data);
  return data;
};

export default fetchSingleJob