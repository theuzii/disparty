import * as slash from "https://github.com/theuzii/agucubugucuuwu/edit/main/mod.ts";

// Pick up TOKEN and PUBLIC_KEY from ENV.
slash.init({ env: true });


// Create Slash Commands if not present
slash.commands.all().then((e) => {
  if (e.size !== 1) {
    slash.commands.bulkEdit([
      {
        name: "yardım",
        description: "Botun yardım komutlarını görüntüler.",
      },
    ]);
  }
});

slash.handle("yardım", (d) => {
  d.reply(
    `• [Botu sunucuna davet et.](<https://discord.com/api/oauth2/authorize?client_id=758821820924952576&permissions=1&scope=applications.commands%20bot>)\n` +
      `• [Web sitesi yakında.]()\n` +
      `• [Destek sunucusuna katıl.](<https://discord.gg/y4GbJ4ha3Z>)`,
    { ephemeral: true }
  );
});

slash.handle("*", (d) => d.reply("Unhandled Command", { ephemeral: true }));
slash.client.on("interactionError", console.log);
