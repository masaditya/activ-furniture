import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';

import {ThemeManager, Colors, Typography} from 'react-native-ui-lib';
import {RFValue} from 'react-native-responsive-fontsize';
import color from './src/components/Color';
import AuthNavigation from './src/navigation/AuthNavigation';

Colors.loadColors(color);

Typography.loadTypographies({
  font10: {fontSize: RFValue(10)},
  font12: {fontSize: RFValue(12)},
  font14: {fontSize: RFValue(14)},
  font16: {fontSize: RFValue(16)},
  font18: {fontSize: RFValue(18)},
  font20: {fontSize: RFValue(20)},
  font24: {fontSize: RFValue(24)},
  font34: {fontSize: RFValue(34)},
  font10bold: {fontWeight: 'bold', fontSize: RFValue(10)},
  font12bold: {fontWeight: 'bold', fontSize: RFValue(12)},
  font14bold: {fontWeight: 'bold', fontSize: RFValue(14)},
  font16bold: {fontWeight: 'bold', fontSize: RFValue(16)},
  font18bold: {fontWeight: 'bold', fontSize: RFValue(18)},
  font20bold: {fontWeight: 'bold', fontSize: RFValue(20)},
  font24bold: {fontWeight: 'bold', fontSize: RFValue(24)},
  font34bold: {fontWeight: 'bold', fontSize: RFValue(34)},
});

ThemeManager.setComponentForcedTheme('Text', (props: any) => {
  return {
    style: [{fontFamily: 'Poppins-Regular'}, props.style],
  };
});

function App() {
  return <AuthNavigation />;
}
export default App;
