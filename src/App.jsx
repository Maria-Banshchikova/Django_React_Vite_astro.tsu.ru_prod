import Header from './components/Header';
import NewsFeed from './components/NewsFeed';
import TeachersSection from './components/TeachersSection';
import Students from './components/Students';
import Alumni from './components/Alumni';
import AboutDepartment from './components/AboutDepartment';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <NewsFeed />
      <AboutDepartment />
      <TeachersSection />
      <Students />
      <Alumni/>
      <Footer />
      {/* остальной контент */}
    </>
  );
}
export default App