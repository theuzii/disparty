import * as slash from "https://raw.githubusercontent.com/harmonyland/harmony/main/deploy.ts";

// Pick up TOKEN and PUBLIC_KEY from ENV.
slash.init({ env: true });

const ACTIVITIES: {
  [name: string]: {
    id: string;
    name: string;
  };
} = {
  poker: {
    id: "755827207812677713",
    name: "Poker Night",
  },
  betrayal: {
    id: "773336526917861400",
    name: "Betrayal.io",
  },
  youtube: {
    id: "755600276941176913",
    name: "YouTube Together",
  },
  fishing: {
    id: "814288819477020702",
    name: "Fishington.io",
  },
};

// Create Slash Commands if not present
slash.commands.all().then((e) => {
  if (e.size !== 5) {
    slash.commands.bulkEdit([
      {
        name: "bilgi",
        description: "Benimle ilgili bilgi al.",
      },
      {
        name: "etkinlik",
        description: "Sesli bir kanalda etkinlik başlat.",
        options: [
          {
            name: "kanal",
            type: slash.SlashCommandOptionType.CHANNEL,
            description: "Etkinliğin başlayacağı sesli kanal.",
            required: true,
          },
          {
            name: "etkinlik",
            type: slash.SlashCommandOptionType.STRING,
            description: "Başlatılacak etkinlik.",
            required: true,
            choices: Object.entries(ACTIVITIES).map((e) => ({
              name: e[1].name,
              value: e[0],
            })),
          },
        ],
      },
    ]);
  }
});

slash.handle("etkinlik", (d) => {
  if (!d.guild) return;
  const channel = d.option<slash.InteractionChannel>("channel");
  const activity = ACTIVITIES[d.option<string>("etkinlik")];
  if (!channel || !activity) {
    return d.reply("Geçersiz kullanım.", { ephemeral: true });
  }
  if (channel.type !== slash.ChannelTypes.GUILD_VOICE) {
    return d.reply("Etkinlikler sadece ses kanallarında başlatılabilir.", {
      ephemeral: true,
    });
  }

  slash.client.rest.api.channels[channel.id].invites
    .post({
      max_age: 604800,
      max_uses: 0,
      target_application_id: activity.id,
      target_type: 2,
      temporary: false,
    })
    .then((inv) => {
      d.reply(
        `[ **${activity.name}** etkinliği **${channel.name}** adlı kanalda başlatıldı.](<https://discord.gg/${inv.code}>)`
      );
    })
    .catch((e) => {
      console.log("Failed", e);
      d.reply("Etkinlik başlatılamadı.", { ephemeral: true });
    });
});

slash.handle("bilgi", (d) => {
  d.reply(
    `• [Botu kendi sunucuna davet et.](<https://discord.com/api/oauth2/authorize?client_id=758821820924952576&permissions=1&scope=applications.commands%20bot>)\n` +
      `• [Web Sitesi Yakında.](<https://github.com/DjDeveloperr/ActivitiesBot>)\n` +
      `• [Destek sunucumuza katıl.](<https://discord.gg/y4GbJ4ha3Z>)`,
    { ephemeral: true }
  );
});

slash.handle("*", (d) => d.reply("Bilinmeyen Komut?", { ephemeral: true }));
slash.client.on("interactionError", console.log);
