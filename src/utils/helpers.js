export const getTokenFromLocalStorage = () => {
  const tokenData = localStorage.getItem("authToken");

  if (!tokenData) {
    return { token: null, isValid: false, user: null };
  }

  try {
    const payload = JSON.parse(atob(tokenData.split(".")[1]));
    const currentTimestamp = Math.floor(Date.now() / 1000);

    if (payload.exp && currentTimestamp < payload.exp) {
      return { token: tokenData, isValid: true, user: payload.user || null };
    } else {
      return { token: null, isValid: false, user: null };
    }
  } catch (error) {
    console.error("Error parsing token from localStorage:", error);
    return { token: null, isValid: false, user: null };
  }
};


export const IsAdminLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return false;
  }

  if (user?.user_type === "admin") {
    return true;
  } else {
    return false;
  }
};



export const getCurrentDate = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

export const convertToFormData = (dataObj) => {
  const formData = new FormData();
  Object.entries(dataObj).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
};
