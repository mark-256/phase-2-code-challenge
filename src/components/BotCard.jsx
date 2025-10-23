import React from "react";

// This component displays information about a single bot.
function BotCard({ bot, onClick, onDischarge, showDischarge }) {
  return (
    // The main card container; clicking it triggers the onClick function
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} /> {/* Bot image */}
      <h3>{bot.name}</h3> {/* Bot name */}
      <p>Class: {bot.bot_class}</p> {/* Bot class and stats */}
      <p>
        Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}
      </p>
      {/* Show discharge button only if showDischarge is true */}
      {showDischarge && (
        <button
          // Stop click from also triggering the card’s onClick event
          onClick={(e) => {
            e.stopPropagation();
            onDischarge(bot); // Call discharge handler with this bot’s data
          }}
          // Simple red button style
          style={{ backgroundColor: "red", color: "white" }}
        >
          X
        </button>
      )}
    </div>
  );
}

export default BotCard;
