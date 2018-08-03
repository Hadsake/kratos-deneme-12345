const shorten = require('isgd');

exports.run = (client, message, args, tools) => {

    
    if(!args[0]) return message.channel.send('Lütfen bir **URL** girin!')
    
    if(!args[1]) {

        shorten.shorten(args[0], function(res) {
           if (res.startsWith('ERROR:')) message.channel.send('**Lütfen geçerli bir URL girin **');

           message.channel.send(`**<${res}>**`);
            
        })
        
    } else {

        shorten.custom(args[0], args[1], function(res) {

            if (res.startsWith('ERROR:')) message.channel.send(`**${res}**`);

            message.channel.send(`**<${res}>**`);
        })

    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'linkkısalt',
    description: 'Verilen linki is.gd linkine dönüştürür.',
    usage: 'linkkısalt **[URL]**'
  };
