import {
  createCreateTheme,
  ThemeSettingsUnit,
  ThemeSettingsMultiplier,
  ThemeSettingsColor,
  ThemeSettingsStyle,
  ThemeUnit,
  ThemeMultiplier,
  ThemeColor,
  ThemeStyle,
  ThemeCreatorStructure
} from '@arwes/theme';
  
interface ThemeSettings {
  space: ThemeSettingsUnit
  outline: ThemeSettingsMultiplier
  font: ThemeSettingsStyle
  color: {
    primary: ThemeSettingsColor
    secondary: ThemeSettingsColor
  }
}

interface Theme {
  space: ThemeUnit
  outline: ThemeMultiplier
  font: ThemeStyle
  color: {
    primary: ThemeColor
    secondary: ThemeColor
  }
}
 
const themeStructure: ThemeCreatorStructure = {
  space: 'multiplier',
  outline: 'multiplier',
  font: 'style',
  color: {
    primary: 'color',
    secondary: 'color'
  }
};

const themeDefaults: ThemeSettings = {
  // Values to be multiplied by a provided integer.
  space: i => `${i}rem`,
  outline: 1,
  // A list of styles with any CSS properties.
  font: [
    { fontFamily: 'monospace', fontSize: '30px' },
    { fontFamily: 'sans-serif', fontSize: '21px' }
  ],
  color: {
    // A function to return a HSLA value as [number, number, number, number?].
    primary: i => [180, 70, i * 5, 1],
    secondary: i => [60, 70, i * 5, 1]
  }
};


export const createTheme = createCreateTheme<ThemeSettings, Theme>(themeStructure, themeDefaults);
  