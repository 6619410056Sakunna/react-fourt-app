import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";
import ProductLink from "./../components/ProductLink";

export default function Product() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{ textAlign: "center", color: "#222fda" }}>Product Page</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px"}}>
        <ProductLink url="/product/computer" title="COMPUTER" bgcolor="#CCCC99" />
        <ProductLink url="/product/smartphone" title="SMARTPHONE" bgcolor="#CC6666" />
      </div>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsam, porro, corporis animi ratione velit tempora laboriosam quaerat perspiciatis quibusdam incidunt sit nesciunt commodi aut placeat vel! Sit, ut est.
      </p>
      <Footer />
    </>
  )
}
