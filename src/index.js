document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form=document.querySelector('form')
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    handle(e.target.descriptions.value)
    form.reset()
  })
});
function handle(doing) {
  let list=document.createElement('li')
  let btn=document.createElement('button')
  btn.addEventListener('click',delete1=(e)=>e.target.parentNode.remove())
  btn.textContent="X"
  list.textContent=doing;
  list.appendChild(btn)
  document.querySelector("#tasks").appendChild(list)
}