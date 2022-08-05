import { nanoid } from "@reduxjs/toolkit";
import { Artist } from "../models/Artist";
import { Genre } from "../models/Genre";
import { MediaItem } from "../models/MediaItem";

export const dummyData: MediaItem[] = [
    {
        id: nanoid(),
        img: 'https://i.scdn.co/image/ab67616d00001e022a038d3bf875d23e4aeaa84e',
        title: 'Happier Than Ever',
        interpreter: 'Billie Eilish'
    },
    {
        id: nanoid(),
        img: 'https://i.scdn.co/image/ab67616d00001e024a767758e8ebe2443591c9fd',
        title: 'Watch The Throne',
        interpreter: 'Jay-Z'
    },
    {
        id: nanoid(),
        img: 'https://i.scdn.co/image/ab67616d00001e026ca5c90113b30c3c43ffb8f4',
        title: 'The Eminem Show',
        interpreter: 'Eminem'
    },
    {
        id: nanoid(),
        img: 'https://i.scdn.co/image/ab67616d00001e02c08d5fa5c0f1a834acef5100',
        title: 'Recovery',
        interpreter: 'Eminem'
    },
    {
        id: nanoid(),
        img: 'https://i.scdn.co/image/ab67616d00001e02ea3ef7697cfd5705b8f47521',
        title: 'Illuminate',
        interpreter: 'Shawn Mendes'
    },
    {
        id: nanoid(),
        img: 'https://i.scdn.co/image/ab67616d00001e029ad3e9959f48d513886b8933',
        title: 'Ride The Lightning',
        interpreter: 'Metallica'
    },
    {
        id: nanoid(),
        img: 'https://i.scdn.co/image/ab67616d00001e023786aacf75e7983fdb770402',
        title: 'crybaby',
        interpreter: 'Lil Peep'
    },
    {
        id: nanoid(),
        img: 'https://i.scdn.co/image/ab67616d00001e0255e36b0dc5b0ef008fc85319',
        title: 'Come Over When You\'re Sober, Pt. 2',
        interpreter: 'Lil Peep'
    },
    {
        id: nanoid(),
        img: 'https://i.scdn.co/image/ab67616d00001e02668e3aca3167e6e569a9aa20',
        title: 'Master Of Puppets',
        interpreter: 'Metallica'
    }
]

export const artists: Artist[] = [
    {
        name: 'Billie Eilish',
        img: 'https://i.scdn.co/image/ab6761610000f178d8b9980db67272cb4d2c3daf'
    },
    {
        name: 'Jay-Z',
        img: 'https://i.scdn.co/image/ab6761610000f178c75afcd5a9027f60eaebb5e4'
    },
    {
        name: 'Lil Peep',
        img: 'https://i.scdn.co/image/ab6761610000f1786685f03de475c4efb27da3c4'
    },
    {
        name: 'Eminem',
        img: 'https://i.scdn.co/image/ab6761610000f178a00b11c129b27a88fc72f36b'
    },
    {
        name: 'Metallica',
        img: 'https://i.scdn.co/image/ab6761610000f1788101d13bdd630b0889acd2fd'
    },
    {
        name: 'Shawn Mendes',
        img: 'https://i.scdn.co/image/ab6761610000f17846e7a06fa6dfefaed6a3f0db'
    }
]

export const genres: Genre[] = [
    {
        "bg": "rgb(39, 133, 106)",
        "img": "https://i.scdn.co/image/567158eb895ad26718a814345af0fc43ee785ec5",
        "title": "Podcasts"
    },
    {
        "bg": "rgb(30, 50, 100)",
        "img": "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
        "title": "Made For You"
    },
    {
        "bg": "rgb(141, 103, 171)",
        "img": "https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg",
        "title": "Charts"
    },
    {
        "bg": "rgb(232, 17, 91)",
        "img": "https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112",
        "title": "New Releases"
    },
    {
        "bg": "rgb(141, 103, 171)",
        "img": "https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg",
        "title": "Discover"
    },
    {
        "bg": "rgb(30, 50, 100)",
        "img": "https://t.scdn.co/images/8cfa9cb1e43a404db76eed6ad594057c",
        "title": "Live Events"
    },
    {
        "bg": "rgb(255, 200, 100)",
        "img": "https://t.scdn.co/images/a2a24668f16c4e9680233a0d7d244a4b.jpeg",
        "title": "Summer"
    },
    {
        "bg": "rgb(141, 103, 171)",
        "img": "https://i.scdn.co/image/ab67706f00000002aa93fe4e8c2d24fc62556cba",
        "title": "Mood"
    },
    {
        "bg": "rgb(220, 20, 140)",
        "img": "https://i.scdn.co/image/ab67706f000000020377baccf69ede3cf1a26eff",
        "title": "Dance / Electronic"
    },
    {
        "bg": "rgb(71, 125, 149)",
        "img": "https://i.scdn.co/image/ab67706f00000002c414e7daf34690c9f983f76e",
        "title": "Chill"
    },
    {
        "bg": "rgb(180, 155, 200)",
        "img": "https://t.scdn.co/images/c6677aa51acf4121b66b9d1f231bd427.png",
        "title": "RADAR"
    },
    {
        "bg": "rgb(240, 55, 165)",
        "img": "https://t.scdn.co/images/16e40e64d2a74fa8a0a020d456e6541d.jpeg",
        "title": "Fresh Finds"
    },
    {
        "bg": "rgb(20, 138, 8)",
        "img": "https://i.scdn.co/image/ab67706f0000000284a1ec26f589f0d569805a07",
        "title": "EQUAL"
    },
    {
        "bg": "rgb(175, 40, 150)",
        "img": "https://i.scdn.co/image/ab67706f00000002caa115cbdb8cd3d39d67cdc0",
        "title": "Party"
    },
    {
        "bg": "rgb(71, 125, 149)",
        "img": "https://i.scdn.co/image/ab67706f00000002ffa215be1a4c64e3cbf59d1e",
        "title": "In the car"
    },
    {
        "bg": "rgb(30, 50, 100)",
        "img": "https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0",
        "title": "Sleep"
    },
    {
        "bg": "rgb(156, 240, 225)",
        "img": "https://t.scdn.co/media/links/workout-274x274.jpg",
        "title": "Workout"
    },
    {
        "bg": "rgb(96, 129, 8)",
        "img": "https://i.scdn.co/image/ab67706f000000025f7327d3fdc71af27917adba",
        "title": "Indie"
    },
    {
        "bg": "rgb(215, 242, 125)",
        "img": "https://t.scdn.co/images/ee9451b3ed474c82b1da8f9b5eafc88f.jpeg",
        "title": "Alternative"
    },
    {
        "bg": "rgb(186, 93, 7)",
        "img": "https://t.scdn.co/images/4c8b58ab42b54296ad5379514d36edac",
        "title": "Decades"
    },
    {
        "bg": "rgb(119, 119, 119)",
        "img": "https://i.scdn.co/image/ab67706f0000000285704160b49125ac95099ec8",
        "title": "Metal"
    },
    {
        "bg": "rgb(71, 125, 149)",
        "img": "https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695",
        "title": "At Home"
    },
    {
        "bg": "rgb(141, 103, 171)",
        "img": "https://t.scdn.co/images/15a38c44c4484cc3a078aaab5bd4e828",
        "title": "Kids & Family"
    },
    {
        "bg": "rgb(220, 20, 140)",
        "img": "https://i.scdn.co/image/ab67706f000000023c5a4aaf5df054a9beeb3d82",
        "title": "R&B"
    },
    {
        "bg": "rgb(141, 103, 171)",
        "img": "https://t.scdn.co/media/derived/reggae-274x274_2f11a0500528532b3bc580e3428e9610_0_0_274_274.jpg",
        "title": "Reggae"
    },
    {
        "bg": "rgb(80, 55, 80)",
        "img": "https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934",
        "title": "Focus"
    },
    {
        "bg": "rgb(30, 50, 100)",
        "img": "https://t.scdn.co/images/cad629fb65a14de4beddb38510e27cb1",
        "title": "Frequency"
    },
    {
        "bg": "rgb(80, 155, 245)",
        "img": "https://t.scdn.co/images/c9a01586687a45a78c56d9be5aed3c79.jpeg",
        "title": "Pride"
    },
    {
        "bg": "rgb(140, 25, 50)",
        "img": "https://i.scdn.co/image/ab67706f0000000213601d4833623a4d6b328e38",
        "title": "Romance"
    },
    {
        "bg": "rgb(175, 40, 150)",
        "img": "https://i.scdn.co/image/ab67706f000000026abff8de68c75470ea8f0665",
        "title": "TV & Movies"
    },
    {
        "bg": "rgb(175, 40, 150)",
        "img": "https://t.scdn.co/images/27922fb7882e4d078c59b29cef4111b9",
        "title": "Disney"
    },
    {
        "bg": "rgb(141, 103, 171)",
        "img": "https://i.scdn.co/image/ab67706f000000023e0130fcd5d106f1402b4707",
        "title": "Classical"
    },
    {
        "bg": "rgb(186, 93, 7)",
        "img": "https://i.scdn.co/image/ab67706f000000025a051b0271d3e98edfdc4c09",
        "title": "Cooking & Dining"
    },
    {
        "bg": "rgb(225, 51, 0)",
        "img": "https://i.scdn.co/image/ab67706f00000002a980b152e708b33c6516d848",
        "title": "Country"
    },
    {
        "bg": "rgb(165, 103, 82)",
        "img": "https://i.scdn.co/image/ab67656300005f1ff234909e69a68d92ca0af6ca",
        "title": "Wellness"
    },
    {
        "bg": "rgb(20, 138, 8)",
        "img": "https://i.scdn.co/image/ab67706f00000002978b9f4a4f40b430fd0d837e",
        "title": "K-Pop"
    },
    {
        "bg": "rgb(235, 30, 50)",
        "img": "https://t.scdn.co/images/1a416fb97f5647858c7f09c9cb6e7301",
        "title": "Netflix"
    },
    {
        "bg": "rgb(30, 50, 100)",
        "img": "https://i.scdn.co/image/ab67706f00000002d72ef75e14ca6f60ea2364c2",
        "title": "Jazz"
    },
    {
        "bg": "rgb(220, 20, 140)",
        "img": "https://i.scdn.co/image/ab67706f000000026e1034ebd7b7c86546c6acca",
        "title": "Soul"
    },
    {
        "bg": "rgb(30, 50, 100)",
        "img": "https://i.scdn.co/image/ab67706f0000000275251d7d488b0fd69e4c50bd",
        "title": "Punk"
    },
    {
        "bg": "rgb(13, 115, 236)",
        "img": "https://i.scdn.co/image/ab67706f00000002a76a2ccb454ff0e1720a51a5",
        "title": "Caribbean"
    },
    {
        "bg": "rgb(225, 17, 139)",
        "img": "https://t.scdn.co/images/6a48e36b373a4d879a9340076db03a7b",
        "title": "Latin"
    },
    {
        "bg": "rgb(232, 17, 91)",
        "img": "https://i.scdn.co/image/ab67706f0000000221a2087747d946f16704b8af",
        "title": "Gaming"
    },
    {
        "bg": "rgb(45, 70, 185)",
        "img": "https://t.scdn.co/images/44cf5615d3244f289fcedefa96b85db9",
        "title": "Travel"
    },
    {
        "bg": "rgb(71, 125, 149)",
        "img": "https://i.scdn.co/image/ab67706f000000028ed1a5002b96c2ea882541b2",
        "title": "Instrumental"
    },
    {
        "bg": "rgb(71, 125, 149)",
        "img": "https://t.scdn.co/images/a45c0978c7784da8b83cadbca8b815d1",
        "title": "Ambient"
    },
    {
        "bg": "rgb(13, 115, 236)",
        "img": "https://t.scdn.co/images/b4182906bf244b4994805084c057e9ee.jpeg",
        "title": "Tastemakers"
    },
    {
        "bg": "rgb(80, 155, 245)",
        "img": "https://t.scdn.co/images/487ecec9ae594690a55c0150b1958eff",
        "title": "Music + Talk"
    },
    {
        "bg": "rgb(30, 50, 100)",
        "img": "https://t.scdn.co/media/derived/trending-274x274_7b238f7217985e79d3664f2734347b98_0_0_274_274.jpg",
        "title": "Trending"
    },
    {
        "bg": "rgb(141, 103, 171)",
        "img": "https://i.scdn.co/image/ab67706f00000002d3f07aa10d05fb4baab12b94",
        "title": "Arab"
    },
    {
        "bg": "rgb(180, 155, 200)",
        "img": "https://t.scdn.co/images/7c9a6fd84067448f8d2d1c9f7873be5e.jpeg",
        "title": "Ramadan"
    },
    {
        "bg": "rgb(230, 30, 50)",
        "img": "https://i.scdn.co/image/ab67706f00000002f16913f0326b9d44bf78fc88",
        "title": "Funk"
    },
    {
        "bg": "rgb(140, 25, 50)",
        "img": "https://i.scdn.co/image/ab676d63000076a0c9657833d9c169782b961c9c",
        "title": "Songwriters"
    },
    {
        "bg": "rgb(30, 50, 100)",
        "img": "https://i.scdn.co/image/ab67706f0000000237df164786f688dd0ccd8744",
        "title": "Folk & Acoustic"
    },
    {
        "bg": "rgb(160, 195, 210)",
        "img": "https://t.scdn.co/images/6fe5cd3ebc8c4db7bb8013152b153505",
        "title": "Blues"
    },
    {
        "bg": "rgb(20, 138, 8)",
        "img": "https://i.scdn.co/image/ab67706f000000025f0ff9251e3cfe641160dc31",
        "title": "League of Legends"
    },
    {
        "bg": "rgb(245, 115, 160)",
        "img": "https://t.scdn.co/images/29bfbe4d5a564bad8f10f9e6d6e654e0.jpeg",
        "title": "Word"
    }
];