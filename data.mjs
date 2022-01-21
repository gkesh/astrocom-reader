const mangas = ["solo", "kimetsu", "kaiju8", "omniscient"];

const titles = {
    solo:  "Solo Leveling",
    kimetsu: "Demon Slayer",
    kaiju8: "Kaiju No. 8",
    omniscient: "Omniscient Reader"
};

const chapters = {
    solo: [28, 25, 35, 35, 34, 39, 47, 47, 37, 44, 46, 36, 46, 37, 46, 54, 49, 42, 42, 39, 41, 50, 44, 52, 38, 37, 48, 45, 45, 47, 40, 39, 48, 57, 44, 43, 46, 53, 53, 39, 45, 44, 41, 41, 56, 32, 37, 34, 40, 54, 60, 47, 57, 16, 37, 44, 36, 36, 31, 57, 44, 48, 51, 52, 59, 51, 56, 54, 70, 57, 59, 63, 61, 51, 50, 19, 47, 52, 49, 51, 47, 48, 49, 54, 55, 52, 59, 52, 46, 26, 103, 31, 25, 166, 45, 119, 121, 128, 38, 164, 119, 125, 182, 126, 154, 49, 55, 52, 45, 56, 11, 11, 7, 6, 7, 6, 42, 7, 8, 12, 14, 15, 51, 9, 6, 9, 7, 9, 89, 69, 69, 59, 48, 16, 16, 19, 16, 17, 18, 15, 16, 19, 16, 54, 56, 6, 67, 54, 75, 16, 67, 48, 50, 54, 47, 8, 60, 39, 44, 62, 65, 55, 9, 8, 9, 56, 55, 62, 90, 60, 59, 61, 54, 67],
    kimetsu: [54, 24, 22, 18, 18, 18, 20, 19, 18, 18, 18, 18, 18, 18, 18, 22, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 20, 18, 21, 21, 18, 18, 18, 19, 20, 18, 18, 20, 18, 18, 18, 18, 18, 21, 18, 21, 18, 21, 17, 18, 20, 19, 18, 18, 18, 20, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 22, 18, 18, 18, 20, 18, 18, 19, 18, 21, 18, 18, 18, 18, 18, 18, 18, 21, 18, 18, 18, 18, 18, 20, 18, 19, 18, 18, 20, 22, 17, 18, 18, 18, 18, 18, 17, 18, 20, 20, 18, 18, 21, 18, 18, 18, 18, 18, 20, 18, 18, 18, 21, 18, 22, 17, 18, 21, 18, 18, 18, 18, 16, 20, 19, 19, 18, 18, 18, 18, 19, 18, 20, 20, 19, 18, 19, 18, 18, 22, 18, 18, 17, 18, 18, 20, 18, 19, 17, 20, 20, 18, 23, 20, 20, 18, 20, 18, 17, 21, 18, 17, 18, 18, 18, 18, 17, 18, 20, 18, 26, 18, 18, 18, 17, 19, 18, 22, 18, 18, 19, 28],
    kaiju8: [51, 35, 22, 18, 15, 22, 18, 19, 15, 18, 18, 16, 19, 17, 16, 20, 17, 19, 14, 17, 18, 18, 15, 15, 20, 18, 18, 16, 18, 15, 15, 16, 20, 21, 16, 20, 17, 19, 22, 20, 21, 24, 18, 21, -1, 19, 19, 24, 15, 3],
    omniscient: [13, 28, 37, 50, 5, 45, 41, 11, 7, 12, 9, 10, 8, 9, 32, 18, 25, 8, 22, 25, 73, 51, 39, 66, 55, 21, 33, 10, 10, 21, 25, 84, 32, 65, 42, 8, 73, 44, 43, 37, 46, 32, 102, 60, 26, 53, 18, 28, 54, 59, 54, 16, 61, 62, 15, 51, 26, 61, 55, 20, 113, 7, 9, 68, 8, 49, 71, 18, 6, 26, 59, 87, 83, 119, 159, 13, 121, 95, 83, 6, 7]
};

const synopses = {
    solo: "10 years ago, after “the Gate” that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. They are known as Hunters. However, not all Hunters are powerful.",
    kimetsu: "Tanjiro is the oldest son in his family who has lost his father. One day, Tanjiro ventures off to another town to sell charcoal. Instead of going home, he ends up staying the night at someone else's house due to rumors of a demon nearby in the mountains. When he gets home the following day, a terrible tragedy awaits him.",
    kaiju8: "Grotesque, Godzilla-like monsters called “kaijuu” have been appearing around Japan for many years. To combat these beasts, an elite military unit known as the Defense Corps risks their lives daily to protect civilians. Once a creature is killed, “sweepers”—working under the Professional Kaijuu Cleaner Corporation—are left to dispose of its remains.",
    omniscient: "‘This is a development that I know of.’ The moment he thought that, the world had been destroyed, and a new universe had unfolded. The new life of an ordinary reader begins within the world of the novel, a novel that he alone had finished."
};

const authors = {
    solo: "Sung-Lak Jang",
    kimetsu: "Gotouge Koyoharu",
    kaiju8: "Matsumoto Naoya",
    omniscient: "Sing Shong"
}

export {
    mangas,
    titles,
    chapters,
    synopses,
    authors
};