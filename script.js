const currentPage = document.location.pathname;
const menuItems = document.querySelectorAll("header a");

for(item of menuItems){
  if(currentPage.includes(item.getAttribute("href"))){
    item.classList.add("active");
  }
}

const modalOverlay = document.querySelector(".modal-overlay");
const videos = document.querySelectorAll(".video");

for (let video of videos){
  video.addEventListener("click", function(){
    const videoKey = video.getAttribute("id")
    modalOverlay.classList.add('active-modal');
    modalOverlay.querySelector("iframe").src = `https://www.blogger.com/video.g?token=${videoKey}`;


  });
}

document.querySelector(".close-modal").addEventListener('click', function(){
  modalOverlay.classList.remove('active-modal');
  modalOverlay.querySelector("iframe").src = "";
});




