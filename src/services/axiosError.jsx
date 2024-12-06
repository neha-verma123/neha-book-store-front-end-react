export const axiosError = (err) => {
  if (err.response) {
    console.log("response came but not success");
    console.log("err.response:", err.response);
    if (err.response.data.message) {
      console.log("err.response.data.message:", err.response.data.message);
      alert(err.response.data.message);
    } else {
      alert("Request Decline");
    }
    console.log(err.response.status);
    if (err.response.status === 401) {
      setTimeout(() => {
        localStorage.removeItem("access_token");
        window.location.href = "/auth/login";
      }, 500);
    }
    console.log(err.response.headers);
    throw err;
  } else if (err.request) {
    console.log("request made but no response received");
    alert(err.message);
    throw err;
  } else {
    alert(err.message);
    throw err;
  }
};
