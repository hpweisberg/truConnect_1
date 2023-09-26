const About = () => {
  return (
    <div className="h-[23rem] bg-blue-200 flex flex-col justify-center items-center mx-10 rounded-lg shadow-md p-20">
      <h2 className="text-6xl font-bold mb-10 justify-center items-center text-center">What is the Affordable Connectivity Program?</h2>
      <div className="text-xl mb-2">
        <p className="mb-2">The Affordable Connectivity Program (ACP) is a new, long-term, $14 billion government program that helps pay for internet in low-income households and also helps to pay for devices that are internet-capable, like tablets and laptops.</p>
        <p className="">Claim your FCC Affordable Connectivity Program Benefit & get a Fast Internet Device for $0 Per Month.</p>
      </div>

      <button className="bg-blue-500 text-white text-2xl p-2 m-2 w-[15rem] rounded-md shadow-lg">Do I qualify</button>
    </div>
  );
}

export default About;