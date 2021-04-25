import * as slash from "https://raw.githubusercontent.com/harmonyland/harmony/main/deploy.ts";

// Pick up TOKEN and PUBLIC_KEY from ENV.
slash.init({ env: true });

slash.handle("bilgi", (d) => {
  d.reply(
    `• [Beni sunucuna ekle.](<https://discord.com/api/oauth2/authorize?client_id=758821820924952576&permissions=1&scope=applications.commands%20bot>),\n` +
      `• [Destek sunucuma katıl.](<https://discord.gg/y4GbJ4ha3Z>)`,
    { ephemeral: true }
  );
});

slash.handle("*", (d) => d.reply("Unhandled Command", { ephemeral: true }));
slash.client.on("interactionError", console.log);
