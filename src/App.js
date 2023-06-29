import './App.css';
import RandomNumber from './components/RandomNumber/RandomNumber';
import RandomNumberInput from './components/RandomNumberInput/RandomNumberInput';
import Ticket from './components/Ticket/Ticket';
import data from './data/data.json';

function App() {
  const ticketList = Object.values(data);

  return (
    <div className="App">
      <div className="App">
        <div className="random-number-wrapper">
          <h1>Bingo Game</h1>
          <div className="random-number-container">
            <RandomNumberInput />
            <RandomNumber />
          </div>
        </div>
        <div className="ticketList-wrapper">
          {/* <Ticket numberArr={ticketList[0]} numberOfTicket={1} /> */}
          {ticketList.map((ticket, index) => {
            return <Ticket numberArr={ticket} numberOfTicket={index + 1} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
