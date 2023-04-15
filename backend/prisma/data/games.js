const games = [
  {
    id: 1,
    title: `Devil May Cry 3: Dante's Awakening`,
    description: `Devil May Cry 3: Dante's Awakening is a 2005 action-adventure game developed and published by Capcom. 
    The game is a prequel to the original Devil May Cry, featuring a younger Dante. Set a decade before the events 
    of the first Devil May Cry in an enchanted tower, Temen-ni-gru, the story centers on the dysfunctional relationship 
    between Dante and his brother Vergil. The game introduces combat mechanics with an emphasis on combos and fast-paced 
    action. The story is told primarily in cutscenes using the game's engine, with several pre-rendered full motion videos.`,
    price: 10,
    photo: `dmc_3.jpg`,
    showcase: `dmc_3.jpg`,
    releaseDate: new Date("2005-02-17"),
  },
  {
    id: 2,
    title: `Mafia II`,
    description: `Mafia II is a 2010 action-adventure game developed by 2K Czech and published by 2K Games. It was released
    in August 24 2010 for PlayStation 3, Windows, and Xbox 360. The game is a standalone sequel to 2002's Mafia, 
    and the second installment in the Mafia series. Set within the fictional city of Empire Bay from 1945 to 1951, the story 
    follows Vito Scaletta, a young Sicillian-American mobster and war veteran, who becomes caught in a power struggle among 
    the city's Mafia crime families while attempting to pay back his father's debts and secure a better lifestyle alongside 
    his best friend.`,
    price: 15,
    photo: `mafia_2.jpg`,
    releaseDate: new Date("2010-08-24"),
  },
  {
    id: 3,
    title: `Marvel's Spider-Man`,
    description: `Marvel's Spider-Man is a 2018 action-adventure game developed by Insomniac Games and published by Sony 
    Interactive Entertainment. Based on the Marvel Comics character Spider-Man, it tells an original narrative that is 
    inspired by the long-running comic book mythology, while also drawing from various adaptations in other media. 
    In the main story, the super-human crime lord Mister Negative orchestrates a plot to seize control of New York City's 
    criminal underworld. When Mister Negative threatens to release a deadly virus, Spider-Man must confront him and protect 
    the city while dealing with the personal problems of his civilian persona, Peter Parker.`,
    price: 40,
    photo: `marvel's_spider-man.jpg`,
    releaseDate: new Date("2018-08-12"),
  },
  {
    id: 4,
    title: `Resident Evil 2`,
    description: `Resident Evil 2 is a 2019 survival horror game developed and published by Capcom. A remake of the 1998 
    game Resident Evil 2, it was released for PlayStation 4, Windows, and Xbox One in January 2019 and for Amazon Luna, 
    PlayStation 5 and Xbox Series X/S in June 2022, and a Nintendo Switch cloud version released in November 2022. Players 
    control rookie police officer Leon S. Kennedy and college student Claire Redfield as they attempt to escape Raccoon City 
    during a viral outbreak that transforms the citizens into zombies and other creatures.`,
    price: 30,
    photo: `re_2.jpg`,
    releaseDate: new Date("2019-01-25"),
  },
  {
    id: 5,
    title: `Metal Gear Solid 3: Snake Eater`,
    description: `Metal Gear Solid 3: Snake Eater is a 2004 stealth game developed by Konami Computer Entertainment Japan and 
    published by Konami. It was released in late 2004 in North America and Japan, then in early 2005 in Europe and Australia, 
    originally for the PlayStation 2 and Windows. It was the fifth Metal Gear game written and directed by Hideo Kojima and serves 
    as a prequel to the entire Metal Gear series. An expanded edition, titled Metal Gear Solid 3: Subsistence, was released in 
    Japan in late 2005, then in North America, Europe and Australia in 2006. A remastered version of the game was later included 
    in the Metal Gear Solid HD Collection for the PlayStation 3, PlayStation Vita and Xbox 360, while a reworked version, titled 
    Metal Gear Solid: Snake Eater 3D, was released for the Nintendo 3DS in 2012.`,
    price: 30,
    photo: `metal_gear_solid_3.jpg`,
    releaseDate: new Date("2004-11-17"),
  },
  {
    id: 6,
    title: `S.T.A.L.K.E.R.: Shadow of Chernobyl`,
    description: `S.T.A.L.K.E.R.: Shadow of Chernobyl is a first-person shooter survival horror video game developed by GSC Game World 
    and published by THQ in 2007 following a long development. The game is set in an alternative reality, where a second disaster of 
    mysterious origin occurred at the Chernobyl Exclusion Zone, causing strange changes in the area around it. The game features 
    a non-linear storyline and includes role-playing gameplay elements such as trading and two-way communication with non-player 
    characters.`,
    price: 5,
    photo: `stalker_soc.jpg`,
    showcase: `stalker_soc.jpg`,
    releaseDate: new Date("2007-03-20"),
  },
  {
    id: 7,
    title: `Red Dead Redemption 2`,
    description: `Red Dead Redemption 2 is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third 
    entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. The story is set in a fictionalized representation 
    of the United States in 1899 and follows the exploits of outlaw Arthur Morgan, a member of the Van der Linde gang, who must deal with 
    the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The game is 
    presented through first- and third-person perspectives, and the player may freely roam in its interactive open world. Gameplay elements 
    include shootouts, robberies, hunting, horseback riding, interacting with non-player characters, and maintaining the character's honor 
    rating through moral choices and deeds. A bounty system governs the response of law enforcement and bounty hunters to crimes committed 
    by the player.`,
    price: 35,
    photo: `rdr_2.jpg`,
    showcase: `rdr_2.jpg`,
    releaseDate: new Date("2018-10-26"),
  },
  {
    id: 8,
    title: `Hitman: Blood Money`,
    description: `Hitman: Blood Money is a 2006 stealth video game developed by IO Interactive and published by Eidos Interactive. 
    It was released in May 2006 for Microsoft Windows, PlayStation 2, Xbox and Xbox 360. It is the fourth installment in the Hitman video 
    game series, and the sequel to 2004's Hitman: Contracts. The single-player story follows cloned assassin Agent 47's efforts to bring 
    down the Franchise, a rival contract killing organization that is threatening his employers, the International Contract Agency (ICA), 
    and seeking to obtain the same cloning technology that created 47. Meanwhile, a frame story presents 47's life and various contracts 
    he carried out, as narrated by a former FBI director to a journalist.`,
    price: 10,
    photo: `hitman_bm.jpg`,
    releaseDate: new Date("2006-05-26"),
  },
  {
    id: 9,
    title: `Grand Theft Auto: San Andreas`,
    description: `Grand Theft Auto: San Andreas is a 2004 action-adventure game developed by Rockstar North and published by Rockstar Games. 
    It is the fifth main entry in the Grand Theft Auto series, following 2002's Grand Theft Auto: Vice City, and the seventh installment overall. 
    It was released in October 2004 for the PlayStation 2, in June 2005 for Microsoft Windows and Xbox, and in November 2010 for Mac OS X. 
    The game is set within an open world environment that players can explore and interact with at their leisure. The story follows Carl "CJ" 
    Johnson, who returns home following his mother's murder and is drawn back into his former gang and a life of crime while clashing with corrupt 
    authorities and powerful criminals. Carl's journey takes him across the fictional U.S. state of San Andreas, which is based on California and 
    Nevada and encompasses three major cities: Los Santos (inspired by Los Angeles), San Fierro (San Francisco) and Las Venturas (Las Vegas).`,
    price: 10,
    photo: `gta_sa.jpg`,
    releaseDate: new Date("2004-10-26"),
  },
  {
    id: 10,
    title: `Grand Theft Auto: Vice City`,
    description: `Grand Theft Auto: Vice City is a 2002 action-adventure game developed by Rockstar North and published by Rockstar Games. 
    It is the fourth main entry in the Grand Theft Auto series, following 2001's Grand Theft Auto III, and the sixth instalment overall. Set in 
    1986 within the fictional Vice City (based on Miami and Miami Beach), the single-player story follows mobster Tommy Vercetti's rise to power 
    after being released from prison and becoming caught up in an ambushed drug deal. While seeking out those responsible, he slowly builds a 
    criminalempire by seizing power from other criminal organisations in the city.`,
    price: 10,
    photo: `gta_vc.jpg`,
    releaseDate: new Date("2002-10-29"),
  },
  {
    id: 11,
    title: `Metro 2033`,
    description: `Metro 2033 is a 2010 first-person shooter survival horror video game developed by 4A Games and published by THQ. The story is 
    based on Dmitry Glukhovsky's novel of the same name, where survivors of a nuclear war have taken refuge in the Metro tunnels of Moscow. Players 
    control Artyom, a man who must save his home station from the dangers lurking within the Metro. In the game, players encounter human and mutant 
    enemies, who can be killed with a variety of firearms. Players must also wear a gas mask to explore areas covered in fallout radiation, both 
    underground and on the surface.`,
    price: 10,
    photo: `metro_2033.jpg`,
    releaseDate: new Date("2010-03-16"),
  },
  {
    id: 12,
    title: `Tekken 3`,
    description: `Tekken 3 (鉄拳3) is a fighting game, the third entry in the Tekken series. It was released to the arcades in 1997, before being 
    ported to the PlayStation in 1998. The arcade version of the game was released in 2005 for the PlayStation 2 as part of Tekken 5's Arcade History 
    mode. The game was also re-released as part of Sony's PlayStation Classic.`,
    price: 5,
    photo: `tekken_3.jpg`,
    releaseDate: new Date("1997-03-20"),
  },
  {
    id: 13,
    title: `Far Cry 3`,
    description: `Far Cry 3 is a 2012 first-person shooter game developed by Ubisoft Montreal and published by Ubisoft. It is the third main installment 
    in the Far Cry series after Far Cry 2. The game takes place on the fictional Rook Islands, a tropical archipelago which can be freely explored by 
    players. Gameplay focuses on combat and exploration. Players can use a variety of weapons to defeat human enemies and hostile wildlife, and the game 
    features elements found in role-playing games such as skill trees and experience. After a vacation goes awry, protagonist Jason Brody must save his 
    friends, who have been kidnapped by pirates, and escape from the island and its unhinged inhabitants.`,
    price: 15,
    photo: `far_cry_3.jpg`,
    releaseDate: new Date("2012-11-29"),
  },
  {
    id: 14,
    title: `Devil May Cry 5`,
    description: `Devil May Cry 5 is a 2019 action-adventure game developed and published by Capcom. It is the sixth installment overall and the fifth 
    mainline installment in the Devil May Cry series. Capcom released it for PlayStation 4, Windows, and Xbox One on 8 March 2019. The game takes place 
    five years after Devil May Cry 4 and follows a trio of warriors with demonic powers, the returning Dante, Nero, and a new protagonist named V, as 
    they attempt to stop the Demon King Urizen from destroying the human world. Across their journey in Red Grave City, the player can use these 
    characters in different missions. Each of them has their own way of fighting and becoming stronger. As this happens, the mystery behind V is 
    revealed, along with his connection with Urizen.`,
    price: 30,
    photo: `dmc_5.jpg`,
    releaseDate: new Date("2019-03-08"),
  },
  {
    id: 15,
    title: `Devil May Cry`,
    description: `Devil May Cry is a 2001 action-adventure game developed and published by Capcom. Released from August to December, originally for 
    the PlayStation 2, it is the first installment in the Devil May Cry series. Set in modern times on the fictional Mallet Island, the story centers 
    on Dante, a demon hunter who uses his business to carry out a lifelong vendetta against all demons. He meets a woman named Trish who takes him on 
    a journey to defeat the demon lord Mundus, who is responsible for the deaths of Dante's brother and mother. The story is told primarily through 
    a mixture of cutscenes, which use the game engine and several pre-rendered full motion videos. The game is very loosely based on the Italian poem 
    Divine Comedy by the use of allusions, including the game's protagonist Dante (named after Dante Alighieri) and other characters like Trish 
    (Beatrice Portinari) and Vergil (Virgil).`,
    price: 10,
    photo: `dmc.jpg`,
    releaseDate: new Date("2001-08-23"),
  },
  {
    id: 16,
    title: `Resident Evil`,
    description: `Resident Evil is a survival horror video game developed by Capcom Production Studio 4 and published by Capcom. Released for the 
    GameCube video game console in 2002, it is a remake of the 1996 PlayStation game Resident Evil, the first installment in the Resident Evil video game 
    series. The story takes place in 1998 near the fictional Midwestern town of Raccoon City where a series of bizarre murders have taken place. 
    The player takes on the role of either Chris Redfield or Jill Valentine, S.T.A.R.S. agents sent in by the city to investigate the murders.`,
    price: 15,
    photo: `re.jpg`,
    releaseDate: new Date("2002-03-22"),
  },
  {
    id: 17,
    title: `Resident Evil 4`,
    description: `Resident Evil 4 is a 2023 survival horror game developed and published by Capcom. It is a remake of the 2005 game Resident Evil 4. 
    Players control the US agent Leon S. Kennedy, who must save Ashley Graham, the daughter of the United States president, from the mysterious 
    Los Iluminados cult. The remake builds upon the original game with an updated plot, new visuals, characters, cast, and improved gameplay. 
    Resident Evil 4 was announced in June 2022 and released on PlayStation 4, PlayStation 5, Windows, and Xbox Series X/S on March 24, 2023. It received 
    acclaim and sold four million copies in its first two weeks, making it one of the fastest-selling Resident Evil games.`,
    price: 40,
    photo: `re_4.jpg`,
    releaseDate: new Date("2023-03-24"),
  },
  {
    id: 18,
    title: `Call of Duty: Modern Warfare`,
    description: `Call of Duty: Modern Warfare is a 2007 first-person shooter video game developed by Infinity Ward and published by Activision. It is 
    the fourth main installment in the Call of Duty series. The game breaks away from the World War II setting of previous entries and is instead set in 
    modern times. Developed for over two years, Modern Warfare was released in November 2007 for the PlayStation 3, Xbox 360 and Microsoft Windows, and 
    was ported to the Wii as Call of Duty: Modern Warfare - Reflex Edition in 2009.`,
    price: 15,
    photo: `cod_mw.jpg`,
    releaseDate: new Date("2007-11-05"),
  },
  {
    id: 19,
    title: `Call of Duty: Modern Warfare 2`,
    description: `Call of Duty: Modern Warfare 2 is a 2009 first-person shooter game developed by Infinity Ward and published by Activision. It is the 
    sixth installment in the Call of Duty series and the direct sequel to Call of Duty 4: Modern Warfare. It was released worldwide on November 10, 2009, 
    for Microsoft Windows, the PlayStation 3, and Xbox 360. A separate version for the Nintendo DS, titled Modern Warfare: Mobilized, was also released on 
    the same day. A version for macOS was developed by Aspyr and released in May 2014, and the Xbox 360 version was made backward compatible for the 
    Xbox One in 2018.`,
    price: 20,
    photo: `cod_mw_2.jpg`,
    releaseDate: new Date("2009-11-10"),
  },
  {
    id: 20,
    title: `Assassin's Creed II`,
    description: `Assassin's Creed II is a 2009 action-adventure video game developed by Ubisoft Montréal and published by Ubisoft. It is the second 
    major installment in the Assassin's Creed series, and the sequel to 2007's Assassin's Creed. The game was first released on the PlayStation 3 and 
    Xbox 360 in November 2009, and was later made available on Microsoft Windows in March 2010 and OS X in October 2010.`,
    price: 20,
    photo: `ac_2.jpg`,
    releaseDate: new Date("2016-11-15"),
  },
];

module.exports = games;
