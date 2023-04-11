const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createUsers() {
  try {
    const users = await prisma.user.createMany({
      data: [
        {
          firstName: `Oleksii`,
          lastName: `Honcharov`,
          email: `gonchxrov@gmail.com`,
          password: `admin`,
          role: `admin`,
        },
        {
          firstName: `Misha`,
          lastName: `Lisovskiy`,
          email: `l.isovskiy702590@gmail.com`,
          password: `user`,
        },
      ],
      skipDuplicates: true,
    });

    let count = users?.count || 0;
    console.log("Creted users:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create users:", errorMessage);
  }
}

async function createGames() {
  try {
    const games = await prisma.game.createMany({
      data: [
        {
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
      ],
      skipDuplicates: true,
    });

    let count = games?.count || 0;
    console.log("Creted games:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create games:", errorMessage);
  }
}

async function createCategories() {
  try {
    const categories = await prisma.category.createMany({
      data: [
        {
          title: `Singleplayer`,
          photo: `singleplayer.jpg`,
        },
        {
          title: `Multiplayer`,
          photo: `multiplayer.jpg`,
        },
        {
          title: `Co-op`,
          photo: `coop.jpg`,
        },
        {
          title: `Controller`,
          photo: `controller.jpg`,
        },
        {
          title: `Horror`,
          photo: `horror.jpg`,
        },
      ],
      skipDuplicates: true,
    });

    let count = categories?.count || 0;
    console.log("Creted categories:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create users:", errorMessage);
  }
}

async function createGenres() {
  try {
    const genres = await prisma.genre.createMany({
      data: [
        {
          title: `Action`,
          photo: `action.jpg`,
        },
        {
          title: `Adventure`,
          photo: `adventure.jpg`,
        },
        {
          title: `Hack and Slash`,
          photo: `hack_and_slash.jpg`,
        },
        {
          title: `Shooter`,
          photo: `shooter.jpg`,
        },
        {
          title: `Stealth`,
          photo: `stealth.jpg`,
        },
      ],
      skipDuplicates: true,
    });

    let count = genres?.count || 0;
    console.log("Creted genres:", count);
  } catch (error) {
    let errorMessage = error?.message || "Undefined error";
    console.error("failed to create users:", errorMessage);
  }
}

async function main() {
  await createUsers();
  await createGames();
  await createCategories();
  await createGenres();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
