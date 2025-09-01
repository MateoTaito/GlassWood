function AboutUs() {
  return (
    <div className='h-[calc(100vh*1/2)] bg-white flex flex-col justify-evenly items-center text-start p-8'>
      <h2 className='text-2xl lg:text-6xl text-center leading-snug'>
        <span className='text-blue-300'>Más que código</span> <br />
        <span className='text-blue'>somos aliados</span> <br />
        <span className='text-blue-300'>en tu transformación digital</span>
      </h2>

      <p className='text-blackc lg:text-2xl'>
        Creamos plataformas digitales que resuelven necesidades reales. <br />
        Desde academias virtuales hasta sistemas logísticos, te entregamos
        soluciones pensadas para tu negocio, <br />
        no para el promedio.
        <br />
      </p>
    </div>
  );
}

export default AboutUs;
