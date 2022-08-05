import { nanoid } from "@reduxjs/toolkit";
import { MediaItem } from "../components/models/MediaItem";

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