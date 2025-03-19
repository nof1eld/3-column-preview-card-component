import "./App.css";
import { Column } from "./column";

const column1 = Column(1, "icon-sedans.svg", "SEDANS", "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.");
const column2 = Column(2, "icon-suvs.svg", "SUVS", "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.");
const column3 = Column(3, "icon-luxury.svg", "LUXURY", "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.");

function App () {
  return (
    <div className="App">
      <div className="container">
        {column1}
        {column2}
        {column3}
      </div>
    </div>
  );
}
export default App;