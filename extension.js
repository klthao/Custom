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

		bot.commands.falconPunchCommand = {
			command: 'falconpunch',
			rank: 'user',
			type: 'exact',
			functionality: function (chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					API.sendChat("Hold on! The death punch is coming!");
				}
			}
		};
		
		bot.commands.gothyCommand = {
			command: 'gothy',
			rank: 'host',
			type: 'exact',
			functionality: function(chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					API.sendChat("The Gothy is here, so you better behave yourselves!");
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

		bot.commands.quoteCommand = {
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
							API.sendChat("@" + randomUser + ", Do not take life too seriously. You will never get out of it alive. -Elbert Hubbard");
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
							API.sendChat("@" + randomUser + ", The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for. -Bob Marley");
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
						case 10:
							API.sendChat("@" + randomUser + ", You know you're in love when you can't fall asleep because reality is finally better than your dreams. -Dr. Seuss");
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
					var randomInt = Math.floor((Math.random() * 5) + 1);
					var roomUsers = [];
					var randomUserPos = Math.floor((Math.random() * bot.room.users.length) + 1);
					var randomUser;
					for ( var i = 0; i < bot.room.users.length; i++) {
						roomUsers.push(bot.room.users[i].username);
					}
					
					randomUser = roomUsers[randomUserPos].toString();
					
					switch (randomInt) {
						case 1:
							API.sendChat("@" + randomUser + ", are you thinking what I'm thinking?");
							break;
						case 2:
							API.sendChat("@" + randomUser + ", how do you like YouTunes?");
							break;
						case 3:
							API.sendChat("@" + randomUser + ", can we be friends?");
							break;
						case 4:
							API.sendChat("@" + randomUser + ", I don't think it means what you think it means.");
							break;
						case 5:
							API.sendChat("@" + randomUser + ", LOOKOUT!");
							break;
					}
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

		bot.commands.snausCommand = {
			command: 'snaus',
			rank: 'user',
			type: 'exact',
			functionality: function(chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					API.sendChat("Love dem Snausages!");
				}
			}
		};
	
		bot.commands.talkcommand = {
			command: 'talk',
			rank: 'user',
			type: 'exact',
			functionality: function(chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
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

		bot.commands.triviaCommand = {
			command: 'trivia',
			rank: 'user',
			type: 'exact',
			functionality: function (chat, cmd) {
				if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
				if (!bot.commands.executable(this.rank, chat)) return void (0);
				else {
					var randomInt = Math.floor((Math.random() * 26) + 1);
					
					switch (randomInt) {
						case 1:
							API.sendChat("Who was the lead singer of the band Audioslave");
							//Chris Cornell
							break;
						case 2:
							API.sendChat("Which pop star sang the national anthem at the 50th Super Bowl?");
							//Lady Gaga
							break;
						case 3:
							API.sendChat("Who was the lead singer of the rock band Queen?");
							//Freddie Mercury
							break;
						case 4:
							API.sendChat("ABBA was a pop group from what country?");
							//Sweden
							break;
						case 5:
							API.sendChat("Hallelujah is a song written by which Canadian recording artist?");
							//Leonard Cohen
							break;
						case 6:
							API.sendChat("Which Michael Jackson song entered straight at #1 position on Billboard 100 Singles Chart?");
							//You are not alone (Year 1995)
							break;
						case 7:
							API.sendChat("Who were the three original members of Backstreet Boys?");
							//Howie Dorough, AJ MacLean and Nick Carter. Kevin Richardson and Brian Littrel joined the band in 1993.
							break;
						case 8:
							API.sendChat("Which two members of N'SYNC were mouseketters on the NEW Mickey Mouse Club?");
							//Justin Timberlake and JC Chasez
							break;
						case 9:
							API.sendChat("Which rap group was totally crossed out?");
							//Kris Kross
							break;
						case 10:
							API.sendChat("who wanted you to Hold my hand?");
							//Hootie and the Blowfish
							break;
						case 11:
							API.sendChat("Which 2 New Kids On The Block Were Brothers?");
							//Jordan and Johnathan Knight
							break;
						case 12:
							API.sendChat("What big 90's female movie star starred in Bon Jovi's Always video?");
							//Keri Russell - aka "Felicity"
							break;
						case 13:
							API.sendChat("What is Taylor Hanson's full name?");
							//Jordan Taylor Hanson
							break;
						case 14:
							API.sendChat("Who Sang A Whole New World?");
							//Peabo Bryson And Regina Belle
							break;
						case 15:
							API.sendChat("Who were the only original cast members left on 90210 when the series ended?");
							//Dylan McKay, Kelly Taylor, David Silver, Donna Martin and Steve Sanders
							break;
						case 16:
							API.sendChat("Which member of what rap band burned her football player boyfriend's house down?");
							//Lisa "Lefteye" Lopez of TLC
							break;
						case 17:
							API.sendChat("What singer hit #1 with a midget in his band, who passed away towards the end of 2000?");
							//Kid Rock, and Joe C was the midget who died. 
							break;
						case 18:
							API.sendChat("Who was the only female solo artist to have a #1 hit single wthout releasing an album?");
							//Lisa Loeb. She had a #1 hit with the song Stay. Stay landed on her debut album "Tails" in 1995
							break;
						case 19:
							API.sendChat("What famour star appeared in Paula Abdul's Rush, Rush video?");
							//Keanu Reeves
							break;
						case 20:
							API.sendChat("What was Blur's first number one single in the UK?");
							//Country House.
							break;
						case 21:
							API.sendChat("This Real McCoy sampled music from Bronski Beat's Smalltown Boy - Which one was it?");
							//Automatic Lover (Call For Love)
							break;
						case 22:
							API.sendChat("Which group's debut album (named after a London suburb) had a Pet Shop Boys song cover?");
							//East 17, the song was West End Girls, the year was 1993 (The BEST!), the album was Walthamstow
							break;
						case 23:
							API.sendChat("Which 1993 video began with a girl holding up a placard that said, Once Upon A Time?");
							//"Two Princes", the Spin Doctors classic.
							break;
						case 24:
							API.sendChat("Connect Lulu and Dan Hartman to a 1990s group?");
							//Take That! Lulu featured on the Take That cover of Dan Hartman's "Relight My Fire".
							break;
						case 25:
							API.sendChat("Fastest selling debut record, best selling single of UK charts in 1996?");
							//Babylon Zoo's "Spaceman", originally appeared in a Levi Jeans ad.
							break;
						case 26:
							API.sendChat("Which Steven Kapoor song was included in the soundtrack for Dumb and Dumber?");
							//Boom-Shak-A-Lak. Steven Kapoor's alias was Apache Indian.
							break;
					}
				}
			}
		};

        // Load the chat package again to account for any changes
        bot.loadChat();

	}

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("domoArigatoMrRobotosettings", JSON.stringify({
		botName: "domoArigatoMrRoboto",
		language: "english",
		chatLink: "https://rawgit.com/klthao/custom/master/lang/en.json",
		scriptLink: "https://rawgit.com/klthao/source/master/domoArigatoMrRoboto.js",
		roomLock: false, // Requires an extension to re-load the script
		startupCap: 1, // 1-200
		startupVolume: 0, // 0-100
		startupEmoji: false, // true or false
		autowoot: true,
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
		commandCooldown: 0,
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
		welcome: true,
		opLink: null,
		rulesLink: null,
		themeLink: null,
		fbLink: null,
		youtubeLink: null,
		website: null,
		intervalMessages: [],
		messageInterval: 5,
		songstats: true,
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
