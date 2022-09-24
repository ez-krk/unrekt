import Hero from './components/hero/hero.component';
import Header from './components/header/header.component';
import Table from './components/table/table.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#6abd4c]">
      <Hero />
      <Header />
      <Table />
      <Footer />
    </div>
  );
}

export default App;
