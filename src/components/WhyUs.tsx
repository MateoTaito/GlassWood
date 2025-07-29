const elements = [
  {
    id: 1,
    title: "Seguridad integrada desde el diseño",
    icon: "fa-solid fa-shield-halved",
  },
  {
    id: 2,
    title: "Acompañamiento claro y cercano",
    icon: "fa-solid fa-handshake",
  },
  {
    id: 3,
    title: "Automatización y eficiencia",
    icon: "fa-solid fa-gears",
  },
  {
    id: 4,
    title: "Agilidad y adaptabilidad",
    icon: "fa-solid fa-bolt",
  },
];


function WhyUs() {
  return (
    <section className="bg-skyblue py-16">
      <h2 className="text-center text-blue text-3xl md:text-4xl font-bold mb-12">
        Nuestro compromiso
      </h2>

      <div className="grid grid-flow-col grid-rows-4 lg:grid-rows-2 gap-5 lg:gap-10 mx-5 w-auto justify-center">
        {elements.map((item) => (
          <div key={item.id} className="flex items-center md:gap-6">
            <div className="bg-white rounded-full shadow-md flex justify-center items-center w-[10rem] h-[10rem]">
              <i className={`${item.icon} text-positivegreen text-[5rem]`}></i>
            </div>
            <p className="text-blue font-semibold text-3xl">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
