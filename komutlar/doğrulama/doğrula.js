module.exports = {
	name: 'doğrula',
	run: async (client, message, args, db) => {
		let verified = db.get(`verified_${message.guild.id}_${message.author.id}`);
		if (!verified) client.emit('guildMemberAdd', message.member);
		if (verified) message.channel.send(':x: | **Zaten doğrulandınız!**');
	}
};
