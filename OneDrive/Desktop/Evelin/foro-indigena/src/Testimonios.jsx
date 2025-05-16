import React from 'react';

function Testimonios() {
  return (
    <main className="w-full min-h-screen bg-neutral-900 flex flex-col items-center py-6 px-2 sm:px-4">
      <div className="w-full max-w-6xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-100 mb-2">Testimonios y Podcasts</h1>
        <p className="text-base sm:text-lg md:text-xl text-yellow-200 mb-8">Escucha de primera mano las historias que definen nuestras culturas</p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Filtros */}
          <aside className="bg-neutral-800 rounded-lg p-4 md:p-6 w-full md:w-80 mb-4 md:mb-0 border border-neutral-700">
            <h2 className="text-lg md:text-xl font-bold text-yellow-100 mb-4">Filtros</h2>
            <div className="mb-4">
              <span className="block text-yellow-200 font-semibold mb-1">Comunidad</span>
              <button className="w-full bg-neutral-700 text-yellow-100 rounded px-3 py-2 mb-2 text-sm md:text-base">Todas las comunidades</button>
            </div>
            <div className="mb-4">
              <span className="block text-yellow-200 font-semibold mb-1">Tipo</span>
              <div className="flex gap-2">
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base">Video</button>
                <button className="bg-neutral-700 text-yellow-100 px-4 py-2 rounded-full font-semibold text-sm md:text-base">Audio</button>
              </div>
            </div>
            <div className="mb-4">
              <span className="block text-yellow-200 font-semibold mb-1">Temática</span>
              <button className="w-full bg-neutral-700 text-yellow-100 rounded px-3 py-2 mb-2 text-sm md:text-base">Todos los temas</button>
            </div>
            <div className="mb-4">
              <span className="block text-yellow-200 font-semibold mb-1">Fecha</span>
              <button className="w-full bg-neutral-700 text-yellow-100 rounded px-3 py-2 mb-2 text-sm md:text-base">Todas las épocas</button>
            </div>
            <div className="mb-4">
              <span className="block text-yellow-200 font-semibold mb-1">Idioma</span>
              <div className="flex gap-2">
                <button className="bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold text-sm md:text-base">Español</button>
                <button className="bg-neutral-700 text-yellow-100 px-4 py-2 rounded-full font-semibold text-sm md:text-base">Nativo</button>
              </div>
            </div>
            <div className="mt-6">
              <span className="block text-yellow-200 font-semibold mb-2">PODCAST RELACIONADOS</span>
              <div className="bg-neutral-700 text-yellow-100 rounded px-3 py-2 flex justify-between items-center text-xs md:text-base">
                <span>Historias del fogón Barí</span>
                <span className="text-xs">23min</span>
              </div>
            </div>
          </aside>
          {/* Reproductor y contenido */}
          <section className="flex-1 flex flex-col gap-4">
            <div className="bg-neutral-800 rounded-lg flex flex-col items-center justify-center p-4 md:p-8 min-h-[180px] md:min-h-[300px] border border-neutral-700">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-neutral-900 rounded-full flex items-center justify-center">
                <span className="text-4xl md:text-6xl text-green-300">▶</span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-lg md:text-2xl font-bold text-yellow-100">La pesca tradicional en el río Catatumbo</h2>
              <p className="text-yellow-200 text-sm md:text-base">Relatado por: Tarek Asho (Anciano Barí) • 8:42 minutos</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <button className="bg-green-700 text-white font-semibold px-6 md:px-8 py-2 rounded-full flex items-center gap-2 mb-2 md:mb-0 text-sm md:text-base">
                <span className="material-icons">download</span> Descargar Audio
              </button>
              <div className="bg-neutral-800 text-yellow-100 rounded-lg p-3 md:p-4 flex-1 text-xs md:text-base">
                "Nuestros ancestros nos enseñaron a respetar el río, solo tomamos lo que necesitamos...<br />
                la técnica del barbasco permite atrapar los peces sin dañar el ecosistema...<br />
                cuando el río crece, es momento de agradecer a los espíritus del agua..."
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Testimonios; 