import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

/**
 * @param {{
 *  custom?: keyof Icons
 *  size?: number
 * }} props
 */
const MaintenanceTabBar = ({...props}) => (
  <Svg
    width={props.size || 10}
    height={props.size || 10}
    viewBox="0 0 17 17"
    fill="none"
    {...props}>
    <Path
      d="M15.813 4.188c-.063-.188-.281-.22-.437-.094l-2.529 2.531a.49.49 0 0 1-.687 0l-1.78-1.781a.49.49 0 0 1 0-.688l2.56-2.531c.126-.125.063-.344-.093-.438A4.969 4.969 0 0 0 11.505 1C8.85 1 6.728 3.281 7.04 6c.062.438.156.813.312 1.188L1.515 13c-.687.688-.687 1.813 0 2.469.343.344.812.531 1.249.531.437 0 .905-.188 1.248-.531L9.82 9.656c.374.156.78.25 1.186.313C13.721 10.28 16 8.156 16 5.5c0-.469-.062-.906-.187-1.313Z"
      stroke={props.color || 'currentColor'}
      strokeWidth={2}
    />
  </Svg>
);

export default MaintenanceTabBar;
