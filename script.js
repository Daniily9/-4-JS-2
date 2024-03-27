function myFunction() {
  var input, filter;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  // Зробіть запит до сервера з фільтром та отримайте відфільтрований список фільмів
  // Припустимо, що ви отримали відповідь від сервера у форматі JSON
  var responseFromServer = [
    { title: 'Інтерстеллар', description: 'Наукова фантастика', img: 'https://pics.filmaffinity.com/Interstellar-366875261-large.jpg' },
    { title: 'Втеча з Шоушенка', description: 'Драма', img: 'https://upload.wikimedia.org/wikipedia/uk/8/87/%D0%92%D1%82%D0%B5%D1%87%D0%B0_%D0%B7_%D0%A8%D0%BE%D1%83%D1%88%D0%B5%D0%BD%D0%BA%D0%B0.jpg' },
    { title: 'Кримінальне чтиво', description: 'Кримінальна драма', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNMJkU8jtP68oGQzT4-GcPZNuTCi_cab5oZO7zDqA4hCnVecKo-A9dTtTLeMXa79Rc238&usqp=CAU' },
    { title: 'Леон', description: 'Бойовик', img: 'https://upload.wikimedia.org/wikipedia/uk/e/e1/L%C3%A9on_poster.JPG' },
    { title: 'Форрест Гамп', description: 'Драма', img: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/600x900' },
    { title: 'Інцепція', description: 'Наукова фантастика', img: 'https://upload.wikimedia.org/wikipedia/uk/thumb/e/e1/%D0%9F%D0%BE%D1%87%D0%B0%D1%82%D0%BE%D0%BA_%D1%84%D1%96%D0%BB%D1%8C%D0%BC%2C_2010.jpg/225px-%D0%9F%D0%BE%D1%87%D0%B0%D1%82%D0%BE%D0%BA_%D1%84%D1%96%D0%BB%D1%8C%D0%BC%2C_2010.jpg' },
    // ...
  ];

  var ul = document.getElementById("myUL");
  ul.innerHTML = ''; // Очистіть список

  // Додайте відфільтровані фільми до списку
  if (filter !== '') {
    for (var i = 0; i < responseFromServer.length; i++) {
        var movie = responseFromServer[i];
        if (movie.title.toUpperCase().indexOf(filter) > -1) {
            var li = document.createElement("li");
            li.innerHTML = '<div class="card"><div class="container"><h4><b>' + movie.title + '</b></h4><p class="description">' + movie.description + '</p><img src="' + movie.img + '" onclick="showDescription(this)"></div></div>';
            ul.appendChild(li);
        }
    }
}
}

function showDescription(img) {
  var description = img.parentNode.querySelector('.description');
  description.style.display = description.style.display === 'none' ? 'block' : 'none';
}

window.onload = function() {
  if (!localStorage.getItem('subscribed')) {
      setTimeout(function() {
          document.getElementById('subscribe').style.display = 'block';
      }, 5000); // З'являється через 5 секунд
  }

  setTimeout(function() {
      document.getElementById('modal').style.display = 'block';
      setTimeout(function() {
          document.getElementById('modal').querySelector('button').style.display = 'block';
      }, 5000); // Кнопка закриття з'являється через 5 секунд
  }, 20000); // Модальне вікно з'являється через 20 секунд
};

function subscribe(answer) {
  if (answer) {
      localStorage.setItem('subscribed', 'true');
      alert('Дякуємо за підписку!');
  }
  document.getElementById('subscribe').style.display = 'none';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

