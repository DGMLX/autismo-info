import { PiSealQuestion } from "react-icons/pi";
import { IoArrowRedoOutline } from "react-icons/io5";
import { BiRightArrow } from "react-icons/bi";

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
          <p className="mt-5 text-blue-900 font-medium text-center">Las mujeres no son diagnositcada en temprana edad debido a qué los “sintomas” las emascaran.</p>

          <p className="mt-10  text-blue-900 font-medium text-center" >¿Sabías que antes el TEA se medía por “grados”? Actualmente esto se formuló y fue dividido en “Necesidades de Apoyo”</p>

          

      </section>
    
    <div className="bg-blue-200 pt-5 pb-10 rounded-b-4xl px-2">
        <p className="text-center text-blue-900 font-medium text-2xl">¡Aquí te las presentaremos! </p>

      <div className="mt-10  ">
         <p className="mb-4 text-center text-lg text-blue-600 font-medium">Necesita Ayuda muy notable </p>
         <hr className="text-blue-500"/>
      <p className="flex mt-5"><IoArrowRedoOutline className="text-blue-500 text-5xl mr-2"/>Comunicación: Muy limitada. Casi no habla o usa pocas palabras. Solo interactúa si es imprescindible.</p>
      <p className="flex mt-2"><IoArrowRedoOutline className="text-blue-500 text-5xl mr-2"/> Comportamiento: Muy rígido, no tolera cambios, ansiedad intensa, dificultad para cambiar de tarea. </p>


      </div>


      <div className="mt-10 px-2">
        <p className="mb-4 text-center text-lg text-blue-600 font-medium">Necesita Ayuda notable </p>
        <hr className="text-blue-500"/>
         <p className="flex mt-5"><IoArrowRedoOutline className="text-blue-500 text-5xl mr-2"/>Comunicación: Lenguaje simple y centrado en temas muy específicos. Poca interacción, incluso con ayuda.</p>
      <p className="flex mt-2"><IoArrowRedoOutline className="text-blue-500 text-5xl mr-2"/> Comportamiento: Rigidez evidente, dificultad para adaptarse, ansiedad al cambiar de actividad. </p>
       

      </div>

      <div className="mt-10">

     <p className="mb-4 text-center text-lg text-blue-600 font-medium">Necesita Ayuda  </p>
       <hr className="text-blue-500"/>

       <p className="flex mt-5"><IoArrowRedoOutline className="text-blue-500 text-5xl mr-2"/>Comunicación: Puede hablar bien, pero le cuesta mantener una conversación fluida. Sus intentos de hacer amigos a veces fallan.</p>
      <p className="flex mt-2"><IoArrowRedoOutline className="text-blue-500 text-5xl mr-2"/> Comportamiento: Algo rígido, le cuesta alternar actividades y organizarse, lo que afecta su independencia. </p>
      
      
      </div>

    </div>

    <div className="flex justify-center">
     <Image src="/autismo.jpg"  alt="img" width={350} height={50}/>
      </div>     


  <div className="">
   <h3 className="mt-10 text-3xl text-center text-blue-900 font-medium mb-10">Manifestaciones Clínicas</h3>

<p className="text-center text-blue-900 text-xl px-5">Gran variabilidad en gravedad y síntomas.</p>

     <h4 className="px-10 my-5 text-lg font-medium text-blue-700">Signos de alarma:</h4>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800"/>
  <p className="text-blue-900 font-medium">No sonreír a los 6 meses.</p>
</div>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={18}/>
  <p className="text-blue-900 font-medium">No señalar ni responder gestos a los 12 meses.</p>
</div>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800"/>
  <p className="text-blue-900 font-medium">No balbucear a los 12 meses.</p>
</div>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800"/>
  <p className="text-blue-900 font-medium">No decir palabras a los 16 meses.</p>
</div>


<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={18}/>
  <p className="text-blue-900 font-medium">No hacer frases de 2 palabras a los 24 meses.</p>
</div>



<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={24}/>
  <p className="text-blue-900 font-medium">Pérdida de lenguaje o habilidades sociales a cualquier edad.</p>
</div>

   <p className="text-center  mt-10 text-blue-800">Focos principales: dificultades en lenguaje expresivo/comprensivo y en intereses/actividades restringidas.

      </p>


  </div>



     
      

     

   

<div className=" mt-10 px-5" >
 <h2 className="text-center text-blue-800 text-3xl font-medium mb-5">Técnicas para trabajar una         desregulación emocional</h2>
    
      <p className=" text-blue-800">Las técnicas entregadas mediante esta página son a la hora de abordar una desregulación o situación de necesidad de apoyo, sin embargo ¡recuerda! es vital conocer a nuestros niños desde antes para prevenirlas, el anticipar cada paso que darás y el ambientar un espacio propicio es necesario. </p>

<br />
      <p className=" text-blue-800">En situaciones de crisis, es fundamental tener en cuenta ciertas estrategias para ayudar a calmar a las personas con Autismo. A continuación, te presentaremos algunas recomendaciones claves:
</p>

<br />
<p className="text-blue-800">
  Actúa de forma calmada y tranquila, en una crisis el niño suele estar confundido o asustado. Por lo que, su descargo de emociones puede ser negativa, es decir, no reacciones de manera impulsiva. 
</p>

    <br />

<p className="text-blue-800">
  Contacto físico, si es que existe una relación ya cercana puedes optar por abrazarlo, sin embargo este contacto no debe ser forzado ni obligado, es muy probable que el niño esté muy nervioso y puede perder el autocontrol por completo.
</p>

<br />

<p className="text-blue-800">
  Retiro del entorno o adaptación del entorno, si la situación se vuelve muy intensa, es recomendable llevar al niño o niña a un lugar tranquilo y seguro.El retirar del entorno desencadenante de la crisis puede ayudar a evitar que la situación empeore.
</p>

<br />
<p className="text-blue-800">Por otra parte, si no puedes optar por retirar al niño, puedes verificar que fue el desencadenante que causó esta crisis, para luego adaptar el entorno a él. O si no puedes realizar este paso, preocúpate por formar un buen ambiente durante y posterior a la desregulación. </p>

      </div>


   <div className="flex justify-center">
     <Image src="/inclusion.webp"  alt="img" width={350} height={50}/>
      </div> 


<div className="bg-blue-200 px-5 py-5 rounded-t-4xl">


<h2 className="text-center text-3xl font-medium px-5 mt-10 text-blue-800 mb-10">Estrategias Preventivas</h2>
<h3 className="text-blue-800 font-medium text-xl">Estrategias sensoriales</h3>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={24}/>
  <p className="text-blue-900 font-medium">Objetos de estimulación (fidgets spinner, pelotas antiestrés, cubos, slime)</p>
</div>
<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={24}/>
  <p className="text-blue-900 font-medium"> Auriculares con cancelación de ruido para reducir sobrecarga auditiva.</p>
</div>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={24}/>
  <p className="text-blue-900 font-medium"> Mantas con peso para dar presión profunda y sensación de calma.</p>
</div>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={24}/>
  <p className="text-blue-900 font-medium">Luces suaves o filtros de pantalla para evitar estímulos visuales fuertes.</p>
</div>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={24}/>
  <p className="text-blue-900 font-medium">Espacios tranquilos (zona de calma) donde poder retirarse.</p>
</div>



<h3 className="text-blue-800 font-medium text-xl mt-10">Estrategias físicas</h3>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={30}/>
  <p className="text-blue-900 font-medium">Ejercicios de respiración profunda (por ejemplo, inhalar 4 segundos, exhalar 6)</p>
</div>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={30}/>
  <p className="text-blue-900 font-medium">Movimientos rítmicos (balancearse, caminar, saltar suave en mini trampolín).</p>
</div>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={16}/>
  <p className="text-blue-900 font-medium">Técnicas de tensión y relajación muscular.</p>
</div>


<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={16}/>
  <p className="text-blue-900 font-medium">Estiramientos o yoga adaptado.</p>
</div>

<h3 className="text-blue-800 font-medium text-xl mt-10">Estrategias cognitivas</h3>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={24}/>
  <p className="text-blue-900 font-medium">Uso de guiones sociales para anticipar interacciones.</p>
</div>

<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={24}/>
  <p className="text-blue-900 font-medium">Listas visuales o pictogramas para estructurar el día.</p>
</div>
<div className="flex items-center px-5 mt-2">
  <BiRightArrow className="mr-5 text-blue-800" size={35}/>
  <p className="text-blue-900 font-medium">Técnicas de auto-instrucción (“Primero respiro, luego pienso, después actúo”).</p>
</div>



<h2 className="text-center font-bold text-2xl mt-10 text-blue-800 mb-5">Punto Clave</h2>
 
<p className="text-blue-800 pb-10 text-lg">Proporcionar un espacio físico acogedor y organizado puede ayudar a reducir la ansiedad y el estrés en los niños y niñas con Autismo.</p>
</div>
    </main>
  );
}
