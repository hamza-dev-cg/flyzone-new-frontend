const fsh1 = '56px';
const fsh2 = '36px';
const fsh3 = '34px';
const fsh4 = '24px';
const fsh5 = '18px';
const fsh6 = '16px';
const fssm = '14px';
const fsxs = '13px';
const fsxss = '12px';
const fsXxs = '10px';
const fsMini = '8px';

const theme = {
  name: 'theme',
  colors: {
    primaryColor:'#007bff',
    blackColor:'#000000',
    grayColor:'#353535',
    whiteColor:'#ffffff'
  },
  fonts: {
    baseFontSizeH1: fsh1,
    baseFontSizeH2: fsh2,
    baseFontSizeH3: fsh3,
    baseFontSizeH4: fsh4,
    baseFontSizeH5: fsh5,
    baseFontSizeH6: fsh6,
    baseFontSize: fssm,
    baseFontSizeSm: fsxs,
    baseFontSizeSmm:fsxss,
    baseFontSizeXs: fsXxs,
    baseFontSizeXxs: fsMini
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  }
};

export default theme;
