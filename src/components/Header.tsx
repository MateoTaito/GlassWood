function Header() {
  return (
    <header className='text-white p-4 h-[max(100vh,50rem)] flex flex-col justify-evenly lg:px-28 py-40'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-blue sm:text-white text-5xl font-bold'>
          Plataformas que hacen<br></br> crecer tu negocio
        </h1>
        <h3 className='text-skyblue sm:text-white text-3xl font-light'>
          Diseñamos, desarrollamos y protegemos <br></br>soluciones digitales a
          tu medida
        </h3>
      </div>
      <button
        className='bg-skyblue border-skyblue text-black text-2xl border-2 border-solid w-fit h-auto rounded-xl p-5 lg:p-8 hover:bg-positivegreen hover:text-white hover:border-none transition-colors'
        onClick={() => {}}
      >
        Conversemos tu proyecto
      </button>
    </header>
  );
}

export default Header;
