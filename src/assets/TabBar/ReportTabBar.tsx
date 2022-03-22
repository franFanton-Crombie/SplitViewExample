import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

/**
 * @param {{
 *  custom?: keyof Icons
 *  size?: number
 * }} props
 */
const ReportTabBar = ({...props}) => (
  <Svg
    width={props.size || 10}
    height={props.size || 10}
    viewBox="0 0 18 18"
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 1a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V1Zm2 1v12h9V2H5Zm7 2H7v4h5V4ZM7 9h5v2H7V9ZM2 7H0v2h2V7ZM0 3h2v2H0V3Zm2 8H0v2h2v-2Z"
      fill={props.color || 'currentColor'}
    />
  </Svg>
);

export default ReportTabBar;
