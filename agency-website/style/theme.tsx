
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';




const theme = createTheme({
    components: {
      MuiButton: {
        variants: [
          {
            props: { variant: 'dashed' },
            style: {
              textTransform: 'none',
              border: `2px dashed ${blue[500]}`,
            },
          },
          {
            props: { variant: 'dashed', color: 'secondary' },
            style: {
              border: `4px dashed ${red[500]}`,
            },
          },
        ],
      },
    },
  });