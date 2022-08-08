import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion';
import { Button, createStyles } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ElasticTabs from '../../UI/ElasticTabs/ElasticTabs';

const useStyles = createStyles((theme) => ({
    buttonRoot: {
        '&:hover': {
            backgroundColor: 'unset'
        }
    },
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

            <ElasticTabs
                backdropStyle={{
                    backgroundColor: '#149a45'
                }}
            >
                {(onHover: MouseEventHandler) => (
                    <>
                        {buttons.map((item, key) => (
                            <Link key={key} href={item.link} passHref>
                                <Button
                                    classNames={{
                                        root: classes.buttonRoot
                                    }}
                                    onMouseEnter={onHover}
                                    component="a"
                                    color='dark'
                                    variant='filled'
                                >{item.title}</Button>
                            </Link>
                        ))}
                    </>
                )}
            </ElasticTabs>
        </motion.div>
    )
}

export default CollectionMenu