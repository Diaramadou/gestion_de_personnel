let menuicn = document.querySelector(".menuicn");
  let nav = document.querySelector(".navcontainer");
 
  menuicn.addEventListener("click",()=>
  {
      nav.classList.toggle("navclose");
  })


  h2 = document.querySelector('.topic-heading')

  function getContacts() {
    return JSON.parse(localStorage.getItem('contacts'))
  }
  h2.textContent = getContacts().length;
  console.log(getContacts().length)