const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");
const images = document.querySelectorAll(".work-image");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modal.classList.add("show");
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
});

const worksScroll = document.querySelector('.works-scroll');

worksScroll.addEventListener('scroll', () => {
  const maxScrollLeft = worksScroll.scrollWidth - worksScroll.clientWidth;
  if (worksScroll.scrollLeft >= maxScrollLeft) {
    // 最後までスクロールしたら先頭へ戻す
    worksScroll.scrollTo({ left: 0, behavior: 'smooth' });
  }
});
