import * as slash from "https://raw.githubusercontent.com/harmonyland/harmony/main/deploy.ts";

// Pick up TOKEN and PUBLIC_KEY from ENV.
slash.init({ env: true });

slash.handle("bilgi", (d) => {
 async execute(bot, say, interaction, args) {
		const embed = new MessageEmbed()
			.setDescription(args[0].value)
			.setColor("RANDOM")
			.setTimestamp()
			.setFooter(bot.user.username);
		await say(interaction, embed);
    { ephemeral: true }
  );
},
});

slash.handle("*", (d) => d.reply("Unhandled Command", { ephemeral: true }));
slash.client.on("interactionError", console.log);
