import React from "react";
import BotCard from "./BotCard.jsx";// Import BotCard component


function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} onClick={() => enlistBot(bot)} /> // Handle click event
        ))}
      </div>
    </div>
  );
}

export default BotCollection;// Export component
