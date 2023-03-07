const colorsPalette = {
  primaryColor100: '#e60000',
  primaryColor85: '#e91a1a',
  primaryColor70: '#eb3333',
  primaryColor55: '#ee4d4d',
  primaryColor40: '#f06666',
  primaryColor25: '#f38080',
  primaryColor10: '#f59999',
  primaryColor5: '#f8b3b3',
  black: '#090909',
  steel: '#262626',
  iron: '#555555',
  silver: '#9d9d9d',
  shadow: '#d9d9d9',
  light: '#e9e9e9',
  highlight: '#f5f5f5',
  purple:'#DE0AF4',
  blue:'#076AFF',
  success100: '#07935F',
  success85: '#2CA377',
  success25: '#C1E4D7',
  success10: '#E6F4EF',
  warning100: '#e9c46a',
  alert100: '#D61C22',
  alert85: '#DC3E43',
  alert25: '#F5C6C8',
  alert15: '#FBE8E9',
};

const Colors = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'rgba(0,0,0,0)',
  //theme
  background: '#F9FAFF',
  ...colorsPalette,
};

export const colorNames = Object.entries(Colors).reduce(
  (acc, [key]) => ({...acc, [key]: key}),
  {},
);

export default Colors;
