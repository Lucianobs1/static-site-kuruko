currentPage = document.location.pathname

menuItems = document.querySelectorAll("header ul li a");

for(item of menuItems){
  if(currentPage.includes(item.getAttribute("href"))){
    item.classList.add("active")
  }
}




