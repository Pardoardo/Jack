const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Diz informações sobre o usuário.'),
	async execute(interaction) {
		await interaction.reply(`Esse comando foi executado por ${interaction.user.username}, que se juntou ao servidor em ${interaction.member.joinedAt}.`);
	},
};