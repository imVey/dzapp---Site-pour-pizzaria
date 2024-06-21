import Image from "next/image";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center mb-12">
        <h1 className="text-4xl font-bold mb-4">D-zap</h1>
        <p className="text-lg">
          Une pizzaria familiale qui vous offre des pizzas de qualité et des
          délicieuses saveurs.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-2xl font-bold mb-4">About Us</h2>
        <p className="text-lg">
          D-zap est une pizzaria familiale qui a ouvert ses portes en 2022. Nous
          avons pour mission de vous offrir des pizzas de qualité et des
          délicieuses saveurs, tout en respectant l'environnement et les valeurs
          de notre communauté.
        </p>
        <p className="text-lg">
          Notre équipe est composée de passionnés de la cuisine italienne et de
          pizza, qui travaillent ensemble pour vous fournir un service
          exceptionnel. Nous sommes toujours à l'écoute de vos suggestions et de
          vos commentaires, afin de nous améliorer et de vous satisfaire.
        </p>
        <p className="text-lg">
          D-zap est situé à [Votre adresse], et nous sommes ouverts de [Heures
          d'ouverture]. Nous vous souhaitons un bon appétit et une bonne visite!
        </p>
      </section>

      <section className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Nos Produits</h2>
        <div className="flex gap-4">
          <Image src="/pizza.jpg" alt="Pizza" width={200} height={200} />
          <Image src="/pate.jpeg" alt="Pasta" width={200} height={200} />
          <Image src="/tiramisu.jpeg" alt="Dessert" width={200} height={200} />
        </div>
      </section>
    </main>
  );
};

export default About;
