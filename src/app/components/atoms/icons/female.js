import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} {...props}>
      <Path d="M13.75 13a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0M22 12v10H2V12C2 6.5 6.5 2 12 2s10 4.5 10 10M4 12c0 4.41 3.59 8 8 8s8-3.59 8-8c0-.79-.12-1.55-.33-2.26A9.974 9.974 0 019.26 5.77c-.98 2.39-2.85 4.32-5.21 5.37-.05.28-.05.57-.05.86m5 2.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" />
    </Svg>
  )
}

export default SvgComponent
