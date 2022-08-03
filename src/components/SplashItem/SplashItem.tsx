import { createStyles, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import PlayButton from '../PlayButton/PlayButton';

type SplashItemProps = {
    img: string;
    title: string;
}

const useStyles = createStyles({
    wrapper: {
        backgroundColor: 'hsla(0,0%,100%,.1)',
        transition: 'background-color .3s ease',

        '&:hover': {
            backgroundColor: 'hsla(0,0%,100%,.2)',
        }
    },
    imgWrapper: {
        minWidth: '80px',
        minHeight: '80px',
        boxShadow: '0 8px 24px rgb(0 0 0 / 50%)'
    }
});

const SplashItem: FunctionComponent<SplashItemProps> = ({ img, title }) => {
    const { classes, cx } = useStyles();
    const { hovered, ref } = useHover();

    return (
        <div ref={ref} className={cx(classes.wrapper, 'rounded-md overflow-hidden relative h-20 flex cursor-pointer')}>
            <div className={classes.imgWrapper}>
                <Image src={img} width="80" height="80" alt={title} />
            </div>
            <div className='flex flex-grow text-white justify-between items-center px-4'>
                <Text lineClamp={2} size="md" weight={700}>{title}</Text>
                {hovered && <PlayButton />}
            </div>
        </div>
    )
}

export default SplashItem