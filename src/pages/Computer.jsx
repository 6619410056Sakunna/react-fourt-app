import ProductHeader from "../components/ProductHeader";
import Footer from "../components/Footer";


export default function Computer() {
  return (
    <>
      <a href="/product" style={{ textDecoration: "none" }}>
        <ProductHeader />
      </a>
      <h2 style={{ textAlign: "center", color: "#1f22ca" }}>Computer Page</h2>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, odio,
        inventore quibusdam voluptatem aliquid eius quos tempora veritatis
        molestias quia culpa hic dignissimos harum et labore amet ea odit est.
        Ea voluptatum consequatur possimus reprehenderit nihil? Accusantium
        deleniti, maiores aspernatur modi ipsum, itaque accusamus, labore non
        inventore id ad possimus.
      </p>
      <Footer />
    </>
  );
}
