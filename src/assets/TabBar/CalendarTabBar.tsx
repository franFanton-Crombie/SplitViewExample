import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
/**
 * @param {{
 *  custom?: keyof Icons
 *  size?: number
 * }} props
 */
const CalendarTabBar = ({...props}) => (
  <Svg
    width={props.size || 10}
    height={props.size || 10}
    viewBox="0 0 18 18"
    fill="none"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 0H5v1H2.25A2.258 2.258 0 0 0 0 3.267v12.466A2.258 2.258 0 0 0 2.25 18h13.5A2.258 2.258 0 0 0 18 15.733V3.267A2.258 2.258 0 0 0 15.75 1H13V0h-2v1H7V0Zm4 4V3H7v1H5V3H2v13h14V3h-3v1h-2Zm-5 9v-2H4v2h2Zm0-6v2H4V7h2Zm4 4H8v2h2v-2ZM8 7h2v2H8V7Zm6 2V7h-2v2h2Z"
      fill={props.color || 'currentColor'}
    />
  </Svg>
);

export default CalendarTabBar;
