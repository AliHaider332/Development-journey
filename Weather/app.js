const cityName = document.querySelector("#user-input");
const submit = document.querySelector("#submit");
const key = '70bc1d916cfa7aecb0aa807562987070';

const container = document.querySelector('.container');

const content1 = document.querySelector('.hero-data');
const content2 = document.querySelector('.feature');
const content3 = document.querySelector('.time');
const loading = document.querySelector('.spinner');

let data;

// Function to fetch data
async function fetchData(city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    
    const response = await fetch(URL);

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
    }

    return await response.json();
}

// Event listener for search button
submit.addEventListener('click', async () => {
    const city = cityName.value.trim();

    if (city !== "") {
        toggleDisplay(false); // Hide content and show loader

        try {
            data = await fetchData(city);
            renderWeather();

            toggleDisplay(true); // Show content and hide loader

        } catch (error) {
            showError(error.message);
        }
    } else {
        alert("Please enter a city name.");
    }
});

// Function to show/hide content and loader
function toggleDisplay(showContent) {
    if (showContent) {
        content1.style.display = 'flex';
        content2.style.display = 'flex';
        content3.style.display = 'flex';
        loading.style.display = 'none';
    } else {
        content1.style.display = 'none';
        content2.style.display = 'none';
        content3.style.display = 'none';
        loading.style.display = 'flex';
    }
}

// Function to show error
function showError(message) {
    loading.style.animation = "none";
    loading.innerHTML = `
        <span id="error-appear">
            <p class="error-message">Note*: ${message}</p>
            <button class="refresh-btn" onclick="location.reload()">Refresh</button>
        </span>
    `;
}

// Function to render weather data
function renderWeather() {
    const showname = data.name;
    const iconId = data.weather[0].icon;
    const description = data.weather[0].description;

    const tempMax = Math.round(data.main.feels_like);
    const tempMin = Math.round(data.main.temp_min);
    const temp = Math.round((tempMax + tempMin) / 2);

    const humidity = data.main.humidity;
    const wind = Math.round(((data.wind.speed) * 18) / 5); // m/s to Km/hr
    const pressure = data.main.pressure; // in hPa
    const visibility = (data.visibility / 1000).toFixed(1); // Convert meters to Km

    const zone = data.timezone;
    const dt = data.dt;
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;

    // Time adjustments (Optional)
    const deductSeconds = 5 * 3600;  // minus 5 hours
    const addSeconds = 1 * 60;       // plus 3 minutes

    const date = new Date((dt + zone - deductSeconds + addSeconds) * 1000);
    const riseDate = new Date((sunrise + zone - deductSeconds + addSeconds) * 1000);
    const setDate = new Date((sunset + zone - deductSeconds + addSeconds) * 1000);

    const rise = riseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    const set = setDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const dateNum = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

    container.innerHTML = `
        <div class="search">
            <input type="text" id="user-input" placeholder="Enter City Name">
            <button id="submit"><img src="Pics/search.png" alt="search img"></button>
        </div>

        <div class="hero-data">
            <div class="city-name">${showname}</div>
            <img src="https://openweathermap.org/img/wn/${iconId}@2x.png" alt="icon" class="picture">
            <div class="discription">${description}</div>
            <div class="temperature">${temp}°C</div>
            <div class="date">
                <div class="day">${day}, ${dateNum}-${month}-${year}</div>
                <div class="num">${time}</div>
            </div>
        </div>

        <div class="feature">
            <div class="row">
                <div class="c">
                    <i class="fa-solid fa-temperature-arrow-up"></i>
                    <div class="amount">
                        <span>${tempMax}°C</span>
                        <span class="option">Max Temp</span>
                    </div>
                </div>
                <div class="c">
                    <i class="fa-solid fa-temperature-arrow-down"></i>
                    <div class="amount">
                        <span>${tempMin}°C</span>
                        <span class="option">Min Temp</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="c">
                    <img src="Pics/humidity.png" alt="humidity icon">
                    <div class="amount">
                        <span>${humidity}%</span>
                        <span class="option">Humidity</span>
                    </div>
                </div>
                <div class="c">
                    <img src="Pics/wind.png" alt="wind icon">
                    <div class="amount">
                        <span>${wind} Km/hr</span>
                        <span class="option">Wind Speed</span>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="c">
                    <span class="material-symbols-outlined">compress</span>
                    <div class="amount">
                        <span>${pressure} hPa</span>
                        <span class="option">Pressure</span>
                    </div>
                </div>
                <div class="c">
                    <i class="fa-regular fa-eye"></i>
                    <div class="amount">
                        <span>${visibility*1000} m</span>
                        <span class="option">Visibility</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="time">
            <div class="sun">Sun Rise: ${rise}</div>
            <div class="sun">Sun Set: ${set}</div>
        </div>

        <div class="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `;

    // Rebind the search button event listener
    document.querySelector('#submit').addEventListener('click', () => {
        cityName.value = document.querySelector('#user-input').value;
        submit.click();
    });
}
