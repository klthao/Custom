(function () {

    var fork = "klthao";


    function extend() {
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }
		
		bot.commands.amyCommand = {
          command: 'amy',
          rank: 'user',
          type: 'exact',
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("All Hail Amy!");
            }
          }
        };

        bot.commands.baconCommand = {
          command: 'bacon',
          rank: 'user',
          type: 'exact', 
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
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("The Great Oz has spoken!");
            }
          }
        };		
		
        bot.loadChat();

      }

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
      smartSkip: true,
      cmdDeletion: true,
      maximumAfk: 120,
      afkRemoval: true,
      maximumDc: 60,
      bouncerPlus: true,
      blacklistEnabled: true,
      lockdownEnabled: false,
      lockGuard: false,
      maximumLocktime: 10,
      cycleGuard: true,
      maximumCycletime: 10,
      voteSkip: false,
      voteSkipLimit: 10,
      historySkip: false,
      timeGuard: true,
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

    $.getScript("https://rawgit.com/klthao/source/master/domoArigatoMrRoboto.js", extend);

}).call(this);
