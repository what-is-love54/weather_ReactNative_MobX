/** @format */
import { useEffect, useState } from 'react';
import { permissionsService } from '~/services';

export const useLocationPermission = () => {
  const [state, setState] = useState({
    loading: true,
    granted: false,
  });

  useEffect(() => {
    permissionsService.checkIsLocationPermissionGranted().then(granted => {
      setState({
        loading: false,
        granted: Boolean(granted),
      });
    });
  }, []);

  return { ...state };
};
