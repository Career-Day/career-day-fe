export const fetchAllJobs = async () => {
  const response = fetch(
    "https://fe-cors-proxy.herokuapp.com", {
      headers: {
        "Target-URL": "https://careerdaybe.herokuapp.com/api/v1/jobs"
      }
    })
  const data = (await response).json()
  return data
}

const fetchSingleJob = async (id) => {
  const response = fetch("https://fe-cors-proxy.herokuapp.com", {
    headers: {
      "Target-URL": `https://careerdaybe.herokuapp.com/api/v1/jobs/${id}`,
    },
  })
  const data = (await response).json()
  return data
}

export default fetchSingleJob