export const Theme = Object.freeze({
  colors: {
    primary: '#ffe4c4de;',
    secondary: '#ebcda2',
    third: '#ebcda27a',
    notification: '#fff78b',
    mainBorder: '#d4b3a6',
    secondaryBorder: ' #ec6a37',
    btn: '#2ef0032e',
    btnAccent: '#2ef00363',

    iconBg: '#000000',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '18px',
    l: '28px',
    xl: '36px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  borders: {
    none: 'none',
    light: '2px solid',
    normal: '3px solid',
  },
  radii: { none: '0', normal: '4px', round: '50%' },
  shadows: {
    main: ' rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;',
    items:
      'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
  },
});
