import ProductHeader from "./../components/ProductHeader";
import Footer from "./../components/Footer";

export default function Smartphone() {
  return (
    <>
      <a href="/product" style={{ textDecoration: "none" }}> 
        <ProductHeader />
      </a>
      <h2 style={{ textAlign: "center", color: "#1f22ca" }}>Computer Page</h2>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        aliquam corporis reiciendis magnam repellat omnis, excepturi ab impedit
        error ea autem laborum rem praesentium incidunt doloribus? Blanditiis
        odio adipisci deleniti harum. Magni tenetur pariatur itaque, quasi
        dolorum laborum asperiores architecto.
      </p>
      <Footer />
    </>
  );
}
