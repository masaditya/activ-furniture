import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';

import {ThemeManager, Colors, Typography} from 'react-native-ui-lib';
import {RFValue} from 'react-native-responsive-fontsize';
import color from './src/components/Color';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
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
  font10bold: {
    fontWeight: 'bold',
    fontSize: RFValue(10),
    fontFamily: 'Poppins-Bold',
  },
  font12bold: {
    fontWeight: 'bold',
    fontSize: RFValue(12),
    fontFamily: 'Poppins-Bold',
  },
  font14bold: {
    fontWeight: 'bold',
    fontSize: RFValue(14),
    fontFamily: 'Poppins-Bold',
  },
  font16bold: {
    fontWeight: 'bold',
    fontSize: RFValue(16),
    fontFamily: 'Poppins-Bold',
  },
  font18bold: {
    fontWeight: 'bold',
    fontSize: RFValue(18),
    fontFamily: 'Poppins-Bold',
  },
  font20bold: {
    fontWeight: 'bold',
    fontSize: RFValue(20),
    fontFamily: 'Poppins-Bold',
  },
  font24bold: {
    fontWeight: 'bold',
    fontSize: RFValue(24),
    fontFamily: 'Poppins-Bold',
  },
  font34bold: {
    fontWeight: 'bold',
    fontSize: RFValue(34),
    fontFamily: 'Poppins-Bold',
  },
});

ThemeManager.setComponentForcedTheme('Text', (props: any) => {
  return {
    style: [{fontFamily: 'Poppins-Regular'}, props.style],
  };
});

function App() {
  return (
    <>
      <ApplicationProvider {...eva} theme={eva.light}>
        <MainNavigation />
      </ApplicationProvider>
    </>
  );
}
export default App;
