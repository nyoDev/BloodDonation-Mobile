import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}  viewBox="0 0 24 24" {...props}>
      <Path d="M12 20a6 6 0 01-6-6c0-4 6-10.75 6-10.75S18 10 18 14a6 6 0 01-6 6z" />
    </Svg>
  )
}

export default SvgComponent
