# Practical 2: Weather API with REST Operations

## Objective
Build a simple weather application using vanilla JavaScript that performs:
- `GET` requests (weather data using OpenWeatherMap API)
- `POST`, `PUT`, `DELETE` requests (location data using JSONPlaceholder API)

## Instructions

### Step 1: Project Setup

1. Create a folder with these files:
index.html
script.js

markdown
Copy code

2. Use OpenWeatherMap API for weather data:
- Sign up at https://openweathermap.org/
- Get an API key and use it in `script.js`

3. Use JSONPlaceholder for testing:
- Fake REST API for testing `POST`, `PUT`, `DELETE`

---

### Step 2: Build HTML UI

- Create a tab interface (GET, POST, PUT, DELETE)
- Include:
- Weather search form (GET)
- Location saving form (POST)
- Location list with edit/delete (PUT, DELETE)
- Response display section
- Edit modal for updating location

---

### Step 3: JavaScript Functionality (`script.js`)

- Add `event listeners` for buttons
- Create functions for each REST operation:
- `getWeather()`: Fetch weather from OpenWeatherMap
- `saveLocation()`: POST to JSONPlaceholder
- `updateLocation()`: PUT to JSONPlaceholder
- `deleteLocation()`: DELETE from JSONPlaceholder
- Show results in the UI

---

### Step 4: Test the App

1. Replace `"YOUR_OPENWEATHERMAP_API_KEY"` with your actual key in `script.js`
2. Open `index.html` in a browser
3. Test all actions:
- Enter a city → click "Get Weather"
- Fill form → click "Save Location"
- Click "Edit" → modify → click "Update"
- Click "Delete" to remove entry

---

## Resources
- [OpenWeatherMap API](https://openweathermap.org/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)