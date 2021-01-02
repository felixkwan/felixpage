export const theme = {
    breakpoints: [
      '40em', '56em', '64em',
    ],
    colors: {
      text: "#333",
      black: "#2a2a2a",
      whiteBis: "#f2f2f2",
      background: "#fff",
      primary: "#639",
      secondary: "#ff6347",
    },
    fonts: {
      body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    fontSizes: ['0.95rem', '1.25rem', '1.45rem', '1.85rem', '2rem', '2.45rem', '3.25rem', '4rem', '4.5rem'],
    styles: {
      root: {
        fontFamily: 'body',
        fontSize: 2,
        lineHeight: 'body',
        fontWeight: 'body',
        bg: 'unset',
      },
      h1: {
        fontSize: 6,
        fontFamily: 'body',
        fontWeight: 'heading',
        mt: 2,
        mb: 2,
      },
      h2: {
        fontSize: 5,
        fontFamily: 'body',
        fontWeight: 'heading',
        mt: 2,
        mb: 2,
      },
      h3: {
        fontSize: 4,
        fontFamily: 'body',
        fontWeight: 'heading',
        mt: 2,
        mb: 2,
      },
      h4: {
        fontSize: 3,
        fontFamily: 'body',
        fontWeight: 'heading',
        mt: 2,
        mb: 2,
      },
      h5: {
        fontSize: 2,
        fontFamily: 'body',
        fontWeight: 'body',
        mt: 2,
        mb: 2,
      },
      h6: {
        fontSize: 1,
        fontFamily: 'body',
        fontWeight: 'body',
        mt: 2,
        mb: 2,
      },
      navlink: {
        fontSize: 3,
        color: 'inherit',
        textDecoration: 'none',
      }
    }
  }

  export default theme;