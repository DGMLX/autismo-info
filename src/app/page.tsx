import { PiSealQuestion } from "react-icons/pi";

import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="text-center text-blue-600  bg-center  h-screen bg-no-repeat bg-cover" style={{backgroundImage: `url("/fondo1.jpg")`}}>
        <h1 className="text-4xl pt-10 font-bold">¡Bienvenido!</h1>
        <p className="mt-5 px-5 text-lg text-blue-800 font-medium">En esta página encontrarás información del Trastorno del Espectro Autista (TEA), su definición, aspectos generales y técnicas para trabajar o manejar las desregulaciones emocionales. </p>
        <div className="flex justify-center mt-5 rounded-full">

        <Image src="/img-1.png" className="rounded-full" alt="img" width={250} height={50}/>
        </div>
      </div>


      

      <h2 className="mt-10 text-center text-3xl text-blue-600 font-medium px-4">¿Qué es el Trastorno del Espectro Autista?</h2>


      <p className="mt-5 px-5 text-center text-blue-700 ">El trastorno del Espectro Autista o mas conocido como TEA es un trastorno del neurodesarrollo en la cual el individuo manifiesta dificultades en su funcionamiento personal, social, académico u ocupacional.<br></br> <br></br> El TEA principalmente se caracteriza por déficits persistentes en la comunicación social y la interacción social en múltiples contextos, incluidos los déficits de la reciprocidad social, los comportamientos comunicativos no verbales usados para la interacción social y las habilidades para desarrollar, mantener y entender las relaciones. Además de los déficits de la comunicación social, el diagnóstico del trastorno del espectro autista requiere la presencia de patrones de comportamiento, intereses o actividades de tipo restrictivo o repetitivo.</p>

      
      <section className="bg-blue-200 py-10 px-5 bg-cover bg-center bg-no-repeat h-full mt-10" style={{backgroundImage: `url("/fondo-2.jpg")`}} >

          <div className="flex  items-center justify-center mt-60">

          <PiSealQuestion className="text-blue-500 text-4xl"/>
          <h2 className=" text-blue-700 text-2xl px-2 font-medium">Dato curioso</h2>
          <PiSealQuestion className="text-blue-500 text-4xl"/>
          </div>
          <p className="mt-5 text-blue-900 font-medium text-center">Las mujeres no son diagnositcada en temprano edad debido a qué los “sintomas” las emascaran (desarollar idea).</p>

          <p className="mt-10  text-blue-900 font-medium text-center" >¿Sabías que antes el TEA se medía por “grados”? Actualmente esto se formuló y fue dividido en “Necesidades de Apoyo”</p>

          

      </section>
      <p className="my-5">¡Aquí te las presentaremos! </p>

      <p className="mb-4">Necesita Ayuda muy notable </p>
      <p>- Comunicación: Muy limitada. Casi no habla o usa pocas palabras. Solo interactúa si es imprescindible.</p>
      <p>- Comportamiento: Muy rígido, no tolera cambios, ansiedad intensa, dificultad para cambiar de tarea. </p>

      <p className="mb-4">Necesita Ayuda notable </p>
      <p>- Comunicación: Lenguaje simple y centrado en temas muy específicos. Poca interacción, incluso con ayuda.</p>
      <p>- Comportamiento: Rigidez evidente, dificultad para adaptarse, ansiedad al cambiar de actividad. </p>


      <p className="mb-4">Necesita Ayuda </p>
      <p>- Comunicación: Puede hablar bien, pero le cuesta mantener una conversación fluida. Sus intentos de hacer amigos a veces fallan.</p>
      <p>- Comportamiento: Algo rígido, le cuesta alternar actividades y organizarse, lo que afecta su independencia.</p>

      <h3 className="mt-10">Manifestaciones Clínicas</h3>
      <p>Gran variabilidad en gravedad y síntomas.</p>

      <h4>Signos de alarma:</h4>

      <p>
        * No sonreír a los 6 meses.
* No balbucear a los 12 meses.
* No señalar ni responder gestos a los 12 meses.
* No decir palabras a los 16 meses.
* No hacer frases de 2 palabras a los 24 meses.
* Pérdida de lenguaje o habilidades sociales a cualquier edad.
* Focos principales: dificultades en lenguaje expresivo/comprensivo y en intereses/actividades restringidas.

      </p>

<div className="flex justify-center">

     <Image src="/autismo.jpg"  alt="img" width={350} height={50}/>

      </div>
      <h2>Técnicas para trabajar una         desregulación emocional</h2>

      <p>Las técnicas entregadas mediante esta página son a la hora de abordar una desregulación o situación de necesidad de apoyo, sin embargo ¡recuerda! es vital conocer a nuestros niños desde antes para prevenirlas, el anticipar cada paso que darás y el ambientar un espacio propicio es necesario. </p>

      <p>En situaciones de crisis, es fundamental tener en cuenta ciertas estrategias para ayudar a calmar a las personas con Autismo. A continuación, te presentaremos algunas recomendaciones claves:

</p>

<p>
  Actúa de forma calmada y tranquila, en una crisis el niño suele estar confundido o asustado. Por lo que, su descargo de emociones puede ser negativa, es decir, no reacciones de manera impulsiva. 
</p>

<p>
  Contacto físico, si es que existe una relación ya cercana puedes optar por abrazarlo, sin embargo este contacto no debe ser forzado ni obligado, es muy probable que el niño esté muy nervioso y puede perder el autocontrol por completo.
</p>

<p>
  Retiro del entorno o adaptación del entorno, si a situación se vuelve muy intensa, es recomendable llevar al niño o niña a un lugar tranquilo y seguro.El retirar del entorno desencadenante de la crisis puede ayudar a evitar que la situación empeore.
</p>


<p>Por otra parte, si no puedes optar por retirar al niño, puedes verificar que fue el desencadenante que causó esta crisis, para luego adaptar el entorno a él. O si no puedes realizar este paso, preocúpate por formar un buen ambiente durante y posterior a la desregulación. </p>

<h2>Estrategias Preventivas</h2>
<h3>Estrategias sensoriales</h3>


<p>* Objetos de estimulación (fidgets spinner, pelotas antiestrés, cubos, slime).
* Auriculares con cancelación de ruido para reducir sobrecarga auditiva.
* Mantas con peso para dar presión profunda y sensación de calma.
* Luces suaves o filtros de pantalla para evitar estímulos visuales fuertes.
* Espacios tranquilos (zona de calma) donde poder retirarse.</p>

<h3>Estrategias físicas</h3>
<p>* Ejercicios de respiración profunda (por ejemplo, inhalar 4 segundos, exhalar 6).
* Movimientos rítmicos (balancearse, caminar, saltar suave en mini trampolín).
* Técnicas de tensión y relajación muscular.
* Estiramientos o yoga adaptado.</p>

<h3> Estrategias cognitivas</h3>
<p>* Uso de guiones sociales para anticipar interacciones.
* Listas visuales o pictogramas para estructurar el día.
* Técnicas de auto-instrucción (“Primero respiro, luego pienso, después actúo”).</p>

<h2>Punto Clave</h2>

<p>Proporcionar un espacio físico acogedor y organizado puede ayudar a reducir la ansiedad y el estrés en las niños y niñas con Autismo.</p>
    </main>
  );
}
