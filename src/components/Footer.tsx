function Footer() {
  return (
    <footer className='bg-skyblue text-black py-8'>
      <div className='flex flex-col md:flex-row px-8'>
        <div className='flex-1 flex flex-col items-start mb-6 md:mb-0 '>
          <a href='/' className='items-start'>
            <img
              src='logo_negro.webp'
              alt='logo_negro'
              className='h-24 w-auto'
            />
          </a>
          <p className='text-md text-start mt-2'>
            Somos tu aliado en la nube, desarrollando soluciones personalizadas
            para que alcances tus objetivos con tecnología eficiente y segura.
            Nos enfocamos en entender tus necesidades y superar tus
            expectativas.
          </p>
        </div>

        <div className='flex-1 sm:px-4 mb-6 md:mb-0 sm:text-xl items-start sm:items-center'>
          <h3 className='text-xl mb-2 text-start sm:text-center'>
            Quick Links
          </h3>
          <ul className='list-none p-0 flex flex-col space-y-2 items-start sm:items-center'>
            <li>
              <a href='/about' className='hover:text-positivegreen'>
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href='/services' className='hover:text-positivegreen'>
                Servicios
              </a>
            </li>
            <li>
              <a href='/contact' className='hover:text-positivegreen'>
                Contacto
              </a>
            </li>
            <li>
              <a href='/privacy' className='hover:text-positivegreen'>
                Política de Privacidad
              </a>
            </li>
          </ul>
        </div>

        <div className='flex-1 sm:px-4 mb-6 md:mb-0 text-xl sm:text-center'>
          <h3 className='font-bold mb-2'>Información</h3>

          <div className='flex items-center justify-start sm:justify-center text-center mb-2'>
            <i className='fa-brands fa-whatsapp text-blue-500 text-2xl'></i>
            <span className='ml-2'>+56 9 5690 3556</span>
          </div>

          <div className='flex items-center justify-start sm:justify-center text-center mb-2'>
            <i className='fa-solid fa-envelope text-blue-500 text-2xl'></i>
            <span className='ml-2'>Info@Cloudanddigital.Cl</span>
          </div>

          <div className='flex items-center justify-start sm:justify-center text-center'>
            <i className='fa-solid fa-location-dot text-blue-500 text-2xl'></i>
            <span className='ml-2'>Toromazote 135, San Felipe.</span>
          </div>
        </div>
      </div>

      <div className='border-t border-gray-400 mt-6 pt-4 w-3/4 mx-auto text-center'>
        <p className='text-sm'>
          &copy; {new Date().getFullYear()} Derechos reservados Cloud and
          Digital SpA.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
