import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";

export default function About() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{ textAlign: "center", color: "#1f22ca" }}>About</h2>
      <p style={{ textAlign: "center" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero totam, cumque praesentium expedita mollitia rem qui nostrum, delectus dolores excepturi atque, soluta beatae magni laboriosam recusandae incidunt corporis consequuntur.
      </p>
      <Footer />
    </>
  );
}
