const logoutBtn = document.querySelector("#logoutbtn");

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

logoutBtn.addEventListener("click", logout);
