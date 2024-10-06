import { fetchClothes } from '@utils';
import { HomeProps } from '@types';
//import { fuels, yearsOfProduction } from "@constants";
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from '@components';

export default async function Home({ searchParams }: HomeProps) {
  const allClothes = await fetchClothes({
    // manufacturer: searchParams.manufacturer || "",
    // year: searchParams.year || 2022,
    // fuel: searchParams.fuel || "",
    // limit: searchParams.limit || 10,
    // model: searchParams.model || "",
  });

  const isDataEmpty =
    !Array.isArray(allClothes) || allClothes.length < 1 || !allClothes;

  return (
    <main className="overflow-hidden bg-white">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catalogo de Ropa</h1>
          <p>ENCONTRA LO QUE DESEAS!</p>
        </div>

        <div className="home__filters">
          {/*  <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div> */}
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allClothes?.map((clothes) => (
                <CarCard clothes={clothes} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allClothes.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
