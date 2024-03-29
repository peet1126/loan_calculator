import './Styles/App.css';
import LoanCalculator from './Components/LoanCalculator';

function App() {
  return (
    <div className="App">
      <div className="salt-logo">
        <svg viewBox="0 0 431.16 86.79" fill="#fff"><defs><style></style></defs><title>SALT logo</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,73.46l6.36-7.92A37.1,37.1,0,0,0,33.63,77.48C49.08,77.48,54,69.44,54,63,54,41.39,2.73,53.34,2.73,23.4,2.73,9.57,15.45.14,32.46.14,45.7.14,56,4.41,63.23,11.83L56.74,19.5C50.25,12.59,41.16,9.44,31.68,9.44c-10.39,0-17.79,5.41-17.79,13.33,0,18.86,51.28,8,51.28,39.37,0,12.2-8.57,24.65-31.94,24.65C18.18,86.79,7.14,81.26,0,73.46Z"></path><path class="cls-1" d="M267.27,86.79V.19H278v77H318.3v9.61Z"></path><path class="cls-1" d="M392.86,86.79V9.8H365.46V.19h65.7V9.8H403.63v77Z"></path><path class="cls-1" d="M160.55,23.63l25.2,53h-50.4l25.2-53m0-23.63L119.3,86.79h82.5L160.55,0Z"></path></g></g></svg>
      </div>
      <LoanCalculator />
    </div>
  );
}

export default App;
