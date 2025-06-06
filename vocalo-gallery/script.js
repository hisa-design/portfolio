// 全ての.item要素を取得
const items = document.querySelectorAll('.item');

items.forEach((item, index) => {
  const button = item.querySelector('.fav');
  const countSpan = item.querySelector('.count');

  // 保存されたカウントを読み込み
  const savedCount = localStorage.getItem(`favCount${index}`);
  countSpan.textContent = savedCount !== null ? savedCount : 0;

  // イベントリスナーの登録
  button.addEventListener('click', () => {
    let count = parseInt(countSpan.textContent);
    count++;
    countSpan.textContent = count;

    // ローカルストレージに保存
    localStorage.setItem(`favCount${index}`, count);
  });
});

const navButtons = document.querySelectorAll('nav button');
const item = document.querySelectorAll('.gallery .item');

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const genre = button.textContent;

    if (genre === '全部表示') {
      items.forEach(item => item.style.display = 'block');
    } else {
      items.forEach(item => {
        if (item.dataset.genre === genre) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }
  });
});
