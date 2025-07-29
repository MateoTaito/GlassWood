const elements = [
    {
        id:1,
        title: "Seguridad integrada desde el diseño",
        img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
    {
        id:2,
        title: "Acompañamiento claro y cercano",
        img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
    {
        id:3,
        title: "Automatización y eficiencia",
        img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
    {
        id:4,
        title: "Agilidad y adaptabilidad",
        img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    },
]

function WhyUs() {
  return (
    <section className="bg-skyblue py-16">
      <h2 className="text-center text-blue text-3xl md:text-4xl font-bold mb-12">
        Nuestro compromiso
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-8 mx-5">
        {elements.map((item) => (
          <div key={item.id} className="flex items-center gap-6">
            <div className="bg-white rounded-full shadow-md flex justify-center items-center w-40 h-40">
              <img src={item.img} alt={item.title} className="h-32 w-32 object-contain" />
            </div>
            <p className="text-blue font-semibold text-3xl">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyUs;
