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
    <main className="w-screen h-screen bg-yellow-50 flex flex-col items-center py-8">
      <div className="w-full h-full max-w-6xl">
        <h1 className="text-4xl font-bold text-yellow-900 mb-2">Galería Multimedia</h1>
        <p className="text-lg text-yellow-800 mb-8">Archivos visuales y sonoros de nuestro patrimonio cultural</p>
        <div className="flex flex-wrap gap-4 items-center mb-8">
          {filtros.map((f, i) => (
            <button
              key={f.label}
              className={`px-6 py-2 rounded-full font-semibold transition ${f.activo ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-900 hover:bg-yellow-200'}`}
            >
              {f.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2">
            <button className="bg-green-200 text-green-900 font-bold px-6 py-2 rounded-full">Traductor IA</button>
            <span className="text-sm text-gray-700">Español → Barí</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {tarjetas.map((t, i) => (
            <div key={i} className={`rounded-lg shadow p-6 flex flex-col items-center ${t.color} min-h-[150px] justify-center`}>
              <span className="text-3xl mb-4">{t.icono}</span>
              <span className="block text-center text-yellow-900 font-medium">{t.titulo}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className="rounded-full border border-yellow-700 px-4 py-1 text-yellow-700">&lt;</button>
          <span className="px-2 text-yellow-900">1 2 3 ... 8</span>
          <button className="rounded-full border border-yellow-700 px-4 py-1 text-yellow-700">&gt;</button>
        </div>
      </div>
    </main>
  );
}

export default Galeria; 