import React from "react";
import { Skeleton, Box, FormControl, FormLabel, Stack, Switch, Typography } from '@mui/material';



const NewsSkeleton = () => {
    // Generating skeleton item for title and content

    return (

        <Stack spacing={2} sx={{ maxWidth: '80ch' }}>
            <Box>
                <Typography variant="h3">
                    <Skeleton height={24} width="80%" />
                </Typography>
                <Typography variant="body1">
                    <Skeleton height={36} width="100%" />
                </Typography>
            </Box>
        </Stack>

    );
};

export default NewsSkeleton;