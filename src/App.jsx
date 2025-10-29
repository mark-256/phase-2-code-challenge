import "./App.css";
import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection.jsx";
import YourBotArmy from "./components/YourBotArmy.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [bots, setBots] = useState([]);
  // State for bots added to your army
  const [army, setArmy] = useState([]);

  // Fetch bots data from server once when the app loads
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  // Add a bot to the army (if it's not already there)
  function enlistBot(bot) {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  // Remove a bot from your army (but not from the server)
  function releaseBot(bot) {
    setArmy(army.filter((b) => b.id !== bot.id));
  }

  // Permanently delete a bot from the server and remove it from army and collection
  function dischargeBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" }).then(
      () => {
        setArmy(army.filter((b) => b.id !== bot.id));
        setBots(bots.filter((b) => b.id !== bot.id));
      }
    );
  }

  // Permanently delete all bots in the army from the server and clear the army and remove from collection
  function dischargeAllBots() {
    const deletePromises = army.map((bot) =>
      fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" })
    );
    Promise.all(deletePromises).then(() => {
      setArmy([]);
      setBots(
        bots.filter((bot) => !army.some((armyBot) => armyBot.id === bot.id))
      );
    });
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1> {/* App title */}
      {/* Display your selected bot army */}
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
        dischargeAllBots={dischargeAllBots}
      />
      {/* Display all available bots to enlist */}
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App; // Export main App component
