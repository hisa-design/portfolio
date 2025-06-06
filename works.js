document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.getElementById("close");
  const images = document.querySelectorAll(".work-image");

  images.forEach(img => {
    img.addEventListener("click", () => {
      console.log("画像クリックされたよ:", img.src); // ←ログ出したいならここに入れてOK
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
});
