const loading = document.querySelector('#loading');

window.addEventListener('load', () => {
  loading.classList.add('loaded');
});

const menu = document.querySelector('#menu-fig');

const lists = [
  {
    name: 'バターロール',
    img: 'menu-1.jpg',
    price: 300,
  },
  {
    name: 'バゲット',
    img: 'menu-2.jpg',
    price: 350,
  },
  {
    name: 'クロワッサン',
    img: 'menu-3.jpg',
    price: 350,
  },
  {
    name: 'パン・オ・ショコラ',
    img: 'menu-4.jpg',
    price: 300,
  },
  {
    name: 'メロンパン',
    img: 'menu-5.jpg',
    price: 350,
  },
  {
    name: 'チョココロネ',
    img: 'menu-6.jpg',
    price: 350,
  },
  {
    name: 'あんぱん',
    img: 'menu-7.jpg',
    price: 300,
  },
  {
    name: 'ベーグル',
    img: 'menu-8.jpg',
    price: 300,
  },
    {
    name: 'フォカッチャ',
    img: 'menu-9.jpg',
    price: 400,
  },
    {
    name: 'カレーパン',
    img: 'menu-10.jpg',
    price: 350,
  },
    {
    name: 'クリームパン',
    img: 'menu-11.jpg',
    price: 300,
  },
    {
    name: '自家製食パン(１斤)',
    img: 'menu-12.jpg',
    price: 1000,
  },
];

for(let i = 0; i < lists.length; i++){
  const {name, img, price} = lists[i];
  const content = `<div><img src="img/${img}" alt=""><p>${name}</p><p>${price}円</p></div>`;
  menu.insertAdjacentHTML('beforeend', content);
}