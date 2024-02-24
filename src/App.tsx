import { useEffect, useState } from "react";
import { Navbar } from "@/pages/Navbar";
import { SelectedPage } from "@/shared/types/types";
import { Home } from "@/pages/Home";
import { Benefits } from "@/pages/Benefits";
import { ContactUs } from "@/pages/ContactUs";
import { Footer } from "./pages/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTop, setIsTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setIsTop(true);
        setSelectedPage(SelectedPage.Home);
      }

      if (window.scrollY != 0) setIsTop(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTop={isTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
