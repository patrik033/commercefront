import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';


interface DualRangeSliderProps {
    min: number;
    max: number;
}
function valuetext(value: number) {
    return `${value}°C`;
}

const minDistance = 5;

const DualRangeSlider: React.FC<DualRangeSliderProps> = ({ min, max }) => {
    const [startValue, setStartValue] = React.useState<number[]>([min, max]);

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setStartValue([Math.min(newValue[0], startValue[1] - minDistance), startValue[1]]);
        } else {
            setStartValue([startValue[0], Math.max(newValue[1], startValue[0] + minDistance)]);
        }
    };



    return (
        <Box sx={{ maxWidth: '300px' }}>
            <Typography id="non-linear-slider" gutterBottom>
                Minimumpris: {startValue[0]}{'\t\t'}Maxpris: {startValue[1]}
            </Typography>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                min={min}
                max={max}
                value={startValue}

                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    );
}

export default DualRangeSlider;