export const theme = {
    breakpoints: [
      '40em', '56em', '64em',
    ],
    colors: {
      text: "#333",
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
    fontSizes: ['1.25rem', '1.45rem', '1.85rem', '2rem', '2.45rem', '3.25rem', '4rem', '4.5rem'],
    styles: {
      root: {
        fontFamily: 'body',
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
    }
  }

  export default theme;