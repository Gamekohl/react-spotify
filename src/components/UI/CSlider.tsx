import { createStyles, Slider, SliderProps } from '@mantine/core'
import { FunctionComponent } from 'react'

const useStyles = createStyles((theme) => ({
    sliderBar: {
        backgroundColor: '#fff'
    },
    sliderThumb: {
        backgroundColor: '#fff',
    },
    sliderRoot: {
        '&:hover': {
            '& .mantine-Slider-bar': {
                backgroundColor: theme.colors.spotifyAccent[5]
            }
        }
    }
}));

const CSlider: FunctionComponent<SliderProps> = (props) => {
    const { classes } = useStyles();

    return (
        <Slider
            classNames={{
                bar: classes.sliderBar,
                thumb: classes.sliderThumb,
                root: classes.sliderRoot
            }}
            {...props}
        />
    )
}

export default CSlider