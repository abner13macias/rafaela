class Humillado{

    constructor(nombre, apodo, contador) {
        this.nombre = nombre;
        this.apodo = apodo;
        this.contador = contador;
    }

}

const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

const prefix = "!";

const suze = new Humillado("SuZe", "Hombre Diurex",3);
const cushu = new Humillado("Cushu", "El Bingo",7);
const daniel = new Humillado("Sancho", "Sistik Pelon",3);
const amber = new Humillado("Abner", "Don Wiki Homoclown",2);

client.on("message", function(message) { 
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    /*if(command === "ping"){
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
    }*/

    if(command === "suze"){
        message.reply(`${suze.nombre} AKA ${suz.apodo}. 12 de Octubre de 2002. Hall of Shame: ${suze.contador}. Hobbie: Engañar al server con sus compas de la secu y jalarsela con Midna.`);
    }

    if(command === "cushu"){
        message.reply(`${cushu.nombre} AKA ${cushu.apodo}. 7 de Mayo de 2001. Hall of Shame: ${cushu.contador}. Hobbie: Hablar de poyas mientras se va bien rushd0wn porque tiene que hacerle algo, weyes.`);
    }

    if(command === "sancho"){
        message.reply(`${daniel.nombre} AKA ${daniel.apodo}. 2 de Noviembre de 1999. Hall of Shame: ${daniel.contador}. Hobbie: Jalarle al C-Stick como si no hubiera un mañana, dejar abajo a sus compas por rankear en LoL y ligar menores de edad con greñas de colores.`);
    }

    if(command === "abner"){
        message.reply(`${amber.nombre} AKA ${amber.apodo}. 13 de Mayo de 1998. Hall of Shame: ${amber.contador}. Hobbie: Escuchar música de mugrosos e ir a conciertos donde tiran miados mientras solicita pollas para degustación.`);
    }

    if(command === "hall"){

        const humillado = args[0];
        
        switch(humillado){
            case "suze": 
                suze.contador++; 
                message.reply(`XDDDDD El pendejo ahora lleva ${suze.contador} Hall of Shames.`);
                break;
            case "cushu": 
                cushu.contador++; 
                message.reply(`XDDDDD El pendejo ahora lleva ${cushu.contador} Hall of Shames.`);
                break;
            case "sancho": 
                daniel.contador++; 
                message.reply(`XDDDDD El pendejo ahora lleva ${daniel.contador} Hall of Shames.`);
                break;
            case "abner": 
                amber.contador++; 
                message.reply(`XDDDDD El pendejo ahora lleva ${amber.contador} Hall of Shames.`);
                break;
            default: message.reply(`Diga quien se fue al Hall of Shame no sea pendejo.`);
        }
    }

    if(command === "nick"){

        const user = message.member.user.tag;
        const nick = message.member.nickname;

        switch(user){
            case "Super Zeldero#5600":
                suze.apodo = nick;
                message.reply(`El apodo de ${suze.nombre} se actualizó.`);
                break;
            case "Cushu.Simp#3052":
                cushu.apodo = nick;
                message.reply(`El apodo de ${cushu.nombre} se actualizó.`);
                break;
            case "Sancho#5296":
                daniel.apodo = nick;
                message.reply(`El apodo de ${daniel.nombre} se actualizó.`);
                break;
            case "Amber Mac#2990":
                amber.apodo = nick;
                message.reply(`El apodo de ${amber.nombre} se actualizó.`);
                break;
            default: message.reply(`Escriba bien wey`);
        }
    }

    if(command === "halllist"){
        var hall = [suze, cushu, daniel, amber];
        var hallOrdenado = hall.sort( function (a,b){
            
            if(a.contador > b.contador){
                return -1;
            }
            if(a.contador < b.contador){
                return 1;
            }

            return 0;
        } );

        message.reply(`\n1. ${hallOrdenado[0].apodo}. TOTAL: ${hallOrdenado[0].contador} \n`+ 
        `2. ${hallOrdenado[1].apodo}. TOTAL: ${hallOrdenado[1].contador} \n` + 
        `3. ${hallOrdenado[2].apodo}. TOTAL: ${hallOrdenado[2].contador} \n` +
        `4. ${hallOrdenado[3].apodo}. TOTAL: ${hallOrdenado[3].contador}`);
    }

});

client.login(config.BOT_TOKEN);