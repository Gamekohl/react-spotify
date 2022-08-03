import { Button } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { ChevronLeft, ChevronRight } from 'tabler-icons-react'
import UserProfile from '../UserProfile/UserProfile'
import { motion } from 'framer-motion';

const Header = () => {
    const router = useRouter();

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
    )

    return (
        <header style={{ gridArea: 'main-view' }} className='w-full h-16 absolute flex justify-between px-8 py-4 bg-black z-20'>
            <div className='flex justify-between items-center gap-4'>
                <ChevronLeft size={32} />
                <ChevronRight size={32} />
            </div>
            {new RegExp('\/collection/.*', 'g').test(router.pathname) && collectionHeader}
            <UserProfile />
        </header>
    )
}

export default Header