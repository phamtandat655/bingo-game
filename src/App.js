import './App.css';
import BgWinBingo from './components/BgWinBingo/BgWinBingo';
import RandomNumber from './components/RandomNumber/RandomNumber';
import RandomNumberInput from './components/RandomNumberInput/RandomNumberInput';
import Ticket from './components/Ticket/Ticket';
import { useRandomNumberContext } from './context/RandomNumberProvider';
import data from './data/data.json';

function App() {
  const ticketList = Object.values(data);

  const { isBingo } = useRandomNumberContext();

  return (
    <div className="App">
      {isBingo && <BgWinBingo />}
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
            return <Ticket numberArr={ticket.list} nameOfTicket={ticket.name} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
