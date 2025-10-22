const container=document.querySelector('#container');
const body=document.querySelector('body')
container.addEventListener('click',(e)=>{
  body.style.backgroundColor=e.target.id
  // console.log(e.target);
  
})