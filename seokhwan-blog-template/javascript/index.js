const addPostBtn = document.getElementById("goAddPostBtn")
addPostBtn.addEventListener("click", () => { handleAddPostBtnClick() })


function handleAddPostBtnClick() {
  window.location.href = 'addPost.html' // 요청이 정상적으로 처리 된 경우 
}
