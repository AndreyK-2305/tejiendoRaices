import React from 'react';

function Galeria() {
  const filtros = [
    { label: 'Todos', activo: true },
    { label: 'Fotos' },
    { label: 'Videos' },
    { label: 'Documentos' },
    { label: 'Audio' },
  ];
  const tarjetas = [
    { icono: '📷', titulo: 'Celebración del Dabucurí', color: 'bg-green-200' },
    { icono: '🎬', titulo: 'Danza ritual Uwa', color: 'bg-yellow-300' },
    { icono: '📄', titulo: 'Manuscrito de mitos Yukpa', color: 'bg-yellow-200' },
    { icono: '🎧', titulo: 'Canto de arrullo tradicional', color: 'bg-green-400' },
    { icono: '📷', titulo: 'Artesanías en fibra natural', color: 'bg-green-200' },
    { icono: '🎬', titulo: 'Técnicas de pesca ancestral', color: 'bg-yellow-300' },
  ];
  return (
    <main className="w-full min-h-screen bg-yellow-50 flex flex-col items-center py-6 px-2 sm:px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-900 mb-2">Galería Multimedia</h1>
        <p className="text-base sm:text-lg md:text-xl text-yellow-800 mb-8">Archivos visuales y sonoros de nuestro patrimonio cultural</p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch mb-8">
          <div className="flex flex-wrap gap-2 mb-2 sm:mb-0">
            {filtros.map((f, i) => (
              <button
                key={f.label}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition ${f.activo ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-900 hover:bg-yellow-200'}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          
          <div className="flex-1 flex sm:justify-end items-center gap-2">
            <button className="bg-green-200 text-green-900 font-bold px-4 py-2 rounded-full text-sm">Traductor IA</button>
            <span className="text-xs sm:text-sm text-gray-700">Español → Barí</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {tarjetas.map((t, i) => (
            <div key={i} className={`rounded-lg shadow p-4 md:p-6 flex flex-col items-center ${t.color} min-h-[120px] md:min-h-[150px] justify-center`}>
              <span className="text-2xl md:text-3xl mb-2 md:mb-4">{t.icono}</span>
              <span className="block text-center text-yellow-900 font-medium text-sm md:text-base">{t.titulo}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="rounded-full border border-yellow-700 px-3 py-1 text-yellow-700 text-sm">&lt;</button>
          <span className="px-2 text-yellow-900 text-sm md:text-base">1 2 3 ... 8</span>
          <button className="rounded-full border border-yellow-700 px-3 py-1 text-yellow-700 text-sm">&gt;</button>
        </div>
      </div>
    </main>
  );
}

export default Galeria; 