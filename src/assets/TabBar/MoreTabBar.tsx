import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

/**
 * @param {{
 *  custom?: keyof Icons
 *  size?: number
 * }} props
 */
const MoreTabBar = ({...props}) => (
  <Svg
    width={props.size || 10}
    height={props.size || 10}
    viewBox="0 0 20 20"
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 0H0v2h18V0ZM0 6h12v2H0V6Zm0 6h18v2H0v-2Z"
      fill={props.color || 'currentColor'}
    />
  </Svg>
);

export default MoreTabBar;
