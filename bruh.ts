import * as slash from "https://raw.githubusercontent.com/harmonyland/harmony/main/deploy.ts";

// Pick up TOKEN and PUBLIC_KEY from ENV.
slash.init({ env: true });

slash.handle("bilgi", (d) => {
 embed.setTitle("Etkinlik başlatıldı!")
                    embed.setDescription(`**YouTube Together** etkinliği **${channel.name}** adlı kanalda başlatıldı [Etkinliğe katıl!](https://discord.gg/${invite.code})`),
                    embed.setFooter(` tarafından istendi.`),
                    embed.setColor("#7289DA"),
    { ephemeral: true }
  );
});

slash.handle("*", (d) => d.reply("Unhandled Command", { ephemeral: true }));
slash.client.on("interactionError", console.log);
