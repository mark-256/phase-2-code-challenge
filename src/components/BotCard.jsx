import React from "react";

function BotCard({ bot, onClick, onDischarge, showDischarge }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Class: {bot.bot_class}</p>
      <p>
        Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}
      </p>
      {showDischarge && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot);
          }}
          style={{ backgroundColor: "red", color: "white" }}
        >
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;
