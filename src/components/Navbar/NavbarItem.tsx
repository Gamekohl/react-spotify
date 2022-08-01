import { createStyles } from '@mantine/core'
import React, { FunctionComponent, ReactNode } from 'react'

const useStyles = createStyles((theme, { active }: { active: boolean }) => ({
    wrapper: {
        color: active ? '#fff' : '#b9b9b9',
        height: '40px',
        transition: 'color 150ms ease-in-out',
        '&:hover': {
            color: '#fff'
        }
    }
}))

type NavbarItemProps = {
    active: boolean;
}

const NavbarItem: FunctionComponent<NavbarItemProps & { children: ReactNode }> = ({ children, active }) => {
    const { classes, cx } = useStyles({ active });

    return (
        <div className={cx(classes.wrapper, 'cursor-pointer flex items-center gap-4 font-bold')}>
            {children}
        </div>
    )
}

export default NavbarItem