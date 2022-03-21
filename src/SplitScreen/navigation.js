import {
  isDetailsNavigatorMounted,
  detailsNavigate,
} from '../navigation/detailsNavigator';
import {push} from '../navigation/masterNavigator';

import {
  CHAT_FILTER_SCREEN,
  PROFILE_SCREEN,
  PRUEBA_SCREEN,
  MAINTENANCE_SCREEN,
} from './consts';

export const pushChatsFilters = () => push(CHAT_FILTER_SCREEN);

export const pushChatScreen = () => {
  const args = [PROFILE_SCREEN];

  if (isDetailsNavigatorMounted()) {
    return detailsNavigate(...args);
  }

  return push(...args);
};
export const pushPruebaScreen = () => {
  const args = [PRUEBA_SCREEN];

  if (isDetailsNavigatorMounted()) {
    return detailsNavigate(...args);
  }

  return push(...args);
};
export const pushmaintenanceScreen = () => {
  const args = [MAINTENANCE_SCREEN];

  if (isDetailsNavigatorMounted()) {
    return detailsNavigate(...args);
  }

  return push(...args);
};
