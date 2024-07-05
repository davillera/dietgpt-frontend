

export default function loading() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray text-white">
        <div
          className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full"
          role="status"
        ></div>
        <h2 className="text-center text-xl font-montserrat font-semibold">
          Estamos haciendo un poco de MAG
          <span className="text-green font-bold">IA</span>
        </h2>
      
      </div>
    </>
  );
}
