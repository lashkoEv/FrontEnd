// 1.
// выдайте на странице секцию с кнопкой "gen new user".
// По клику делайте запрос к https://randomuser.me/ через ajax и заполните полученные данные в секции:
//   - картинку
//   - телефон
//   - имя фамиля
//   - страна
//   - город
//   - почту

// По повторному клику - новый запрос и перезаполнение полей.

const task1 = () => {
  generateUser.addEventListener("click", () => {
    const URL = "https://randomuser.me/api/";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", URL);

    xhr.onload = () => {
      const response = JSON.parse(xhr.response);

      const user = toUserObject(response.results[0]);

      showUserData(user);

      saveToLocalStorage(user);
    };

    xhr.send();
  });
};

const toUserObject = ({ picture, phone, name, location, email }) => {
  return {
    picture: picture.large,
    phone,
    name: `${name.first} ${name.last}`,
    country: location.country,
    city: location.city,
    email,
  };
};

const showUserData = ({ picture, phone, name, country, city, email }) => {
  photoImg.src = picture;
  phoneEl.textContent = phone;
  fullNameEl.textContent = name;
  countryEl.textContent = country;
  cityEl.textContent = city;
  emailEl.textContent = email;
};

const saveToLocalStorage = (user) => {
  localStorage.setItem("randomUser", JSON.stringify(user));

  console.log("[LS ITEM]", localStorage.getItem("randomUser"));
};

// 3.
// выдайте на страницу вторую секцию по аналогии с предыдущим заданием.
// Найдите любое бесплатное api, которое вас заинтересует и так же по кнопке делайте запрос и выдавайте данные.
// В этом задании делаете запросы через fetch.
// Api может быть на любую тему - фильмы, погода и т.д.

const task3 = () => {
  generateActivity.addEventListener("click", () => {
    const URL = "http://www.boredapi.com/api/activity/";

    fetch(URL)
      .then((response) => response.json())
      .then((data) => showActivityData(data))
      .catch((error) => console.log(error));
  });
};

const showActivityData = ({ activity, type, participants }) => {
  activityEl.textContent = activity;
  typeEl.textContent = type;
  participantsEl.textContent = participants;
};

const app = () => {
  task1();
  task3();
};

app();
