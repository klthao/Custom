(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "klthao";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
			return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
			window.bot.chatUtilities.spam.push(spamWords[i]);
        }

			// Example code for a bot command:
		bot.commands.baconCommand = {
			command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
			rank: 'user', // Minimum user permission to use the command
			type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
			functionality: function (chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					API.sendChat("/me Bacon!!!");
				}
			}
		};
				
		bot.commands.debCommand = {
			command: 'deb',
			rank: 'host',
			type: 'exact',
			functionality: function (chat, cmd) {
				var randomInt = Math.floor((Math.random() * 5) + 1);
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					switch (randomInt) {
						case 1:
							API.sendChat("The Great Oz has Spoken!");
							break;
						case 2:
							API.sendChat("All Hail Deb Stylus!");
								break;
						case 3:
							API.sendChat("Beep Beep Boop Beep!");
							break;
						case 4:
							API.sendChat("ERROR! ERROR! System Alert: Rebooting!");
							break;
						case 5:
							API.sendChat("How are you today Deb Stylus!");
							break;
					}
						
				}
			}
		};
			
		bot.commands.nevereverCommand = {
			command: 'neverever',
			rank: 'host',
			type: 'startsWith',
			functionality: function (chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					var msg = chat.message.substr(cmd.length + 1);
					API.sendChat("Never have I ever ... " + msg);
				}
			}
		};
			
		bot.commands.pingCommand = {
			command: 'ping',  
			rank: 'user', 
			type: 'exact',
			functionality: function (chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else { 
					console.log(cmd);
					console.log(chat);
					API.sendChat("@" + chat.un + " Pong!"); 
				}
			}
		};

		bot.commands.rollCommand = {
			command: 'roll', 
			rank: 'user', 
			defaultDice: [1,100],
			functionality: function (chat, cmd) {
				var params = chat.message.substr(cmd.length + 2);
				console.log(params);
				var numDice = 1;
				var typeDie = 100;
				var diceArray = this.defaultDice;
				if (params !== undefined)
					diceArray = params.split('d');
				var capped = false;
				console.log(diceArray);
				if(diceArray && diceArray.length > 1){
					if(!isNaN(diceArray[0])) numDice = diceArray[0];
					if(!isNaN(diceArray[1])) typeDie = diceArray[1];
					if(typeDie > 1000) {
						typeDie = 1000; capped = true;
					}
					else if (typeDie < 1) {
						typeDie = 1; capped = true;
					}
					if(numDice > 1000) {
						numDice = 1000; capped = true;
					}
					else if (numDice < 1) {
						numDice = 1; capped = true;
					}

				}

				if(capped)
				{
					//API.sendChat("Dice Rolls capped to < 1000d1000 & > 1d1");
				}

				var diceRoll = 0;
				for(var i = 0; i < numDice; i++)
				{
					diceRoll += Math.floor((Math.random()*typeDie)+1);
				}

				API.sendChat("@" + chat.un + " rolled a " + diceRoll);
			}
		};
			
		bot.commands.talkcommand = {
			command: 'talk',
			rank: 'user',
			type: 'exact',
			functionality: function(chat, cmd) {
				var interval = setInterval(talkFunction(), 5000);
					
				function talkFunction() {
					var randomInt = Math.floor((Math.random() * 5) + 1);
						
					switch (randomInt) {
						case 1:
							API.sendChat("@" + chat.un + ", these are not the droids you are looking for!");
							break;
						case 2:
							API.sendChat("@" + chat.un + ", what do you want to talk about?");
							break;
						case 3:
							API.sendChat("@" + chat.un + ", don't look at me!");
							break;
						case 4:
							API.sendChat("@" + chat.un + ", you do know you're talking to a robot?");
							break;
						case 5:
							API.sendChat("@" + chat.un + ", Domo Arigato!");
							break;
					}
				}
			}
		};

		bot.commands.randomCommand = {
			command: 'random',  
			rank: 'user', 
			type: 'exact',
			functionality: function (chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					var roomUsers = [];
					var randomUserPos = Math.floor((Math.random() * bot.room.users.length) + 1);
					var randomUser;
					for ( var i = 0; i < bot.room.users.length; i++) {
						roomUsers.push(bot.room.users[i].username);
					}
					
					randomUser = roomUsers[randomUserPos].toString();
					
					API.sendChat("@" + randomUser + ", are you thinking what I'm thinking?");
				}
			}
		};
		
/*		bot.commands.quoteCommand = {
			command: 'quote',  
			rank: 'user', 
			type: 'exact',
			functionality: function (chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					var randomInt = Math.floor((Math.random() * 10) + 1);
					var roomUsers = [];
					var randomUserPos = Math.floor((Math.random() * bot.room.users.length) + 1);
					var randomUser;
					for ( var i = 0; i < bot.room.users.length; i++) {
						roomUsers.push(bot.room.users[i].username);
					}
					randomUser = roomUsers[randomUserPos].toString();
					switch (randomInt) {
						case 1:
							API.sendChat("@" + randomUser + ", Do not tale life too seriously. You will never get out of it alive. -Elbert Hubbard");
							break;
						case 2:
							API.sendChat("@" + randomUser + ", Be yourself; everyone else is already taken. -Oscar Wilde");
							break;
						case 3:
							API.sendChat("@" + randomUser + ", You only live once, but if you do it right, once is enough. -Mae West");
							break;
						case 4:
							API.sendChat("@" + randomUser + ", Live as if you were to die tomorrow. Learn as if you were to live forever. -Mahatma Ghandhi");
							break;
						case 5:
							API.sendChat("@" + randomUser + ", The truth is, every9one is going to hurt you. You just got to find the ones worth suffering for. -Bob Marley");
							break;
						case 6:
							API.sendChat("@" + randomUser + ", Remember that the happiest people are not those getting more, but those giving more. -H. Jackson Brown, Jr.");
							break;
						case 7:
							API.sendChat("@" + randomUser + ", A friend is someone who gives you total freedom to be yourself. -Jim Morrison");
							break;
						case 8:
							API.sendChat("@" + randomUser + ", Do not go where the path may lead; go instead where there is no path and leave a trail. -Ralph Waldo Emersom");
							break;
						case 9:
							API.sendChat("@" + randomUser + ", You don't love someone because they're perfect. You love them in spite of the fact that they're not. -Jodi Picoult");
							break;
						case 10;
							API.sendChat("@" + randomUser + ", You know you're in love when you can't fall asleep because reality is finally better than your dreams. -Dr. Seuss");
							break;
					}
				}
			}
		};
*/		
        // Load the chat package again to account for any changes
        bot.loadChat();

	}

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("domoArigatoMrRobotosettings", JSON.stringify({
		botName: "domoArigatoMrRoboto",
		language: "english",
		chatLink: "https://rawgit.com/klthao/source/master/lang/en.json",
		scriptLink: "https://rawgit.com/klthao/source/master/domoArigatoMrRoboto.js",
		roomLock: false, // Requires an extension to re-load the script
		startupCap: 1, // 1-200
		startupVolume: 0, // 0-100
		startupEmoji: false, // true or false
		autowoot: false,
		autoskip: false,
		smartSkip: false,
		cmdDeletion: true,
		maximumAfk: 120,
		afkRemoval: false,
		maximumDc: 60,
		bouncerPlus: true,
		blacklistEnabled: false,
		lockdownEnabled: false,
		lockGuard: false,
		maximumLocktime: 10,
		cycleGuard: false,
		maximumCycletime: 10,
		voteSkip: false,
		voteSkipLimit: 10,
		historySkip: false,
		timeGuard: false,
		maximumSongLength: 10,
		autodisable: false,
		commandCooldown: 30,
		usercommandsEnabled: true,
		skipPosition: 3,
		skipReasons: [
		["theme", "This song does not fit the room theme. "],
		["op", "This song is on the OP list. "],
		["history", "This song is in the history. "],
		["mix", "You played a mix, which is against the rules. "],
		["sound", "The song you played had bad sound quality or no sound. "],
		["nsfw", "The song you contained was NSFW (image or sound). "],
		["unavailable", "The song you played was not available for some users. "]
		],
		afkpositionCheck: 15,
		afkRankCheck: "ambassador",
		motdEnabled: false,
		motdInterval: 5,
		motd: "Temporary Message of the Day",
		filterChat: true,
		etaRestriction: false,
		welcome: false,
		opLink: null,
		rulesLink: null,
		themeLink: null,
		fbLink: null,
		youtubeLink: null,
		website: null,
		intervalMessages: [],
		messageInterval: 5,
		songstats: false,
		commandLiteral: "!",
		blacklists: {
		NSFW: "https://rawgit.com/klthao/custom/master/blacklists/NSFWlist.json",
		OP: "https://rawgit.com/klthao/custom/master/blacklists/OPlist.json",
		BANNED: "https://rawgit.com/klthao/custom/master/blacklists/BANNEDlist.json"
		}
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/klthao/source/master/domoArigatoMrRoboto.js", extend);

}).call(this);
