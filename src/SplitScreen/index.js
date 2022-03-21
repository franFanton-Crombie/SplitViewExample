import * as React from 'react';
import SplitView from '../components/SplitView';
import {isIpad} from '../../helpers/constants';
import MasterSplitStack from './stacks/MasterSplitStack';
import DetailsSplitStack from './stacks/DetailsSplitStack';
import useSystemBack from './useSystemBack';

const SplitScreen = () => {
  if (isIpad()) {
    useSystemBack();

    return (
      <SplitView master={<MasterSplitStack />} detail={<DetailsSplitStack />} />
    );
  }

  return <MasterSplitStack />;
};

export default SplitScreen;
