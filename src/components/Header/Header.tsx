import { useRouter } from 'next/router'
import { Menu2 } from 'tabler-icons-react'
import UserProfile from '../UserProfile/UserProfile'
import { useAppDispatch } from '../../store/hooks';
import { toggleMenu } from '../../store/features/menu.slice';
import { useMediaQuery } from '@mantine/hooks';
import { Breakpoint, maxWidth } from '../../utils/breakpoints';
import SearchBar from './SearchBar/SearchBar';
import CollectionMenu from './CollectionMenu/CollectionMenu';

const Header = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));

    const openMenu = () => {
        dispatch(toggleMenu());
    };

    return (
        <header style={{ gridArea: 'main-view' }} className='w-full h-16 absolute flex gap-4 items-center justify-between px-8 py-4 bg-black z-20'>
            {sm ? (
                <div className='flex justify-between items-center gap-4'>
                    <Menu2 size={32} onClick={openMenu} />
                </div>
            ) : <div></div>}
            {(!sm && new RegExp('\/collection/.*', 'g').test(router.pathname)) && <CollectionMenu />}
            {new RegExp('\/search.*', 'g').test(router.pathname) && <SearchBar />}
            <UserProfile />
        </header>
    )
}

export default Header