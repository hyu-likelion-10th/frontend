const $title = document.querySelector("#title");
const $body = document.querySelector('#body');
const $submit = document.querySelector('submit');

const getIndex=()=>{
  return sessionStorage.getItem('index')
}

const handleSubmit =(e) => {
  const title = $title.value;
  const body = $body.value;
  const formData = {
    title,
    body,
    author: "김서현",
    date: new Date(),
  };

  const index=Number(getIndex())
  sessionStorage.setItem('index',index+1)
  sessionStorage.setItem(String(index+1),JSON.stringify(formData))
};

$submit.addEventListener("submit",handleSubmit);