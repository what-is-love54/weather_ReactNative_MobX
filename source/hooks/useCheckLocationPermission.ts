/** @format */
import { useEffect, useState } from 'react';
import { permissionsService } from '~/services';
import { permissionLocation } from '~/constants';

export const useCheckLocationPermission = () => {
  const [state, setState] = useState({
    loading: true,
    blocked: false,
    denied: false,
    granted: false,
  });

  useEffect(() => {
    permissionsService.checkPermission({
      type: permissionLocation,
      onGranted: () => {
        setState({
          loading: false,
          blocked: false,
          denied: false,
          granted: true,
        });
      },
      onDenied: () => {
        setState({
          loading: false,
          blocked: false,
          denied: true,
          granted: false,
        });
      },
      onBlocked: () => {
        setState({
          loading: false,
          blocked: true,
          denied: false,
          granted: false,
        });
      },
    });
  }, []);

  return { ...state };
};
