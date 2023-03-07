import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M4 4.774C4 4.347 4.336 4 4.75 4h14.5c.414 0 .75.347.75.774a.762.762 0 01-.75.774H4.75A.762.762 0 014 4.774zM4 12c0-.428.336-.774.75-.774h14.5c.414 0 .75.346.75.774a.762.762 0 01-.75.774H4.75A.762.762 0 014 12zM4.75 18.452a.762.762 0 00-.75.774c0 .427.336.774.75.774h14.5c.414 0 .75-.347.75-.774a.762.762 0 00-.75-.774H4.75zM10.5 8.387c0-.427.336-.774.75-.774h8c.414 0 .75.347.75.774a.762.762 0 01-.75.774h-8a.762.762 0 01-.75-.774zM4.75 7.613a.762.762 0 00-.75.774c0 .428.336.774.75.774h3.5c.414 0 .75-.346.75-.774a.762.762 0 00-.75-.774h-3.5zM13.5 15.613a.762.762 0 01-.75.774h-8a.762.762 0 01-.75-.774c0-.428.336-.774.75-.774h8c.414 0 .75.346.75.774zM19.25 16.387c.414 0 .75-.346.75-.774a.762.762 0 00-.75-.774h-3.5a.762.762 0 00-.75.774c0 .428.336.774.75.774h3.5z"
        fill={props.fill || '#000'}
      />
    </Svg>
  );
}

export default SvgComponent;
