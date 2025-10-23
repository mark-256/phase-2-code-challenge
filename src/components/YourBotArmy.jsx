import React from "react";
import BotCard from "./BotCard.jsx";// Import BotCard component


// Component that displays the user's selected bot army
function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {/* Render each bot in the army */}
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => releaseBot(bot)} // Remove bot from army
            onDischarge={() => dischargeBot(bot)} // Permanently delete bot
            showDischarge={true} // Show discharge (X) button
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;// Export component
