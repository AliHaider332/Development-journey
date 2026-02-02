import React, { useState } from "react";

const App = () => {
  const [city] = useState([
    'Lahore','Karachi','Islamabad','Rawalpindi','Faisalabad',
    'Multan','Quetta','Peshawar','Sialkot','Gujranwala',
    'Hyderabad','Sukkur','Bahawalpur','Abbottabad','Mardan',
    'Swat','Skardu','Hunza','Murree','Chitral',
  ]);

  const [cityList, updateCitylist] = useState(city);

  function filterer(e) {
    const value = e.target.value.toLowerCase();
    const filteredCities = city.filter((c) =>
      c.toLowerCase().includes(value)
    );
    updateCitylist(filteredCities);
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>City Search</h2>

      <input
        type="text"
        placeholder="Search city..."
        onChange={filterer}
        style={styles.input}
      />

      <ul style={styles.list}>
        {cityList.length > 0 ? (
          cityList.map((c, index) => (
            <li key={index} style={styles.item}>
              {c}
            </li>
          ))
        ) : (
          <li style={styles.noResult}>No city found</li>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
    backgroundColor: "#f9f9f9"
  },
  heading: {
    textAlign: "center",
    marginBottom: "15px"
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "15px"
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0
  },
  item: {
    padding: "8px",
    borderBottom: "1px solid #ddd"
  },
  noResult: {
    textAlign: "center",
    color: "red",
    padding: "10px"
  }
};

export default App;
