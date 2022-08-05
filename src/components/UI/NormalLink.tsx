import { createStyles } from '@mantine/core'
import Link, { LinkProps } from 'next/link'
import { FunctionComponent, ReactNode } from 'react'

const useStyles = createStyles({
    wrapper: {
        cursor: 'pointer',

        '&:hover': {
            textDecoration: 'underline'
        }
    }
})

const NormalLink: FunctionComponent<LinkProps & { children: ReactNode }> = ({ children, ...props }) => {
    const { classes } = useStyles();

    return (
        <div className={classes.wrapper}>
            <Link {...props}>
                {children}
            </Link>
        </div>
    )
}

export default NormalLink