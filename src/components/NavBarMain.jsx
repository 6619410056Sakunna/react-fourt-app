

export default function NavBarMain() {
    const a_style = {
    color: "white",
    textDecoration: "none",
  };
  const div_style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b238d",
    padding: "15px",
    marginBottom: "50px",
    gap: "5px",
  };
  return (
    <>
      <div style={div_style}>
        <a href="/" style={a_style}>HOME</a>
        |
        <a href="/about" style={a_style}> ABOUT</a>
        |
        <a href="/contact" style={a_style}>CONTACT</a>
        |
        <a href="/product" style={a_style}>PRODUCT</a>
      </div>
    </>
  )
}
