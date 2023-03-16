/** @format */

import React from 'react';
// common
import { TabDashboardIcon, TabSettingsIcon } from '~/assets/icons';
import { RootRoutes } from '~/constants';

type Props = {
  route: string;
  color: string;
  focused: boolean;
};

export const TabIcon = ({ route, color }: Props) => {
  return (
    <>
      {route === RootRoutes.DASHBOARD && <TabDashboardIcon color={color} />}
      {route === RootRoutes.SETTINGS && <TabSettingsIcon color={color} />}
    </>
  );
};
