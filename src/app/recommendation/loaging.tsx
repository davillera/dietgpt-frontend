import { CircularProgress } from "@mui/material";

export default function loading() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray text-white">
        <h2 className="text-center text-xl font-montserrat font-semibold">
          Estamos haciendo un poco de MAG
          <span className="text-green font-bold">IA</span>
        </h2>
        <CircularProgress color="success" />
      </div>
    </>
  );
}
