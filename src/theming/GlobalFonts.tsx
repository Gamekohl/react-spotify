import { Global } from "@mantine/core";

const GlobalFonts = () => {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: "Gotham",
                        src: `url('./fonts/Gotham-Font/Gotham-Light.otf') format("otf")`,
                        fontWeight: 300
                    }
                },
                {
                    '@font-face': {
                        fontFamily: "Gotham",
                        src: `url('./fonts/Gotham-Font/GothamMedium.ttf') format("otf")`,
                        fontWeight: 400
                    }
                },
                {
                    '@font-face': {
                        fontFamily: "Gotham",
                        src: `url('./fonts/Gotham-Font/GothamMedium_1.ttf') format("otf")`,
                        fontWeight: 600
                    }
                },
                {
                    '@font-face': {
                        fontFamily: "Gotham",
                        src: `url('./fonts/Gotham-Font/Gotham-Bold.otf') format("otf")`,
                        fontWeight: 700
                    }
                }
            ]}
        />
    )
}

export default GlobalFonts;