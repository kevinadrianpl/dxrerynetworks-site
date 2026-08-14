import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticleSeed {
  slug: string;
  title: string;
  category: string;
  icon: string;
  lastUpdated: string;
  focus: string;
  steps: string[];
  commands: Array<{ command: string; description: string }>;
  proTip: string;
  content?: string;
}

const categoryScreenshots: Record<string, string> = {
  "Getting Started": "/wiki/screenshots/getting-started.svg",
  "Gameplay": "/wiki/screenshots/gameplay.svg",
  "Economy": "/wiki/screenshots/economy.svg",
  "Commands": "/wiki/screenshots/commands.svg",
  "Worlds & Regions": "/wiki/screenshots/worlds.svg",
  "Ranks & Perks": "/wiki/screenshots/ranks.svg",
};

const articleSeeds: ArticleSeed[] = [
  {
    slug: "towny-faq",
    title: "Towny FAQ",
    category: "Getting Started",
    icon: "❓",
    lastUpdated: "2026-08-13",
    focus: "A quick FAQ covering the Towny questions most often asked by new players, citizens, mayors, and assistants.",
    steps: [],
    commands: [],
    proTip: "If you're ever stuck, start with /town, /res, and /plot to inspect the system around you.",
    content: `
# Towny FAQ
This is a quick FAQ that will address most of the questions seen from new players, citizens and mayors in chat on a daily basis.

## Newbie Questions
Q: How do I join a town?

- A: Ask in chat if there are any towns accepting residents. They will invite you, at which point you need to type \`/accept\`.

Q: How do I get to my town?

- A: \`/t spawn\`

Q: How do I get a plot?

- A: Most towns will have a few plots up for sale. Ask your mayor where they are, or do some exploring. Plots will generally be free depending on the mayor. Once you have the money for a plot, walk on top of it and type \`/plot claim\`.

Q: How do I visit another town?

- A: \`/t spawn [townname]\`. This may charge you \`B10\`.

Q: How do I check how much money I have?

- A: \`/balance\`, or \`/bal\`. This will list your beasties or \`B\` which is the in-game currency we use.

## Citizen Questions
Q: How do I find out who's in my town?

- A: \`/town\` or just \`/t\`. This will show you a list of town residents as well as some other useful town information like how much money is in the town bank and what your taxes are.

Q: How do I find out who's online in my town?

- A: \`/t online\`. This will list all online players in your town.

Q: How do I donate to my town?

- A: \`/t deposit [amount]\`. You should do this whenever you have spare money as it helps your town purchase new land and prevent the town from falling into ruin.

Q: How do I add friends?

- A: \`/res friend add [playername]\`. This will add them as your friend and allow them to interact with plots that have permissions set up for friends.

Q: How do I find out what town someone is in, who they're friends with, how much money they have, etc?

- A: Do \`/res [playername]\` to bring up their resident page, which will display the relevant information.

Q: How do I let other people interact with my plot?

- A: Below are the setting permissions for each aspect:

> \`/plot set perm [on/off]\`

> \`/plot set perm [friend/ally/resident/outsider] [on/off]\`

> \`/plot set perm [build/destroy/itemuse/switch] [on/off]\`

> \`/plot set perm [friend/ally/resident/outsider] [build/destroy/itemuse/switch] [on/off]\`

The first command toggles either everyone can do everything on your plot, or no one can do anything on your plot except for you. In normal circumstances you want \`/plot set perm off\`.

The second command toggles whether a group of players can do anything or nothing on your plot. The groups are friends, allies, residents and outsiders. For example, if you type \`/plot set perm resident on\`, residents of your town would be able to do anything on your plot.

The third command toggles a specific type of interaction with your plot by anyone or by no one. For example, you can specify that anyone can open doors and flip levers on your plot by using \`/plot set perm switch on\`.

The fourth command combines the second and third options. For example, you can allow only your friends to build on your plot by typing \`/plot set perm friend build on\`.

## Mayor/Assistant Questions
Q: How do I make a town?

- A: Find a place in the towns world that isn't too close to other towns, then type \`/town new [townname]\`. Note that this costs \`B1000\` and you are recommended to have at least \`B2500\` before starting a town.

Q: How do I add people to my town?

- A: \`/t add [playername]\`. They will be asked to either accept or deny this invitation. You can also do \`/t toggle open\` to allow players to join without an invitation. They must simply type \`/t join [townname]\`.

Q: My friends aren't able to build anywhere like I can?

- A: \`/t rank add [playername] assistant\`. This will make them an assistant to the mayor of the town, allowing them to build and break anything in the town except chests.

Q: How do I set taxes?

- A: \`/t set taxes amount\`. This amount is charged automatically from each resident every 24 hours and goes directly into the town bank.

Q: How do I claim new land for my town?

- A: Use \`/t claim\` while standing on a wilderness chunk adjacent to a town chunk. This costs \`B10\`.

Q: How do I set my town's spawn?

- A: First, make sure you are on your town's homeblock. If you want your spawn to be on another plot then go to that plot and type \`/t set homeblock\`. Then type \`/t set spawn\` in the location on the homeblock where you want players to spawn.
    `,
  },
  {
    slug: "welcome-guide",
    title: "Welcome Guide",
    category: "Getting Started",
    icon: "🛰️",
    lastUpdated: "2026-08-11",
    focus: "Welcome to Dxrery Networks. This guide gives you the quickest route from first join to fully settled player.",
    steps: [
      "Add `play.dxrery.top` to your multiplayer server list and connect.",
      "Read the rules in-game or on the Rules page before building.",
      "Pick a direction: town-building, economy progress, or exploration.",
      "Join Discord to stay updated on events, fixes, and server news.",
    ],
    commands: [
      { command: "/spawn", description: "Return to main spawn and server hub." },
      { command: "/help", description: "Open the command help menu." },
      { command: "/wiki", description: "Access in-game wiki references quickly." },
    ],
    proTip: "Start with land protection before collecting valuables so your progress is safe from day one.",
  },
  {
    slug: "first-steps",
    title: "First Steps",
    category: "Getting Started",
    icon: "🧭",
    lastUpdated: "2026-08-11",
    focus: "Use this checklist to set up your first base, lock your claim, and start earning income in your first session.",
    steps: [
      "Travel a short distance from spawn to find open building space.",
      "Claim your land immediately to protect builds and storage.",
      "Set a home point so you can return instantly.",
      "Grab a starter income path through jobs and basic trading.",
    ],
    commands: [
      { command: "/home set", description: "Save your current location as home." },
      { command: "/home", description: "Teleport back to your saved home." },
      { command: "/jobs browse", description: "View all available jobs and rewards." },
    ],
    proTip: "Build your starter storage and farms inside your claim before expanding outward.",
  },
  {
    slug: "basic-commands",
    title: "Basic Commands",
    category: "Getting Started",
    icon: "✨",
    lastUpdated: "2026-08-11",
    focus: "These are the core commands every player should know for travel, communication, and early progression.",
    steps: [
      "Use navigation commands to avoid getting stuck far from base.",
      "Learn economy commands so you can track and transfer money safely.",
      "Set homes and trust controls before inviting friends to build.",
      "Use private messaging to coordinate trades and town projects.",
    ],
    commands: [
      { command: "/tpa <player>", description: "Request teleport to another player." },
      { command: "/bal", description: "View your current balance." },
      { command: "/trust <player>", description: "Grant build access in your claim." },
    ],
    proTip: "Memorizing 6-8 core commands makes every other system much easier to learn.",
  },
  {
    slug: "combat-system",
    title: "Combat System",
    category: "Gameplay",
    icon: "⚔️",
    lastUpdated: "2026-08-11",
    focus: "Dxrery combat rewards timing, positioning, and preparation more than pure gear score.",
    steps: [
      "Carry a balanced loadout: weapon, healing, utility, and mobility.",
      "Practice spacing and cooldown timing before entering PvP zones.",
      "Use terrain and line-of-sight to control engagements.",
      "Review fights and tweak armor enchants to counter common builds.",
    ],
    commands: [
      { command: "/duel <player>", description: "Start a friendly duel with configured rules." },
      { command: "/kit", description: "Open available class/loadout kits." },
      { command: "/stats", description: "Check combat performance metrics." },
    ],
    proTip: "Most close fights are decided by movement and healing timing, not first hit advantage.",
  },
  {
    slug: "skills-and-leveling",
    title: "Skills & Leveling",
    category: "Gameplay",
    icon: "📈",
    lastUpdated: "2026-08-11",
    focus: "Leveling is designed for long-term play with steady gains from normal gameplay loops.",
    steps: [
      "Choose two primary skill paths to focus progression speed.",
      "Rotate daily activities to collect diversified XP bonuses.",
      "Use milestones to unlock utility perks and passive bonuses.",
      "Track progression weekly and adjust your routine for consistency.",
    ],
    commands: [
      { command: "/skills", description: "View your skill tree and level progress." },
      { command: "/skills top", description: "See server skill leaderboards." },
      { command: "/skills perks", description: "Review unlocked bonuses." },
    ],
    proTip: "Steady daily progress usually beats long grind sessions for rank advancement.",
  },
  {
    slug: "enchanting-guide",
    title: "Enchanting Guide",
    category: "Gameplay",
    icon: "🪄",
    lastUpdated: "2026-08-11",
    focus: "Build reliable armor and tool sets with smart enchanting paths instead of expensive rerolls.",
    steps: [
      "Start with utility enchants on pickaxe, sword, and chestplate.",
      "Combine books in planned order to minimize anvil cost.",
      "Create backup tools before crafting endgame sets.",
      "Balance offense, defense, and mobility for your preferred mode.",
    ],
    commands: [
      { command: "/enchant", description: "Open custom enchant browser." },
      { command: "/ce info", description: "View enchant details and compatibility." },
      { command: "/repair", description: "Repair held item if rank permits." },
    ],
    proTip: "Plan your final gear tree first, then enchant toward it in stages.",
  },
  {
    slug: "player-warps-guide",
    title: "Player Warps Guide",
    category: "Gameplay",
    icon: "🗺️",
    lastUpdated: "2026-08-13",
    focus: "Learn how to create, use, and customize Player Warps so players can find your shop and points of interest quickly.",
    steps: [],
    commands: [],
    proTip: "Keep names short, clean, and memorable so players can teleport quickly without opening the GUI.",
    content: `
## What are PlayerWarps?
Player Warps are a feature on the server that allows you to create your own warps to shops or special locations that any player can warp to.

## Creating a Player Warp
Creating a player warp is simple. Stand in the desired location for your warp while looking in the direction you want others players to face. Take note, warps can only be set in the Towny world since all other worlds get reset eventually.

Once in the right spot, run the command \`/pwarp set [name]\` where \`[name]\` is replaced by one-word without spaces. This name must be unique, must be less than 30 characters, must be only A-Z characters, and must not be a vulgar name. Do know that the capitalization will matter as that's what gets displayed in the warps listing menu. After you've chosen your name, a message will appear in chat asking you to confirm the creation.

Please notice that creating a warp does cost money, so make sure you've got enough. Once everything is confirmed, the warp is now created and players can warp to it.

## Using Player Warps
There are two ways you can go to other player's warps. The first and easy way is to use the warp listing menu with the command \`/pwarp\`.

This will open a GUI of all the warps available. The other way is to know the name of the warp and use the command \`/pwarp [name]\` where \`[name]\` is replaced by the one-word name for the warp (ex: \`/pwarp endfarm\`).

Either of these two methods will then begin a teleport warmup, which after a second will bring you to the warp destination.

Once you've warped to the warp, consider giving that warp a positive rating in the GUI.

## Customizing a Player Warp
Once you've created your warp, you can now customize it. Currently, there are two customization options: a description and an icon. The description will appear when hovering over your warp inside the warp listing menu.

Do this by running the command \`/pwarp desc [name] [desc]\` where \`[name]\` is replaced by the one-word name for your warp and \`[desc]\` is a multi-worded description of up to 150 characters. The description cannot contain any & characters as those signify color.

The other customizable option are icons. Icons are what your warp will appear as inside the warp listing menu. By default, a warp will look like your player's head.

Do this by running the command \`/pwarp icon [name]\` where \`[name]\` is replaced by the one-word name for your warp. A GUI will then appear where you can select an icon for your warp.
    `,
  },
  {
    slug: "currency-and-shops",
    title: "Currency & Shops",
    category: "Economy",
    icon: "💵",
    lastUpdated: "2026-08-11",
    focus: "The economy rewards consistent participation through jobs, trade routes, and player-driven markets.",
    steps: [
      "Create one stable income stream from jobs or farming.",
      "Use server shop for essentials and save rare goods for player trades.",
      "Track pricing trends before bulk-selling resources.",
      "Reinvest profits into automation and town infrastructure.",
    ],
    commands: [
      { command: "/shop", description: "Open server shop interface." },
      { command: "/pay <player> <amount>", description: "Transfer money securely." },
      { command: "/bal top", description: "View wealth leaderboard." },
    ],
    proTip: "Profit comes from reliability: consistent stock beats occasional large sales.",
  },
  {
    slug: "trading-guide",
    title: "Trading Guide",
    category: "Economy",
    icon: "🤝",
    lastUpdated: "2026-08-11",
    focus: "Successful traders focus on trust, clear pricing, and dependable stock turnover.",
    steps: [
      "Choose a niche product group and keep it stocked.",
      "Publish prices clearly in chest shops and Discord channels.",
      "Offer bulk discounts to towns and returning buyers.",
      "Track item flow weekly to refine your margins.",
    ],
    commands: [
      { command: "/ah", description: "Open auction house listings." },
      { command: "/trade <player>", description: "Start secure direct trade." },
      { command: "/mail send", description: "Arrange trades with offline players." },
    ],
    proTip: "Transparent prices and fast service usually outperform aggressive undercutting.",
  },
  {
    slug: "auction-house",
    title: "Auction House",
    category: "Economy",
    icon: "🏛️",
    lastUpdated: "2026-08-11",
    focus: "Use the auction house to move high-value items quickly and discover current market demand.",
    steps: [
      "List high-demand items during peak server hours.",
      "Compare existing listings before setting your price.",
      "Use short cycles for volatile items and longer cycles for rares.",
      "Repost unsold stock with adjusted pricing strategy.",
    ],
    commands: [
      { command: "/ah sell <price>", description: "List held item on auction." },
      { command: "/ah browse", description: "Browse active listings." },
      { command: "/ah expired", description: "Collect unsold or expired items." },
    ],
    proTip: "A slightly lower price at high activity times often sells faster than premium listings.",
  },
  {
    slug: "lwc-guide",
    title: "LWC Guide",
    category: "Commands",
    icon: "🔐",
    lastUpdated: "2026-08-13",
    focus: "A complete reference for using LWC to lock chests, share access, and customize protections on containers, doors, and more.",
    steps: [],
    commands: [],
    proTip: "Use persist mode carefully so you don't accidentally apply a protection command to the wrong block.",
    content: `
# What is LWC and sharing chests?
LWC is a plugin that allows users to place a lock on various blocks to prevent or control access to chests, furnaces, and various other blocks.

## Various blocks that LWC can protect besides chests and furnaces:

- Signs*
- Trapped Chests
- Iron Doors
- Wooden Doors
- Brewing Stands
- Wooden Trapdoors
- Iron Trapdoors
- Fence Gates

*Note that the block the sign is placed on will also be protected.*

## So how do you go about creating a basic LWC protection?
First and foremost, every chest you place in the world will automatically be locked using LWC. You would need to manually unlock said chest or modify who can access it. To lock a chest that was unlocked, you can use the command \`/lock\` or \`/cprivate\`. You will then have to punch the chest or furnace to lock it.

So now your chests are protected, great right? But what if you want your friend to look at all the coal you've mined? If you want to add someone to your protected chests, you can do \`/cmodify [name]\`, for example \`/cmodify DirewolF_ZA\`. After doing this, you will need to punch the chest and if done correctly that person will now be able to access your chest.

To remove someone from your chests you will need to type the same command but with a \`-\` in front of their name, for example \`/cmodify -DirewolF_ZA\`. If you want to let a group of people access your chest, you can put multiple usernames in a single \`/cmodify\` command, for example \`/cmodify DirewolF_ZA CptForest xRymeria\`. The same method applies to remove multiple people.

## Other protection types

### Public Protection
The \`/cpublic\` protection makes it so anyone can access the protection, but not remove the block. This is useful for public furnaces you want everyone to use. You simply type \`/cpublic\` and punch your protection.

### Password Protection
To make a password lock, set the lock with \`/cpassword\` followed by a password. For example, if your password is \`BlameForest\`, anyone wanting to access the chest must type \`/cunlock BlameForest\`.

There is no point in adding someone with \`/cmodify\` as they will not be exempt from entering the password. You could add someone as an admin to remove the chest or unlock it with \`/unlock\` if they forget the password, but otherwise there is no reason to add anyone to the chest.

### Donation Protection
A lesser-known type of protection is called \`/cdonation\`. You set this lock like all the others: \`/cdonation\` and a punch. A donation chest can be opened by anyone and they can look inside as well as put things in, but they cannot take anything out. This is useful for donation chests or display chests in shops.

Adding someone with \`/cmodify\` will not allow them to bypass this behavior.

## The Five Flags
There are actually six flags in LWC, although one is admin-only so we will not discuss it here. These flags are used to customize the functionality of your protected items. These flags can be set with \`/c[flag] on\` or \`/c[flag] off\`.

- \`/chopper\`: Sets whether or not a hopper can interact with your protection. Use \`/chopper on\` or \`/chopper off\`.
- \`/cautoclose\`: For doors and similar devices. Determines whether or not the protected object closes automatically. Use \`/cautoclose on\` or \`/cautoclose off\`.
- \`/credstone\`: Determines whether or not your protected object interacts with redstone. Use \`/credstone on\` or \`/credstone off\`.
- \`/cmagnet\`: Determines whether or not your protected object pulls dropped items towards it. Use \`/cmagnet on\` or \`/cmagnet off\`.
- \`/callowexplosions\`: Determines whether or not your protected object can be destroyed by explosions. It is usually a good idea to keep this off. Use \`/callowexplosions on\` or \`/callowexplosions off\`.

## A few other things that you should know
If you create any sort of protection, even \`/cpublic\`, on an iron door or trapdoor, you can right-click to open it as if it were wood.

- Need to set a password lock on many chests? Want to save time? Try \`/lwc mode persist on\` and type in a command. You can then punch all of the things you want to affect with that command without having to type it again. Make sure you use \`/lwc mode persist off\` afterward unless you want to spam your chat.
- Are your chests just a little too far away sometimes? Want to send items home without going home? Try \`/lwc mode droptransfer select\` on a protection, ideally a chest, then do \`/lwc mode droptransfer on\`. Now when you drop items, they will go into that chest instead of falling on the ground. Make sure to use \`/lwc mode droptransfer off\` when you're done so you do not transfer items when you actually mean to drop them.
    `,
  },
  {
    slug: "player-commands",
    title: "Player Commands",
    category: "Commands",
    icon: "🧱",
    lastUpdated: "2026-08-11",
    focus: "This reference covers day-to-day commands for movement, homes, communication, and utility actions.",
    steps: [
      "Group your most-used commands by movement, economy, and social.",
      "Create command habits that reduce travel downtime.",
      "Use aliases where available for faster execution.",
      "Review command permissions after rank upgrades.",
    ],
    commands: [
      { command: "/back", description: "Return to your previous location." },
      { command: "/sethome <name>", description: "Create a named home waypoint." },
      { command: "/mail", description: "Access in-game mailbox and messages." },
    ],
    proTip: "A clean personal command routine saves hours over long-term play.",
  },
  {
    slug: "chat-commands",
    title: "Chat Commands",
    category: "Commands",
    icon: "💬",
    lastUpdated: "2026-08-11",
    focus: "Chat commands help you coordinate with friends, towns, and staff without cluttering global chat.",
    steps: [
      "Use private messages for trade and build coordination.",
      "Switch channels when discussing town or team plans.",
      "Use mentions responsibly to keep channels readable.",
      "Report abusive chat quickly with evidence.",
    ],
    commands: [
      { command: "/msg <player>", description: "Send a private message." },
      { command: "/r <message>", description: "Reply to your last private message." },
      { command: "/ignore <player>", description: "Mute messages from a player." },
    ],
    proTip: "Clear, concise chat makes it easier for others to help you quickly.",
  },
  {
    slug: "teleportation",
    title: "Teleportation",
    category: "Commands",
    icon: "🌀",
    lastUpdated: "2026-08-11",
    focus: "Teleport systems are central to safe travel, team play, and efficient resource routes.",
    steps: [
      "Save homes at major bases, farms, and public trade hubs.",
      "Use player teleport requests for group events.",
      "Keep one emergency home set for recovery situations.",
      "Respect cooldowns and combat restrictions on teleports.",
    ],
    commands: [
      { command: "/tpa <player>", description: "Request teleport to player." },
      { command: "/tpaccept", description: "Accept incoming teleport request." },
      { command: "/warp", description: "Open public warp list." },
    ],
    proTip: "A well-organized home/warp setup makes large projects dramatically faster.",
  },
  {
    slug: "towny-guide",
    title: "Towny Guide",
    category: "Worlds & Regions",
    icon: "🏘️",
    lastUpdated: "2026-08-13",
    focus: "A complete overview of how Towny works on Dxrery Networks, from founding a town to plot types, outposts, and protection settings.",
    steps: [],
    commands: [],
    proTip: "Found your town only when you are ready to pay upkeep and expand with purpose.",
    content: `
Hi, this guide is to help with understanding the basics: Towny is a plugin that allows players to create and join towns, and claim land within those towns. Each town has a mayor who is responsible for managing the town and its members.

## Starting a Town
Players can start towns using the command \`/town new townname\`. The townblock they are standing in will be the home block for the town, the exact spot/position will be the spawn point for the town every time you type \`/t spawn\`. You can view other towns by typing \`/t spawn townname\`. More townblocks can be claimed using \`/town claim\`. These townblocks need to be directly adjacent to an already claimed townblock.

It costs \`B1000\` to start a town, and the daily upkeep/tax costs \`B10\` per day and will remain that way no matter how big your town gets. If you wish to buy more plot claims you can use \`/t buy bonus amount\` and there is a \`500\` plot limit on that. They cost \`B100\` each. Every townblock that you claim will cost \`B15\` every time you use \`/t claim\`. Same rules apply to outposts.

## Joining Towns
There are two ways to join towns, the first is by being invited by a Mayor or a Town assistant. The second is by joining an open town. Mayors and assistants can add players to their town with the command \`/town add playername\`, then the player will receive a prompt to either \`/accept\` or \`/deny\` the invitation.

Mayors can set their towns to open using \`/town toggle open\`. A player who isn't in a town already can use the command \`/town join townname\` to join open towns. When residents join towns they increase the number of townblocks accessible to the mayor for claiming. A new town starts out with \`8\` \`/t claims\` but gains \`8\` more for every person that joins.

## Plot System of Land Ownership

### Town Blocks
Block protection is broken down into plots of land, called townblocks, which by default are \`16x16x256\` (the full height of the world.) Townblocks are claimed by town mayors who can then sell or give individual plots to their town's residents.

## Plot Type

### Default Plots
These plots do not need any specific command to be designated. They are put up for sale with \`/plot forsale price\`. A plot which is not of default type can be reset to a default plot with \`/plot set reset\`.

### Shop Plots
Shop plots are designated with \`/plot set shop\`. A mayor can use \`/town set shopprice price\` to set how much shop plots are sold at by default. This can be overridden when a mayor puts the actual plot up for sale with \`/plot forsale price\`. A mayor can also charge an additional shoptax with \`/town set shoptax price\`. This tax is charged in addition to the normal plottax.

### Arena Plots
Arena plots are designated with \`/plot set arena\`. PVP is on all the time in arena plots as well as friendly-fire damage. Town health regen is also disabled in arena plots.

### Embassy Plots
Embassy plots are designated with \`/plot set embassy\`. A mayor can use \`/town set embassyprice price\` to set how much embassy plots are sold at by default. This can be overridden when a mayor puts the actual plot up for sale with \`/plot forsale price\`. A mayor can also charge an additional embassytax with \`/town set embassytax price\`. This tax is charged in addition to the normal plottax.

An embassy plot can be bought by any player, whether they are in the town or not. The townblock remains owned by the host-town and a mayor from the host-town can take the plot from the owner at any time. Embassy plots can also be changed into shop plots, allowing for larger shop towns, where many different towns' players can set up shops. When a player leaves a town they do not lose ownership of their plots if those plots are set to be Embassy plots.

### Wilds Plots
Wilds plots are designated with \`/plot set wilds\`. A wilds plot allows residents to destroy the blocks found on the wild ignore ID list. This includes ores, trees, flowers, mushrooms and other harvestable blocks by default. It does not include stone, dirt, grass and other terrain blocks. It is useful for creating tree farms, and protecting the terrain around a town, while still allowing residents to cut trees and explore caves. You can also set ally or outsider permissions if you want non-town-members to use the Wilds plots.

### Inn Plots
Inn plots are designated with \`/plot set inn\`. An Inn plot allows anyone to use a bed to set their \`/res spawn\` and spawn on death. The Inn plot will still deny a player who is in a nation declared as an enemy by your nation.

### Jail Plots
Jail plots are designated with \`/plot set jail\`. The player's mayor or sheriffs send them to jail. An attacker who attacks a town which considers him an Enemy (nation relationship) dies in that Town. He is sent to the first available Jail plot of the defending town.

Jailed players become unjailed if they leave their town and become a nomad, the mayor/sheriff unjails them, the player pays a bail amount to the town which jailed them using \`/resident jail paybail\`, or they manage to escape the jail plot and the town and get into Wilderness. Jailed players cannot teleport. Jailed players cannot use Ender Pearls. Jailed players who die are sent back to their prescribed jail plot. Jailed players do not give monetary payouts when they are killed. Jailed players show their jailed status in the \`/res playername\` screen, along with the town they are jailed in.

### Farm Plots
Farm plots are designated with \`/plot set farm\`. A Farm plot allows players to build or destroy only the following blocks: \`LONG_GRASS, DOUBLE_PLANT, YELLOW_FLOWER, RED_ROSE, PUMPKIN_STEM, MELON_STEM, BEETROOT_BLOCK, CARROT, POTATO, CROPS, MELON_BLOCK, PUMPKIN\`.

Who can build or destroy these blocks is still determined by the plot's perm line seen in the \`/plot perm\` screen. This means that if \`B=rao\`, anyone can plant or place the allowed blocks in the plot. If the line is \`B=r--\` then only town residents can plant or place the allowed blocks. Towny already protects soil from being stomped into grass, so soil will only return to dirt if it is not irrigated. Farm plots also allow town residents to kill animals in the plot. The list of animals is \`PIG, COW, CHICKEN, SHEEP, MOOSHROOM\`.

## Outposts
Normally townblocks are claimed around the home block, always connected to the town. To claim a townblock out in the wilderness or anywhere far away from your town, a mayor or assistant must claim an outpost with \`/t claim outpost\`. The outpost list can be viewed by using the \`/town outpost list\` command.

Outposts can be teleported to, and mayors set the spawn point of the outpost when they claim it or by using \`/town set outpost\`. Players teleport to the outpost using \`/town outpost x\` with \`x\` being a number from 1 up to however many outposts the town has.

## Selling Land
Land is sold by Mayors to Residents that are a part of their town. Mayors have a command used in-game to set the cost of all the plots that are set for sale going forward: \`/town set plotprice price\`. This sets the cost of newly-set-for-sale plots. Already set-for-sale plots keep their existing costs. If it is not set, the plots will cost \`B0\` by default.

To put a plot up for sale a mayor, while standing in the plot, types \`/plot forsale price\`. The resident then types \`/plot claim\` while standing in the plot to buy it.

## Using the Maps
The map in Towny displays the grid system of plots. The map can be viewed once using \`/towny map\` one time, or you can set the map to show every time you move from one block to another. Use \`/resident set mode map\` to turn it on and use \`/resident set mode reset\` to turn it off. A large version of the map can be seen using \`/towny map big\`.

## Protect Your Blocks
Towny lets players protect themselves. An admin does not need to go around protecting land for players, and players cannot run rampant claiming massive amounts of land without working for it and building their towns. The first concepts you need to digest are the 4 perm-types and 3 groups.

There are 4 permission-type values, which can be set for personal plots and for town plots as well. Town permissions can be set by the mayor and affect plots which are not owned by any player. The basic command for this is either \`/resident set perm\` or \`/town set perm\` followed by the proper flags for each permission.

Plots start with the default settings for plot perms, whether they are resident-owned or town-owned, but the owner of the plots can set different perms for different plots. To view a plot's perm type use \`/plot perm\` and to set a plot's perms use \`/plot set perm\`. Default permissions are viewable by typing either \`/resident\` for personal plot perms or \`/town\` for town permissions.

### Perm-Types
The 4 permission-types available are Build, Destroy, Switch and Itemuse. Build allows players to place blocks in your town or plot. Destroy allows players to remove blocks in your town or plot.

### Perm-Groups
Each permission-type has 3 perm-groups to which the permission can be set. These are displayed on your \`/resident perm\` line as \`FAO\` and stand for Friend, Ally, Outsider. For residents, the Friend group consists of a player's friend list. For towns the perm line reads \`RAO\`, with \`R\` representing Residents. Mayors need to use \`/t set perm resident ...\` instead of \`/t set perm friend ...\`.

### The Other Groups Are:

#### Ally
- Players from your town, other towns in your nation, and nations your nation is allied with.

#### Outsiders
- Players who are not part of your town or nation or nation's allies.

### Setting Perms In-Game With Commands
Setting perms for your town's public land or your personal plots is easy. There are two distinct levels of protection provided by towns. First are the town blocks, protected because they are part of a town and not owned by anyone. When you enter one of these plots from the wilderness or an owned plot the notification will show \`~ Unowned\`.

#### Mayors are able to set the permission for unowned plots using the \`/town set perm\` command. Here are some examples:
- \`/town set perm on/off\` — Turns on or off all permissions for all perm-types and all perm-groups.
- \`/town set perm ally on/off\` — Turns on or off all perm-types for the town's allies.
- \`/town set perm resident build on/off\` — Turns on or off build permissions for town residents.

#### Second, are the town blocks owned personally by a resident of a town. A resident is able to set the permission for owned plots using the \`/resident set perm\` command. Here are some examples:
- \`/resident set perm on/off\` — Turns on or off all permissions for all perm-types and all perm-groups.
- \`/resident set perm friend on/off\` — Turns on or off all permissions for the resident's friend list.
- \`/resident set perm ally on/off\` — Turns on or off all perm-types for the resident's ally list.
- \`/resident set perm outsider switch on/off\` — Turns on or off switch permissions for outsiders.

#### Lastly, don't forget those are just the defaults for plots. Any owned plot can be set with its own individual perms:
- \`/plot set perm on/off\` — Turns on or off all permissions for all perm-types and all perm-groups on the plot you are standing in.
- \`/plot set perm friend on/off\` — Turns on or off all permissions for the resident's friend list on the plot you are standing in.
- \`/plot set perm ally on/off\` — Turns on or off all perm-types to the resident's ally list for that plot.
- \`/plot set perm outsider switch on/off\` — Turns on or off switch permissions for outsiders on the plot you are standing in.

#### Mayors can change the protection of their town with the following commands:
- \`/town toggle explosion\`
- \`/town toggle fire\`
- \`/town toggle pvp\`
- \`/town toggle mobs\`

#### Mayors and residents can change each of their plots individually using these commands:
- \`/plot toggle explosion\`
- \`/plot toggle fire\`
- \`/plot toggle pvp\`
- \`/plot toggle mobs\`

#### Per-plot toggles are overridden by a mayor's town toggles.
The preceding commands by themselves will change the perm line seen from \`/town\` or \`/res\`. They will also change any plots that were using the previously-set default perm line, whether town-owned or player-owned plots. They will not change plots which were not set to the default perm line seen in \`/town\` or \`/res\`.

In order to change all plots a mayor or resident must use the following command, which will propagate the current perm line seen in \`/town\` or \`/res\` to all plots owned by the town or resident:
- \`/res set perm reset\` — Propagates the perm line in \`/res\` to all plots owned by that resident.
- \`/town set perm reset\` — Propagates the perm line in \`/town\` to all town-owned plots owned by that town.

These commands also affect the \`/town toggle\` and \`/plot toggle\` settings.

## Protection Additions Found in Towny Advanced
New in Towny Advanced are three additional protection types: anti-explosion, anti-firespread and piston-protection.

On the town level, a mayor can set these flags using:
- \`/town toggle explosion\`
- \`/town toggle fire\`

Explosion protection stops all explosions. This stops TNT, TNT cannons and creeper explosions. Firespread protection stops all fires from spreading, including lava, lightning, and lighters. Piston-protection allows pistons to operate between similarly owned townblocks or wild areas.
    `,
  },
  {
    slug: "world-overview",
    title: "World Overview",
    category: "Worlds & Regions",
    icon: "🌍",
    lastUpdated: "2026-08-11",
    focus: "The server uses connected worlds for survival, progression, events, and community building.",
    steps: [
      "Start in the main survival world and establish your base.",
      "Use portals and warps to reach utility and event zones.",
      "Learn region rules before building in shared spaces.",
      "Bookmark world map locations for roads and landmarks.",
    ],
    commands: [
      { command: "/world", description: "View available worlds and travel options." },
      { command: "/spawn", description: "Return to central hub." },
      { command: "/map", description: "Open map link for live world view." },
    ],
    proTip: "Use map markers and waypoints to plan town expansion before placing builds.",
  },
  {
    slug: "nation-guide",
    title: "Nation Guide",
    category: "Worlds & Regions",
    icon: "🏛️",
    lastUpdated: "2026-08-13",
    focus: "Learn when to join or found a nation, what bonuses it gives, and what risks come with entering the nation and war ecosystem.",
    steps: [],
    commands: [],
    proTip: "A nation is strongest when its towns coordinate teleport access, expansion, and war readiness ahead of time.",
    content: `
# Nation Guide
Have you made a town and ran out of claimable chunks? Do you want to go to war? The answer to both of these would be to either join or make a nation.

If you're stuck as to how to do this, we've provided the information below.

## Benefits
Initially, when you start your town, you will only have 8 available chunks to claim. You receive 8 chunks for every player who is a resident in your town. You can buy more claimable chunks using \`/t bonus buy [amount]\`, with a limit of \`500\` at a cost of \`B100\` per chunk. This can be very expensive early on. Joining a nation can increase the number of chunks you can claim by providing a bonus of \`100\` chunks depending on how many people are in the nation.

You will also be able to teleport to all towns in the nation. You can view your nation's towns by doing \`/nation\`.

If you join a large enough nation, you can very easily have dozens of teleports all over the map. It usually costs \`B10\` to teleport, which is not much at all.

## Drawbacks
Joining a nation has its own drawbacks. By accepting an invitation or making your own nation, your town will be in danger of being targeted by the server's war system one day, not necessarily yet. Additionally, anyone else in the nation you've joined will be able to teleport to your homeblock, so make sure your permissions are air-tight.

## Joining a Nation
Joining a nation is fairly simple. There are many nations already established on the server, and all you have to do is ask either their leader or one of their assistants for a nation invite. As with joining a town, do \`/accept\` to become part of your chosen nation once the invite is received.

## Making a Nation
If you have made a town, you will understand how to make a nation relatively easily. To form your nation, do \`/nation new [name]\`. Making a nation requires there to be \`B50,000\` in your town bank and costs \`B50\` a day in real time for upkeep.

Once you have everything set up, you'll want to start inviting towns. However, don't invite them without talking to the mayor or assistants first. Once they've agreed to join your nation, simply do the command \`/nation add [townname]\` to bring them into the fold. Depending on their town population, this may bring a nation chunk increase from the base \`10\`. Good luck.
    `,
  },
  {
    slug: "warps-and-portals",
    title: "Warps & Portals",
    category: "Worlds & Regions",
    icon: "🧭",
    lastUpdated: "2026-08-11",
    focus: "Warps and portals are your transport backbone for trade, community events, and world navigation.",
    steps: [
      "Learn the official warp network from spawn hubs.",
      "Use portals to connect strategic project locations.",
      "Keep a town warp updated for visitors and traders.",
      "Publish your transport links for allies and members.",
    ],
    commands: [
      { command: "/warp <name>", description: "Travel to a public warp." },
      { command: "/setwarp <name>", description: "Create warp if permission allows." },
      { command: "/delwarp <name>", description: "Remove a custom warp." },
    ],
    proTip: "A well-placed warp often matters more than a larger base location.",
  },
  {
    slug: "rank-overview",
    title: "Rank Overview",
    category: "Ranks & Perks",
    icon: "🎖️",
    lastUpdated: "2026-08-11",
    focus: "Ranks provide quality-of-life perks, cosmetics, and progression bonuses without pay-to-win advantage.",
    steps: [
      "Review each rank tier and map perks to your playstyle.",
      "Prioritize perks that save time in your daily loop.",
      "Compare utility value over visual-only rewards.",
      "Track limited seasonal rank bonuses when active.",
    ],
    commands: [
      { command: "/ranks", description: "Open rank information menu." },
      { command: "/perks", description: "List current unlocked rank perks." },
      { command: "/store", description: "Open rank store links and info." },
    ],
    proTip: "The best rank value usually comes from perks you use every single session.",
  },
  {
    slug: "perk-details",
    title: "Perk Details",
    category: "Ranks & Perks",
    icon: "🧩",
    lastUpdated: "2026-08-11",
    focus: "Perk detail pages explain practical use cases so you can evaluate true impact before upgrading.",
    steps: [
      "Check cooldowns and limits for each utility command.",
      "Separate cosmetic perks from workflow perks.",
      "Plan perk combinations for build, combat, or economy focus.",
      "Review perk updates after patch notes.",
    ],
    commands: [
      { command: "/perk info <name>", description: "Show full perk details." },
      { command: "/cooldowns", description: "View active perk cooldown timers." },
      { command: "/profile", description: "See your active rank/perk profile." },
    ],
    proTip: "Small convenience perks compound over time and can be your biggest progression boost.",
  },
  {
    slug: "rank-comparison",
    title: "Rank Comparison",
    category: "Ranks & Perks",
    icon: "📊",
    lastUpdated: "2026-08-11",
    focus: "Use this comparison framework to choose the rank that best fits your goals and budget.",
    steps: [
      "List your top 3 gameplay pain points first.",
      "Compare which rank perks directly solve those issues.",
      "Estimate usage frequency for each highlighted perk.",
      "Choose the rank with highest practical impact per tier.",
    ],
    commands: [
      { command: "/ranks compare", description: "Open side-by-side rank breakdown." },
      { command: "/store", description: "View current tier pricing and offers." },
      { command: "/support", description: "Ask staff for rank clarification." },
    ],
    proTip: "Pick based on daily utility, not just perk quantity on paper.",
  },
];

function buildArticleMarkdown(seed: ArticleSeed) {
  if (seed.content) {
    return seed.content;
  }

  const steps = seed.steps.map((step, index) => `${index + 1}. ${step}`).join("\n");
  const commandRows = seed.commands
    .map((row) => `| \`${row.command}\` | ${row.description} |`)
    .join("\n");

  return `
## Overview
${seed.focus}

## Quick Steps
${steps}

## Useful Commands
| Command | Description |
|---------|-------------|
${commandRows}

## Final Notes
- Take your time and learn one system at a time.
- Join Discord announcements for updates and balance changes.
- Use the wiki as your quick reference whenever you get stuck.

> **Pro Tip:** ${seed.proTip}
  `;
}

const articles: Record<string, {
  title: string;
  category: string;
  icon: string;
  lastUpdated: string;
  screenshot: string;
  screenshotAlt: string;
  content: string;
}> = Object.fromEntries(
  articleSeeds.map((seed) => [
    seed.slug,
    {
      title: seed.title,
      category: seed.category,
      icon: seed.icon,
      lastUpdated: seed.lastUpdated,
      screenshot: categoryScreenshots[seed.category] ?? "/wiki/screenshots/getting-started.svg",
      screenshotAlt: `${seed.title} guide preview`,
      content: buildArticleMarkdown(seed),
    },
  ])
);

// Generate static params for all known articles
export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle this synchronously for static export
  return params.then(({ slug }) => {
    const article = articles[slug];
    if (!article) return { title: "Article Not Found" };
    return {
      title: article.title,
      description: `${article.title} — ${article.category} guide for Dxrery Networks.`,
    };
  });
}

// Simple markdown-to-HTML renderer for inline content
function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];
  let listType: "ul" | "ol" = "ul";
  let inBlockquote = false;
  let blockquoteContent: string[] = [];

  const processInline = (text: string): React.ReactNode => {
    // Process inline markdown: bold, code, links
    const parts: React.ReactNode[] = [];
    let remaining = text;
    let key = 0;

    while (remaining.length > 0) {
      // Bold
      const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
      // Inline code
      const codeMatch = remaining.match(/`(.+?)`/);

      type MatchCandidate = { index: number; length: number; element: React.ReactNode };
      const candidates: MatchCandidate[] = [];

      if (boldMatch && boldMatch.index !== undefined) {
        candidates.push({
          index: boldMatch.index,
          length: boldMatch[0].length,
          element: <strong key={key++} className="text-parchment-50 font-semibold">{boldMatch[1]}</strong>,
        });
      }

      if (codeMatch && codeMatch.index !== undefined) {
        candidates.push({
          index: codeMatch.index,
          length: codeMatch[0].length,
          element: <code key={key++} className="px-1.5 py-0.5 rounded bg-charcoal-700 text-primary-400 text-sm font-mono">{codeMatch[1]}</code>,
        });
      }

      let firstMatch: MatchCandidate | null = null;
      for (const candidate of candidates) {
        if (firstMatch === null || candidate.index < firstMatch.index) {
          firstMatch = candidate;
        }
      }

      if (firstMatch) {
        if (firstMatch.index > 0) {
          parts.push(remaining.slice(0, firstMatch.index));
        }
        parts.push(firstMatch.element);
        remaining = remaining.slice(firstMatch.index + firstMatch.length);
      } else {
        parts.push(remaining);
        break;
      }
    }

    return parts;
  };

  const flushList = () => {
    if (inList && listItems.length > 0) {
      if (listType === "ol") {
        elements.push(<ol key={elements.length} className="list-decimal list-inside space-y-1.5 text-parchment-200/80 mb-6 pl-2">{listItems}</ol>);
      } else {
        elements.push(<ul key={elements.length} className="list-disc list-inside space-y-1.5 text-parchment-200/80 mb-6 pl-2">{listItems}</ul>);
      }
      listItems = [];
      inList = false;
    }
  };

  const flushBlockquote = () => {
    if (inBlockquote && blockquoteContent.length > 0) {
      elements.push(
        <blockquote key={elements.length} className="border-l-2 border-primary-400 pl-4 py-2 my-4 bg-charcoal-700/30 rounded-r-lg">
          {blockquoteContent.map((line, i) => (
            <p key={i} className="text-parchment-200/80 text-sm">{processInline(line)}</p>
          ))}
        </blockquote>
      );
      blockquoteContent = [];
      inBlockquote = false;
    }
  };

  const flushTable = () => {
    if (inTable && tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(1);
      elements.push(
        <div key={elements.length} className="overflow-x-auto mb-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-charcoal-500">
                {header.map((cell, i) => (
                  <th key={i} className="text-left py-2 px-3 text-primary-400 font-[family-name:var(--font-heading)] font-semibold text-xs uppercase tracking-wider">{cell.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, i) => (
                <tr key={i} className="border-b border-charcoal-600/30">
                  {row.map((cell, j) => (
                    <td key={j} className="py-2 px-3 text-parchment-200/70">{processInline(cell.trim())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  };

  for (const line of lines) {
    // Table rows
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      flushList();
      flushBlockquote();
      // Skip separator rows
      if (line.match(/^\|[\s-|]+\|$/)) continue;
      const cells = line.split("|").filter(Boolean);
      tableRows.push(cells);
      inTable = true;
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Blockquote
    if (line.trim().startsWith(">")) {
      flushList();
      flushTable();
      inBlockquote = true;
      blockquoteContent.push(line.trim().replace(/^>\s*/, ""));
      continue;
    } else if (inBlockquote) {
      flushBlockquote();
    }

    // Headings
    if (line.startsWith("## ")) {
      flushList();
      elements.push(<h2 key={elements.length} className="font-[family-name:var(--font-heading)] text-xl font-semibold text-parchment-50 mt-8 mb-4">{line.slice(3)}</h2>);
      continue;
    }
    if (line.startsWith("### ")) {
      flushList();
      elements.push(<h3 key={elements.length} className="font-[family-name:var(--font-heading)] text-lg font-semibold text-parchment-100 mt-6 mb-3">{line.slice(4)}</h3>);
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\.\s/)) {
      if (!inList || listType !== "ol") {
        flushList();
        inList = true;
        listType = "ol";
      }
      listItems.push(<li key={listItems.length}>{processInline(line.replace(/^\d+\.\s/, ""))}</li>);
      continue;
    }

    // Unordered list
    if (line.trim().startsWith("- ")) {
      if (!inList || listType !== "ul") {
        flushList();
        inList = true;
        listType = "ul";
      }
      listItems.push(<li key={listItems.length}>{processInline(line.trim().slice(2))}</li>);
      continue;
    } else if (inList) {
      flushList();
    }

    // Empty line
    if (line.trim() === "") {
      continue;
    }

    // Paragraph
    elements.push(<p key={elements.length} className="text-parchment-200/80 mb-4 leading-relaxed">{processInline(line)}</p>);
  }

  flushList();
  flushBlockquote();
  flushTable();

  return elements;
}

export default async function WikiArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Article Header */}
      <div className="relative pt-28 pb-8 sm:pt-32 sm:pb-12">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800/50 via-charcoal-900/80 to-charcoal-900 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-parchment-300/50 mb-6">
            <Link href="/wiki" className="hover:text-primary-400 transition-colors">
              Wiki
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-parchment-300/70">{article.category}</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-parchment-100">{article.title}</span>
          </nav>

          <span className="text-3xl mb-4 block">{article.icon}</span>
          <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-parchment-50 glow-text mb-3">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-xs text-parchment-300/50">
            <span>📚 {article.category}</span>
            <span>🕒 Last updated: {article.lastUpdated}</span>
          </div>
          <div className="ornament-divider mt-6" />
        </div>
      </div>

      {/* Article Content */}
      <section className="py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rpg-card p-6 sm:p-10">
            <div className="mb-8 overflow-hidden rounded-xl border border-charcoal-600/50 bg-charcoal-800/60">
              <img
                src={article.screenshot}
                alt={article.screenshotAlt}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <article className="prose-rpg">
              {renderMarkdown(article.content)}
            </article>
          </div>

          {/* Back to Wiki */}
          <div className="mt-8 text-center">
            <Link href="/wiki" className="rpg-btn">
              ← Back to the Archives
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
