import { MantineThemeOverride } from "@mantine/core";

export const appTheme: MantineThemeOverride = {
    colors: {
        spotifyAccent: [
            "#e0ffeb",
            "#b8f6cf",
            "#8eefb1",
            "#63e792",
            "#39e074",
            "#1fc65a",
            "#149a45",
            "#096e30",
            "#00431b",
            "#001804"
        ]
    },
    components: {
        Button: {
            styles: {
                root: {
                    borderRadius: '500px',
                    transition: 'background-color .3s ease'
                }
            }
        }
    }
}