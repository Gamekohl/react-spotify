import { createStyles, Slider, SliderProps } from '@mantine/core'
import { FunctionComponent } from 'react'

const useStyles = createStyles({
    sliderBar: {
        backgroundColor: '#fff',
        '&:hover': {

        }
    },
    sliderThumb: {
        backgroundColor: '#fff',
    },
    sliderRoot: {
        '&:hover': {
            '& .mantine-Slider-bar': {
                backgroundColor: '#1db954'
            }
        }
    }
});

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