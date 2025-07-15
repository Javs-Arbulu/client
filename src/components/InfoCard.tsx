import { useEffect, useState } from "react";
import axios from "axios";

interface InfoData {
  title: string;
  version: string;
  author: string;
}

export default function InfoCard() {
  const [info, setInfo] = useState<InfoData | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/info")
      .then((res) => setInfo(res.data))
      .catch(() => console.error("No se pudo obtener la info del backend"));
  }, []);

  if (!info) return <p>Cargando información...</p>;

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-2">{info.title}</h2>
      <p>Versión: {info.version}</p>
      <p>Autor: {info.author}</p>
    </div>
  );
}
