import React from 'react'
import { motion } from 'framer-motion';
import { Button, createStyles } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
    active: {
        backgroundColor: `${theme.colors.spotifyAccent[6]} !important`
    }
}));

const buttons = [
    {
        link: '/collection/playlists',
        title: 'Playlists'
    },
    {
        link: '/collection/podcasts',
        title: 'Podcasts'
    },
    {
        link: '/collection/artists',
        title: 'Artists'
    },
    {
        link: '/collection/albums',
        title: 'Albums'
    },
];

const CollectionMenu = () => {
    const router = useRouter();
    const { classes, cx } = useStyles();

    return (
        <motion.div initial={{ opacity: 0, x: '-10px' }} animate={{ opacity: 1, x: 0 }} className="flex gap-2 justify-start items-center flex-grow">
            {buttons.map((item, key) => (
                <Link key={key} href={item.link} passHref>
                    <Button
                        className={router.pathname === item.link && classes.active}
                        component="a"
                        color="dark"
                        variant="filled"
                    >{item.title}</Button>
                </Link>
            ))}
        </motion.div>
    )
}

export default CollectionMenu