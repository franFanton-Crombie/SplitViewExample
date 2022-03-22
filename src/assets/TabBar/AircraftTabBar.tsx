import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

/**
 * @param {{
 *  custom?: keyof Icons
 *  size?: number
 * }} props
 */
const AircraftTabBar = ({ ...props }) => (
  <Svg
    width={props.size || 10}
    height={props.size || 10}
    viewBox="0 0 21 21"
    fill="none"
    {...props}
  >
    <Path
      d="M17.721 10.273c1.16-.214 2.155-.644 2.665-1.152.164-.166.263-.325.3-.479a.436.436 0 0 0 .021-.125.43.43 0 0 0-.01-.113c-.025-.16-.111-.312-.263-.464-.47-.467-1.432-.816-2.579-.935-.926-.096-2.022-.022-3.54.08l-.813.053-.925-1.817h.009a.49.49 0 0 0 .321-.144.49.49 0 0 0 .148-.327l.021-.516a.412.412 0 0 0-.434-.436l-.773.032-.132-.26a.485.485 0 0 0 .267-.138.485.485 0 0 0 .148-.326l.021-.519a.41.41 0 0 0-.434-.433l-.709.029-.94-1.847a.501.501 0 0 0-.455-.26L8.613.218a.463.463 0 0 0-.306.134.439.439 0 0 0-.124.423l1.153 4.708a.732.732 0 0 1 .012.13l-.071 1.743c-1.676.112-3.238.282-4.534.492l-.351.06-2.044-2.49a.401.401 0 0 0-.037-.042.569.569 0 0 0-.407-.155l-.476.02a.454.454 0 0 0-.307.131.431.431 0 0 0-.113.443l.772 2.418a.53.53 0 0 1 .014.109l-.01.275a1.598 1.598 0 0 0-.397.269.648.648 0 0 0-.208.43V9.33a.547.547 0 0 0 .175.413c.088.085.21.163.372.235l-.011.28a.56.56 0 0 1-.023.107L.72 12.85a.399.399 0 0 0 .072.435l.002.002c.075.075.18.114.294.11l.489-.022a.67.67 0 0 0 .446-.224l2.264-2.677.347.032c1.285.104 2.84.145 4.508.12l-.072 1.745a.687.687 0 0 1-.024.132l-1.542 4.81a.4.4 0 0 0 .087.42.388.388 0 0 0 .297.11l1.028-.042a.602.602 0 0 0 .472-.296l1.096-1.932.71-.03a.493.493 0 0 0 .324-.145.491.491 0 0 0 .146-.325l.021-.519a.41.41 0 0 0-.378-.433l.154-.27.774-.032a.497.497 0 0 0 .325-.147.486.486 0 0 0 .146-.324l.02-.517a.418.418 0 0 0-.119-.317.417.417 0 0 0-.315-.119h-.005l1.077-1.899c.289-.005.563-.01.823-.013 1.51-.022 2.6-.038 3.534-.21Z"
      fill={props.color || "currentColor"}
    />
  </Svg>
);

export default AircraftTabBar;