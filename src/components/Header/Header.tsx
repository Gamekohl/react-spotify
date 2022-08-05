import { Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Menu2 } from 'tabler-icons-react'
import UserProfile from '../UserProfile/UserProfile'
import { motion } from 'framer-motion';
import { useAppDispatch } from '../../store/hooks';
import { toggleMenu } from '../../store/features/menu.slice';
import { useMediaQuery } from '@mantine/hooks';
import { Breakpoint, maxWidth } from '../../utils/breakpoints';
import SearchBar from '../SearchBar/SearchBar';
import { useStyles } from '../../utils/styles';

const Header = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));
    const { cx } = useStyles();

    const openMenu = () => {
        dispatch(toggleMenu());
    };

    const collectionHeader = (
        <>
            <motion.div initial={{ opacity: 0, x: '-10px' }} animate={{ opacity: 1, x: 0 }} className="flex justify-start items-center flex-grow">
                <Button.Group>
                    <Link href="/collection/playlists" passHref>
                        <Button component="a" color="dark" variant="filled">Playlists</Button>
                    </Link>
                    <Link href="/collection/podcasts" passHref>
                        <Button component="a" color="dark" variant="filled">Podcasts</Button>
                    </Link>
                    <Button color="dark" variant="filled">Künstler*innen</Button>
                    <Button color="dark" variant="filled">Alben</Button>
                </Button.Group>
            </motion.div>
        </>
    );

    return (
        <header style={{ gridArea: 'main-view' }} className='w-full h-16 absolute flex gap-4 items-center justify-between px-8 py-4 bg-black z-20'>
            <div className='flex justify-between items-center gap-4'>
                {sm && <Menu2 size={32} onClick={openMenu} />}
            </div>
            {(!sm && new RegExp('\/collection/.*', 'g').test(router.pathname)) && collectionHeader}
            {new RegExp('\/search.*', 'g').test(router.pathname) && <SearchBar />}
            <UserProfile />
        </header>
    )
}

export default Header