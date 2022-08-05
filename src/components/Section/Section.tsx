import { createStyles, Text } from '@mantine/core'
import React, { FunctionComponent, ReactNode } from 'react'
import { Breakpoint, maxWidth, minWidth } from '../../utils/breakpoints'

type SectionProps = {
    title: string;
}

const useStyles = createStyles({
    wrapper: {
        '--column-count': 8,
        gridAutoRows: 'auto',
        gridTemplateRows: '1fr',
        gridGap: '24px',
        display: 'grid',
        gridTemplateColumns: 'repeat(var(--column-count), minmax(0, 1fr))',

        [`@media ${maxWidth(Breakpoint.sm)}`]: {
            '--column-count': 2,
        },
        [`@media ${minWidth(Breakpoint.sm)}`]: {
            '--column-count': 3,
        },
        [`@media ${minWidth(Breakpoint.md)}`]: {
            '--column-count': 3,
        },
        [`@media ${minWidth(Breakpoint.lg)}`]: {
            '--column-count': 4,
        },
        [`@media ${minWidth(Breakpoint.xl)}`]: {
            '--column-count': 5,
        },
        [`@media ${minWidth(Breakpoint.xxl)}`]: {
            '--column-count': 8,
        },
    }
})

const Section: FunctionComponent<SectionProps & { children: ReactNode }> = ({ title, children }) => {
    const { classes } = useStyles();

    return (
        <section className='flex flex-col min-h-[300px] min-w-full relative'>
            <div className='flex mb-4 items-end justify-between'>
                <Text lineClamp={1} size={24} color="white" weight={700}>{title}</Text>
            </div>
            <div className={classes.wrapper}>
                {children}
            </div>
        </section>
    )
}

export default Section