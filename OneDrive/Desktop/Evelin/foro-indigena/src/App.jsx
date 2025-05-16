import './index.css';
import { Routes, Route, Link } from 'react-router-dom';
import Galeria from './Galeria.jsx';
import Testimonios from './Testimonios.jsx';

function Home() {
  return (
    <>
      {/* Portada */}
      <section className="relative flex flex-col md:flex-row items-center justify-center bg-yellow-100 py-10 px-4 md:px-16">
        <img src="/images/unete.jpg" alt="Arte indígena" className="w-full md:w-1/2 rounded-lg shadow-lg object-cover max-h-96 mb-6 md:mb-0 md:mr-8" />
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-yellow-900">Descubre, Comparte y Aprende sobre las Comunidades Indígenas</h1>
          <p className="text-lg md:text-xl text-yellow-800 mb-6">Un espacio para visibilizar, dialogar y fortalecer la cultura, el arte y los saberes ancestrales de los pueblos indígenas.</p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full shadow transition">Únete a la comunidad</button>
        </div>
      </section>

      {/* Secciones informativas */}
      <section className="py-12 px-4 md:px-16 bg-white" id="temas">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-8 text-center">Explora Temas Relevantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-yellow-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="/images/historiayCultura.JPG" alt="Historia" className="h-16 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-yellow-800">Historia y Cultura</h3>
            <p className="text-gray-700">Conoce la historia, tradiciones y cosmovisión de los pueblos indígenas.</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="/images/arteindigena.jpg" alt="Arte" className="h-16 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-yellow-800">Arte y Simbolismo</h3>
            <p className="text-gray-700">Descubre el arte, los símbolos y la importancia de la expresión artística indígena.</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="/images/foro.jpg" alt="Foro" className="h-16 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-yellow-800">Foro y Debate</h3>
            <p className="text-gray-700">Participa en debates, comparte experiencias y haz preguntas a la comunidad.</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 shadow hover:shadow-lg transition">
            <img src="/images/recursos.jpg" alt="Recursos" className="h-16 mx-auto mb-4" />
            <h3 className="font-bold text-lg mb-2 text-yellow-800">Recursos y Apoyo</h3>
            <p className="text-gray-700">Accede a recursos educativos, noticias y enlaces de interés para las comunidades.</p>
          </div>
        </div>
      </section>

      {/* Espacio para artículos destacados, foros, etc. */}
      <section className="py-12 px-4 md:px-16 bg-yellow-50" id="comunidades">
        <h2 className="text-2xl md:text-3xl font-bold text-yellow-900 mb-8 text-center">Comunidades Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Comunidad Bari */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/images/bari.jpg" alt="Comunidad Bari" className="h-32 w-32 object-cover rounded-full mb-4" />
            <h3 className="font-bold text-lg text-yellow-800 mb-2">Comunidad Bari</h3>
            <p className="text-gray-700 text-center">Guardianes de la selva y el río, los Bari preservan su lengua y tradiciones en la frontera colombo-venezolana.</p>
          </div>
          {/* Comunidad Uwa */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/images/uwa.jpg" alt="Comunidad Uwa" className="h-32 w-32 object-cover rounded-full mb-4" />
            <h3 className="font-bold text-lg text-yellow-800 mb-2">Comunidad Uwa</h3>
            <p className="text-gray-700 text-center">Pueblo ancestral de la Sierra Nevada del Cocuy, reconocidos por su espiritualidad y defensa del territorio.</p>
          </div>
          {/* Comunidad Yukpa */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <img src="/images/yukpa.jpg" alt="Comunidad Yukpa" className="h-32 w-32 object-cover rounded-full mb-4" />
            <h3 className="font-bold text-lg text-yellow-800 mb-2">Comunidad Yukpa</h3>
            <p className="text-gray-700 text-center">Habitantes de la Serranía del Perijá, los Yukpa luchan por la preservación de su cultura y territorio.</p>
          </div>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      {/* Header y navegación */}
      <header className="bg-yellow-700 flex items-center justify-between px-8 py-4 sticky top-0 z-10">
        <div className="flex items-center">
          <span className="font-bold text-2xl text-white">Tejiendo Raíces</span>
        </div>
        <nav className="flex gap-8">
          <Link to="/" className="text-white font-semibold hover:underline">Inicio</Link>
          <a href="#comunidades" className="text-white font-semibold hover:underline">Comunidades</a>
          <Link to="/testimonios" className="text-white font-semibold hover:underline">Testimonios</Link>
          <Link to="/galeria" className="text-white font-semibold hover:underline">Galería</Link>
          <a href="#acerca" className="text-white font-semibold hover:underline">Acerca</a>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/testimonios" element={<Testimonios />} />
      </Routes>
      {/* Footer */}
      <footer className="bg-yellow-900 text-yellow-100 py-8 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold">Tejiendo Raíces</span> © {new Date().getFullYear()}
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Contacto</a>
            <a href="#" className="hover:underline">Política de Privacidad</a>
            <a href="#" className="hover:underline">Términos de Servicio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
