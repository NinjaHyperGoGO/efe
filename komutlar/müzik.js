const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
    const embedyardim = new Discord.RichEmbed()
        .setTitle("Mxir'S| Müzik Komutları!**")
        .setThumbnail('https://i.postimg.cc/sXYZLYjD/onhbteglence.gif')
        .setDescription( ` 💊 Ping: ${Date.now() - message.createdTimestamp} ms`)
        .setColor("#FF8C00")
        .setAuthor(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
        .addField(ayarlar.prefix + "çal", "müzik çalar")
        .addField(ayarlar.prefix + "durdur",  "müzik durdurluyor")
        .addField(ayarlar.prefix + "geç",  "siradaki müziğiye geçer")
        .addField(ayarlar.prefix + "ses",  "ses ayarlasiniz")
        .addField(ayarlar.prefix + "çalan",  "çalam müzikler bulunmaktadir")
        .addField(ayarlar.prefix + "duraklat",  "müzik duruyor")
        .addField(ayarlar.prefix + "devam",  "müzik devam eder")
        .addField(ayarlar.prefix + "end", "Yayın Akış Hızı Yeterli Değil")
        message.react("🤣")
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
        message.channel.send(embedyardim);
    } else {
        let command = params[0];
        if (client.commands.has(command)) {
            command = client.commands.get(command);
            message.author.send('', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
        }
    }
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['müzik',],
    permLevel: 0
};

exports.help = {
    name: 'müzik',
    description: 'Tüm komutları gösterir.',
    usage: 'müzik [komut]'
};