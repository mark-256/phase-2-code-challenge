import React from "react";
import BotCard from "./BotCard.jsx";


function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {army.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => releaseBot(bot)}
            onDischarge={() => dischargeBot(bot)}
            showDischarge={true}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
