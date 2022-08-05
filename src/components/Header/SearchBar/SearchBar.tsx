import { createStyles, TextInput } from '@mantine/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Search } from 'tabler-icons-react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useDebouncedValue, useFocusWithin, useMediaQuery } from '@mantine/hooks';
import { Breakpoint, maxWidth } from '../../../utils/breakpoints';

const useStyles = createStyles((theme, { xs, focused }: { xs: boolean, focused: boolean }) => ({
    root: {
        flex: `0 1 ${xs && !focused ? '0' : '364px'}`,
        transition: 'flex .3s ease'
    },
    input: {
        width: xs && !focused ? '0' : '100%',
        borderRadius: '500px',
        height: '40px',
        padding: '6px 48px',
        backgroundColor: '#fff',
        color: '#000',
        transition: 'all .3s ease',
        willChange: 'width'
    },
    icon: {
        width: '40px'
    }
}));

const SearchBar = () => {
    const router = useRouter();
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));
    const xs = useMediaQuery(maxWidth(Breakpoint.xs));
    const { ref, focused } = useFocusWithin();
    const { classes, cx } = useStyles({ xs, focused });
    const [value, setValue] = useState('');
    const [debouncedVal] = useDebouncedValue(value, 200);

    useEffect(() => {
        router.push(`/search/${debouncedVal}`);
    }, [debouncedVal]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <motion.div initial={{ opacity: 0, x: '-10px' }} animate={{ opacity: 1, x: 0 }} className={cx(
            sm || xs ? 'justify-center' : 'justify-start',
            'flex items-center flex-grow'
        )}>
            <TextInput
                ref={ref}
                value={value}
                onChange={handleInputChange}
                classNames={{
                    root: classes.root,
                    input: classes.input,
                    icon: classes.icon
                }}
                placeholder="Artists, songs or podcasts"
                icon={<Search size={24} color="#000" />}
            />
        </motion.div>
    )
}

export default SearchBar