import "./App.css";
import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection.jsx";
import YourBotArmy from "./components/YourBotArmy.jsx";
import Header from "./components/Header.jsx";

function App() {
  // State for all bots
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

  // Permanently delete a bot from the server and remove it from army
  function dischargeBot(bot) {
    fetch(`http://localhost:3000/bots/${bot.id}`, { method: "DELETE" }).then(
      () => setArmy(army.filter((b) => b.id !== bot.id))
    );
  }

  return (
    <div className="App">
      <h1>Bot Battlr</h1> {/* App title */}
      {/* Display your selected bot army */}
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      {/* Display all available bots to enlist */}
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App; // Export main App component
