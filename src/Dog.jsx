import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function Dog() {
  const { data, error } = useSWR(
    "https://api.thedogapi.com/v1/images/search",
    fetcher
  );

  if (error) {
    return <div>Error al cargar datos</div>;
  }

  if (!data) {
    return <div>Cargando datos...</div>;
  }

  return (
    <div>
      <h1>Imágenes de perros aleatorias:</h1>
      <ul>
        {data.map((dog) => (
          <li key={dog.id}>
            <img src={dog.url} alt="Perro" />
          </li>
        ))}
      </ul>
    </div>
  );
}
