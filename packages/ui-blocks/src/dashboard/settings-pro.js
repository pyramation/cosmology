import React from 'react';
import { Grid } from '@webql/core';

import { SettingsProSection } from './settings-pro-section';
import { TopnavTwo, LeftnavTwo } from '../navigations';

export const SettingsPro = ({ topNavLogo1, dashboardImg, logoutLogo }) => {
  return (
    <div className="settingsProContainer">
      <TopnavTwo topNavLogo1={topNavLogo1} />
      <Grid style={{ overflow: 'hidden' }} templateColumns="2fr 8fr">
        <LeftnavTwo dashboardImg={dashboardImg} logoutLogo={logoutLogo} />
        <SettingsProSection />
      </Grid>
    </div>
  );
};
