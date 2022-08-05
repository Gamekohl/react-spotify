import { createStyles, Text } from '@mantine/core'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'

type GenreItemProps = {
    title: string;
    img: string;
    bg: string;
    smaller?: boolean;
}

const useStyles = createStyles((theme, { bg, smaller }: { bg: string, smaller: boolean }) => ({
    wrapper: {
        backgroundColor: bg,
        transition: 'filter .3s ease',

        [smaller && '&:after']: {
            display: 'block',
            content: '""',
            paddingBottom: '100%'
        },

        '&:hover': {
            filter: 'brightness(110%)'
        }
    }
}))

const GenreItem: FunctionComponent<GenreItemProps> = ({ img, title, bg, ...rest }) => {
    const { smaller = false } = rest;
    const { classes, cx } = useStyles({ bg, smaller });

    return (
        <div className={cx(
            classes.wrapper,
            { 'h-[220px]': !smaller },
            'cursor-pointer rounded-lg text-white overflow-hidden relative w-full'
        )}>
            <Text size={smaller ? 24 : 40} weight={700} className='z-10 p-4 absolute break-words max-w-full'>{title}</Text>
            <div className='absolute right-0 bottom-0 flex rotate-[25deg] translate-x-[18%] translate-y-[5%]'>
                <Image
                    alt={title}
                    src={img}
                    width={smaller ? 100 : 128}
                    height={smaller ? 100 : 128}
                />
            </div>
        </div>
    )
}

export default GenreItem