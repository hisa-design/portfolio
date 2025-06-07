function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = '♡';

  // 横位置ランダム
  heart.style.left = Math.random() * 100 + 'vw';

  // 一番下から
  heart.style.top = '100vh';

  // サイズとアニメーション時間
  const size = 16 + Math.random() * 44;  // 16〜60px
  heart.style.fontSize = size + 'px';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// 0.3秒ごとに♡作成 → 量アップ！
setInterval(createHeart, 300);


