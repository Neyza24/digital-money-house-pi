

export default function Home() {
  return (
    <main className="h-screen">
      <section className="flex flex-col justify-between relative h-full">
        <div className="absolute inset-0 z-0 start-0 top-0 overflow-hidden bg-hero-mobile mb:bg-hero-tablet lg:bg-hero-desktop  bg-cover bg-center bg-no-repeat bg-blend-multiply "></div>
        <div className="relative flex flex-col px-5 lg:px-12 py-10 pb-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-regular text-start text-white mb-2">
            De ahora en <br /> adelante, hacés <br /> más con tu dinero
          </h1>
          <div className="h-1 bg-primary rounded-full w-1/4 my-4 sm:hidden"></div>
          <h3 className="text-2xl md:text-4xl font-regular text-start text-primary mt-2">
            Tu nueva <span className="font-semibold">billetera virtual</span>
          </h3>
        </div>

        <div className="relative ">
          <div className="relative z-10 max-w-screen-sm lg:max-w-screen-lg px-5 grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto mb-5 md:mb-16 lg:mb-20">
            <div className="bg-white p-5 rounded-3xl flex flex-col gap-2 ">
              <h3 className="text-2xl md:text-4xl font-bold pb-2">
                Tranferí dinero
              </h3>
              <hr className="border-t-2 border-primary " />
              <p className="pt-2 text-[15px] sm:text-xl">
                Desde Digital Money House vas a poder transferir dinero a otras
                cuentas, asi como también recibir transferencias y nuclear tu
                capital en nuestra billetera virtual
              </p>
            </div>
            <div className="bg-white p-5 rounded-3xl flex flex-col gap-2 ">
              <h3 className="text-2xl md:text-4xl font-bold pb-2">
                Pago de servicios
              </h3>
              <hr className="border-t-2 border-primary " />
              <p className="pt-2 text-[15px] sm:text-xl">
                Pagá mensualmente los servicios en 3 simples clicks. Facil,
                rápido y conveniente. Olvidate de las facturas en papel
              </p>
            </div>
          </div>

          <div className="absolute inset-0 bg-primary z-0 top-1/4 sm:1/2 rounded-t-3xl"></div>
        </div>
      </section>
    </main>
  );
}
