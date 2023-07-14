import './App.css';
import BgWinBingo from './components/BgWinBingo/BgWinBingo';
import RandomNumber from './components/RandomNumber/RandomNumber';
import RandomNumberInput from './components/RandomNumberInput/RandomNumberInput';
import Ticket from './components/Ticket/Ticket';
import { useRandomNumberContext } from './context/RandomNumberProvider';
import data from './data/data.json';

// import firebase to deploy hosting
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDdibpBx4ZsWszPj0DZk4HzKB3e_jZ02CM',
  authDomain: 'bingo-minigame.firebaseapp.com',
  projectId: 'bingo-minigame',
  storageBucket: 'bingo-minigame.appspot.com',
  messagingSenderId: '612655131414',
  appId: '1:612655131414:web:f99cddb738fb54c3defe37',
  measurementId: 'G-4492HJ705B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
