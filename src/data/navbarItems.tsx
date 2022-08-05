import { ReactNode } from "react";
import { Home, Search, Books, Plus, Heart } from 'tabler-icons-react';

type NavbarItem = {
    url: string;
    icon: ReactNode;
    title: string;
    supressLink: boolean;
}

export const navbarItems: NavbarItem[] = [
    {
        url: '/',
        icon: <Home size={24} />,
        title: 'Home',
        supressLink: false
    },
    {
        url: '/search',
        icon: <Search size={24} />,
        title: 'Search',
        supressLink: false
    },
    {
        url: '/collection/playlists',
        icon: <Books size={24} />,
        title: 'Library',
        supressLink: false
    },
    {
        url: '/',
        icon: (<div className="w-6 h-6 bg-white flex justify-center items-center text-black">
            <Plus size={16} />
        </div>),
        title: 'Create Playlist',
        supressLink: true
    },
    {
        url: '/collection/tracks',
        icon: (<div style={{ background: 'linear-gradient(135deg,#450af5,#c4efd9)' }} className="w-6 h-6 flex justify-center items-center"><Heart size={16} /></div>),
        title: 'Liked songs',
        supressLink: false
    }
]