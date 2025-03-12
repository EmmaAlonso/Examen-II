import StudenTable from "app/components/StudenTable";


export default function Home() {
  return (

    /* Lo que esta pasando es que importe el componente StudenTable y bajo de return puse StudenTable para que reconiera la importacacion
    ya que en este tengo las tablas y las opcciones de todo en la pagina principal */

    <>
      <h1 className="text-4xl text-center mt-8">
        ¿Crees poder lograrlo? Si no confias en ti, quien lo hará?
      </h1>
      <StudenTable/>
      <h2 className="text-2xl text-center mt-4">
        Aquí debe de verse tu tabla, ¿cuál tabla? Lee el archivo README
      </h2>
    </>
  );
}