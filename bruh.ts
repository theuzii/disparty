import * as slash from "https://raw.githubusercontent.com/harmonyland/harmony/main/deploy.ts";

// Pick up TOKEN and PUBLIC_KEY from ENV.
slash.init({ env: true });

slash.handle("invite", (d) => {
  d.reply(
    `• Kullanım şekli : /etkinlik <**<Kanal Adı>** **<Etkinlik Adı>**\n` +
    `• [Botu kendi sunucuna davet et.](<https://discord.com/api/oauth2/authorize?client_id=758821820924952576&permissions=1&scope=applications.commands%20bot>)\n` +
      `• [Web Sitesi Yakında.](<https://github.com/theuzii>)\n` +
      `• [Destek sunucumuza katıl.](<https://discord.gg/y4GbJ4ha3Z>)`,
    { ephemeral: true }
  );
});
