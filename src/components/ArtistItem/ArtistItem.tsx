import { createStyles, Text } from '@mantine/core';
import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import { Artist } from '../../models/Artist';

type AristItemProps = Artist;

const useStyles = createStyles({
    wrapper: {
        transition: 'background-color .3s ease'
    },
    imgWrapper: {
        backgroundColor: '#333',
        boxShadow: '0 8px 24px rgb(0 0 0 / 50%)',
        position: 'relative',
        paddingBottom: '100%',
        width: '100%',
        borderRadius: '50%',
        overflow: 'hidden'
    }
});

const ArtistItem: FunctionComponent<AristItemProps> = (item) => {
    const { classes, cx } = useStyles();

    return (
        <div
            className={cx(classes.wrapper, 'bg-[#181818] rounded-md flex-grow relative p-4 w-full cursor-pointer hover:bg-[#282828]')}>
            <div className='h-full'>
                <div className='mb-4 relative'>
                    <div className={classes.imgWrapper}>
                        <Image alt={item.name} src={item.img} layout='fill' />
                    </div>
                </div>
                <div className='min-h-[62px]'>
                    <Text title={item.name} lineClamp={1} className='pb-1' size="md" weight={700} color="white">{item.name}</Text>
                    <Text lineClamp={1} size="sm" color="#b3b3b3">Artist</Text>
                </div>
            </div>
        </div>
    )
}

export default ArtistItem