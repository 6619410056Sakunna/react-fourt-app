import Header from "./../components/Header";
import Footer from "./../components/Footer";
import NavBarMain from "./../components/NavBarMain";
import hero from "./../assets/hero.png";


export default function Home() {
  return (
    <>
      <NavBarMain />
      <Header />
      <h2 style={{ textAlign: "center", color: "#222fda" }}>Home Page</h2>
      <p style={{ textAlign: "center" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste itaque laudantium deleniti aspernatur doloremque voluptatem ipsa cupiditate consequuntur, minima quia totam esse unde ex sapiente, natus eligendi perferendis quaerat consequatur.
      </p>
      <Footer />
      {/* การแสดงรูปจากpublic */}
      <img src="super.png" alt="super" style={{width:"100px"}} />
      {/* การแสดงรูปจากassers */}
      <img src={hero} alt="hero" style={{width:"200px"}} />
    </>
  );
}
