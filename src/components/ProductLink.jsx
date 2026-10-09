

export default function ProductLink({ url, title ,bgcolor}) {
  const a_link = {
    textDecoration: "none",
    color: "white",
    padding: "6px 10px",
    backgroundColor: bgcolor,
    borderRadius: "5px"

  }

  return (
    <>
      <a href={url} style={{ ...a_link }}>
        {title}
      </a>
    </>
  )
}
