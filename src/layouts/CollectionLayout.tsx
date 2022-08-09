import { useMediaQuery } from '@mantine/hooks';
import React, { ReactNode } from 'react'
import CollectionMenu from '../components/Header/CollectionMenu/CollectionMenu';
import { Breakpoint, maxWidth } from '../utils/breakpoints';

const CollectionLayout = ({ children }: { children: ReactNode }) => {
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));

    return (
        <>
            {sm && <CollectionMenu />}
            {children}
        </>
    )
}

export default CollectionLayout;