import { createStyles, Menu, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'tabler-icons-react';
import { Breakpoint, maxWidth } from '../../utils/breakpoints';

const useStyles = createStyles({
    dropdown: {
        backgroundColor: '#282828',
        border: '0'
    },
    item: {
        color: '#fff',
        fontWeight: 600
    }
})

const UserProfile = () => {
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));
    const [opened, setOpened] = useState(false);
    const { classes, cx } = useStyles();

    return (
        <div className="relative z-10">
            <Menu
                opened={opened}
                onChange={setOpened}
                position="bottom-end"
                classNames={{
                    dropdown: classes.dropdown,
                    item: classes.item
                }}
                transition="pop-top-right"
                shadow="sm"
                width={224}
            >
                <Menu.Target>
                    <div
                        className={
                            cx(
                                { 'bg-[#282828]': opened },
                                'text-white bg-black bg-opacity-70 cursor-pointer hover:bg-[#282828] h-8 rounded-3xl flex justify-around items-center gap-2'
                            )
                        }
                    >
                        <div className='flex justify-center items-center'>
                            <Image alt='Profile Image' className="p-0.5 rounded-full" width={28} height={28} src="https://avatars.dicebear.com/api/jdenticon/xyz.svg" />
                        </div>
                        {!sm && (
                            <>
                                <Text size="sm" weight="bold">John</Text>
                                <div className="mr-2">
                                    <ChevronDown size={20} />
                                </div>
                            </>
                        )}

                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item rightSection={<ExternalLink size={20} />}>Account</Menu.Item>
                    <Menu.Item>Profile</Menu.Item>
                    <Menu.Item rightSection={<ExternalLink size={20} />}>Support</Menu.Item>
                    <Menu.Item rightSection={<ExternalLink size={20} />}>Download</Menu.Item>
                    <Menu.Item>Log out</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default UserProfile