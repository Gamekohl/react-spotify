import { createStyles, Menu, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
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
                        <div>
                            <img className="w-8 h-8 p-0.5 rounded-full" src="https://avatars.dicebear.com/api/jdenticon/xyz.svg" />
                        </div>
                        {!sm && (
                            <>
                                <Text size="sm" weight="bold">Julian</Text>
                                <div className="mr-2">
                                    <ChevronDown size={20} />
                                </div>
                            </>
                        )}

                    </div>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item rightSection={<ExternalLink size={20} />}>Konto</Menu.Item>
                    <Menu.Item>Profil</Menu.Item>
                    <Menu.Item rightSection={<ExternalLink size={20} />}>Support</Menu.Item>
                    <Menu.Item rightSection={<ExternalLink size={20} />}>Herunterladen</Menu.Item>
                    <Menu.Item>Abmelden</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </div>
    )
}

export default UserProfile