/** @format */

import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const TabDashboardIcon = ({ color, ...props }: SvgProps) => (
  <Svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM5 6C4.44772 6 4 6.44772 4 7C4 7.55228 4.44771 8 5 8H15C15.5523 8 16 7.55228 16 7C16 6.44772 15.5523 6 15 6H5ZM8 13C8 12.4477 8.44771 12 9 12H11C11.5523 12 12 12.4477 12 13C12 13.5523 11.5523 14 11 14H9C8.44771 14 8 13.5523 8 13ZM7 9C6.44772 9 6 9.44771 6 10C6 10.5523 6.44772 11 7 11H13C13.5523 11 14 10.5523 14 10C14 9.44771 13.5523 9 13 9H7Z"
      fill={color}
      fillOpacity="0.4"
    />
  </Svg>
);
