import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm-2.768-3.114a9.919 9.919 0 001.031 1.412 7.506 7.506 0 01-5.726-6.548h3.231c.113 2.248.723 3.902 1.464 5.136zm.039-5.136c.109 1.963.642 3.356 1.247 4.364.487.811 1.021 1.383 1.482 1.838.46-.455.995-1.027 1.482-1.838.605-1.008 1.138-2.4 1.248-4.364H9.27zm5.458-1.5H9.271c.109-1.963.642-3.356 1.247-4.364.487-.811 1.021-1.383 1.482-1.838.46.455.995 1.027 1.482 1.838.605 1.008 1.138 2.4 1.248 4.364zm1.503 1.5c-.113 2.248-.723 3.902-1.464 5.136a9.919 9.919 0 01-1.031 1.412 7.506 7.506 0 005.726-6.548h-3.231zm3.231-1.5h-3.231c-.113-2.247-.723-3.902-1.464-5.136a9.92 9.92 0 00-1.031-1.412 7.506 7.506 0 015.726 6.548zm-11.695 0H4.537a7.506 7.506 0 015.726-6.548c-.34.39-.698.857-1.031 1.412-.74 1.234-1.351 2.889-1.464 5.136z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
