// @ts-ignore
import * as React from "react"

// @ts-ignore
function Logo(props) {
    return (
        <div
        {...props}
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: "32px",
          fontWeight: 700,
          color: "#0F3A24",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span style={{ color: "#0F3A24" }}>Care</span>
        <span style={{ color: "#2BB673", marginLeft: "4px" }}>sync</span>
      </div>
    )
}

export default Logo
