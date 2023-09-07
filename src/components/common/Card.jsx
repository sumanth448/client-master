import * as React from "react";
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Paper from "@mui/material/Paper";

const useStyles = makeStyles(() => ({
    heading: {
        'padding': '12px',
    }
}))

export default function Card(props) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex-row',
                    '& > :not(style)': {
                        width: '100%',
                        height: 'auto',
                        margin: '48px'
                    },
                }}
            >
                <Paper variant="outlined" square>
                    {props.children}
                </Paper>
            </Box>

        </>
    );
}
