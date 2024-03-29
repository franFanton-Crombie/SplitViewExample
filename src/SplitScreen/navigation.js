import {
  isDetailsNavigatorMounted,
  detailsNavigate,
} from '../navigation/detailsNavigator';

export const pushHomeScreen = () => {
  const args = ['Home'];

  if (isDetailsNavigatorMounted()) {
    return detailsNavigate(...args);
  }

  return push(...args);
};

export const pushMessageScreen = () => {
  const args = ['Message'];

  if (isDetailsNavigatorMounted()) {
    return detailsNavigate(...args);
  }
  return push(...args);
};

export const pushProfileScreen = () => {
  const args = ['Profile'];

  if (isDetailsNavigatorMounted()) {
    return detailsNavigate(...args);
  }

  return push(...args);
};
