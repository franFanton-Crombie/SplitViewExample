import * as React from 'react';
import SplitView from '../components/SplitView';
import {isIpad} from '../../helpers/constants';
import MasterSplitStack from './stacks/MasterSplitStack';
import DetailsSplitStack from './stacks/DetailsSplitStack';
import useSystemBack from './useSystemBack';

const MessageScreenSplit = () => {
  useSystemBack();

  return (
    <SplitView master={<MasterSplitStack />} detail={<DetailsSplitStack />} />
  );
};

const SplitScreen = () => {
  if (isIpad()) {
    return <MessageScreenSplit />;
  }

  return <MasterSplitStack />;
};

export default SplitScreen;
