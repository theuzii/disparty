import * as slash from "https://raw.githubusercontent.com/harmonyland/harmony/main/deploy.ts";

// Pick up TOKEN and PUBLIC_KEY from ENV.
slash.init({ env: true });

slash.handle("bilgi", (d) => {
  d.reply(
    `• [Click here to invite.](<https://discord.com/api/oauth2/authorize?client_id=819835984388030464&permissions=1&scope=applications.commands%20bot>)\n` +
      `• [Check out Source Code.](<https://github.com/DjDeveloperr/ActivitiesBot>)\n` +
      `• [Join our Discord.](<https://discord.gg/WVN2JF2FRv>)`,
    { ephemeral: true }
  );
});

slash.handle("*", (d) => d.reply("Unhandled Command", { ephemeral: true }));
slash.client.on("interactionError", console.log);
