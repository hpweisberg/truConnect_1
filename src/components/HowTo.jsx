const HowTo = () => {
  return (
    <div className="bg-green-200 h-[40rem] flex flex-col justify-center gap-10 items-center">
      <h1 className="text-center text-4xl font-bold">HOW TO GET ENROLLED</h1>
      <section className="flex justify-center gap-4">
        <div className="HowToCard">
          <p>Apply HERE</p>
        </div>
        <div className="HowToCard">
          <p>If approved, you'll receive a package in mail</p>
        </div>
        <div className="HowToCard">
          <p>Activate SIM card (instructions included)</p>
        </div>
        <div className="HowToCard">
          <p>Port your number (optional)</p>
        </div>
      </section>
      <button className="bg-blue-500 text-white text-2xl p-2 m-2 w-[15rem] rounded-md shadow-lg">Qualify now</button>
    </div>
  );
}

export default HowTo;