const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Diz informações sobre o servidor.'),
	async execute(interaction) {
		await interaction.reply(`O nome desse servidor é ${interaction.guild.name} e ele tem ${interaction.guild.memberCount} membros.`);
	},
};