const $form = document.querySelector(".blog-post-form");
const $title = document.querySelector("#title");
const $body = document.querySelector("#body");

 const getIndex=()=>{
     return sessionStorage.getItem('index')
 }

const handleSubmit = (e) => {
  const title = $title.value;
  const body = $body.value;
  const formData = {
    title,
    body,
    author: "배병재",
    createdAt: new Date(),
  };

  const index=Number(getIndex())
  sessionStorage.setItem('index',index+1)
  sessionStorage.setItem(String(index+1),JSON.stringify(formData))
};


$form.addEventListener("submit", handleSubmit);
