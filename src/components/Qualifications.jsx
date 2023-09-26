const Qualifications = () => {
  return (
    <div className="bg-slate-50 w-full h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold mb-10 justify-center items-center text-center">You can qualify if you are enrolled in any of these programs:</h2>
      <ul className="text-2xl list-disc">
        <li>CalFresh, Food Stamps</li>
        <li>Medicaid/Medi-Cal</li>
        <li>Supplemental Security Income (SSI)</li>
        <li>Pell Grant Recipients in the Current Year</li>
        <li>Federal Public Housing Assistance or Section 8</li>
        <li>Women, Infants and Children Program (WIC)</li>
        <li>National School Lunch Program (NSLP)</li>
        <li>Bureau of Indian Affairs General Assistance</li>
        <li>Income Eligibility</li>
      </ul>
      <button className="bg-blue-500 text-white text-2xl p-2 m-2 w-[15rem] rounded-md shadow-lg">Do I qualify</button>
    </div>
  );
}

export default Qualifications;