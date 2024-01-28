import { getRefs } from './components/get-refs';

const refs = getRefs();
const markup = `<input class="search-input" type="text" name="country" />`;

refs.addCountry.addEventListener('click', handlerAddInput);

function handlerAddInput() {
  refs.conteinerWrapper.insertAdjacentHTML('beforeend', markup);
}

refs.searchForm.addEventListener('submit', handlerForm);

function handlerForm(e) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const arr = data
    .getAll('country')
    .filter(item => item)
    .map(item => item.trim());
  getCountry(arr)
    .then(async resp => {
      const capitals = resp.map(({ capital }) => capital[0]);
      const weatherService = await getWeather(capitals);
      refs.list.innerHTML = createMarkup(weatherService);
    })
    .catch(err => console.log(err))
    .finally(() => {
      refs.searchForm.reset();
      refs.conteinerWrapper.innerHTML = markup;
    });
}

async function getCountry(arr) {
  const resps = arr.map(async item => {
    const resp = await fetch(`https://restcountries.com/v3.1/name/${item}`);
    if (!resp.ok) {
      throw new Error();
    }

    return resp.json();
  });
  const data = await Promise.allSettled(resps);
  const countryObject = data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value[0]);

  return countryObject;
}

async function getWeather(arr) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = '9832fca16a6240d9a17162137242801';

  const resps = arr.map(async city => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: city,
      lang: 'uk',
    });

    const resp = await fetch(`${BASE_URL}/current.json?${params}`);

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
  const data = await Promise.allSettled(resps);
  const objs = data
    .filter(({ status }) => status === 'fulfilled')
    .map(({ value }) => value);

  return objs;
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        current: {
          condition: { icon, text },
          temp_c,
        },
        location: { country, name },
      }) =>
        ` <li class="weather-item">
          <div>
            <h2>${country}</h2>
            <h3>${name}</h3>
          </div>
          <img class="weather-img" src="${icon}" alt="${text}" />
          <p>${text}</p>
          <p>${temp_c}°C</p>
        </li>`
    )
    .join('');
}
