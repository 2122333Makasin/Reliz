let cards = document.querySelectorAll('.card');

let detail = document.querySelector('.detail');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((c) => c.classList.remove('active'));
    card.classList.add('active');

    console.log('Card clicked:', card);
    activeCard = card;
    showDetail(card);
  });
});

function showDetail(activeCard) {
  if (activeCard) {
    detail.innerHTML = '';
    let imgSrc = activeCard.querySelector('img').src;
    let title = activeCard.querySelector('h2').innerText;
    let description = activeCard.querySelector('p').innerText;

    let img = document.createElement('img');
    img.src = imgSrc;
    img.alt = title;

    let h2 = document.createElement('h2');
    h2.innerText = title;

    let p = document.createElement('p');
    p.innerText = description;

    detail.appendChild(img);
    detail.appendChild(h2);
    detail.appendChild(p);
  }
}
