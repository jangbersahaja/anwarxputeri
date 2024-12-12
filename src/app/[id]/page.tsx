import Image from "next/image";
import Link from "next/link";
import { MdArrowUpward } from "react-icons/md";
import { guestlist } from "../../../public/guest";
import Countdown from "../components/Countdown";

type tParams = Promise<{ id: string }>;

export async function generateMetadata(props: { params: tParams }) {
  // read route params

  const { id } = await props.params;
  const guestID = id;
  const guest = guestlist.find((guest) => guestID === guest.id);

  return {
    title: `Your Table Number is ${guest?.table}`,
    description: `Majlis Perkahwinan Anwar & Puteri`,
    openGraph: {
      title: `Your Table Number is ${guest?.table}`,
      description: `Majlis Perkahwinan Anwar & Puteri`,
      images: [
        {
          url: "/crest.png",
          width: 150,
          height: 150,
        },
      ],
    },
  };
}

export default async function Home(props: { params: tParams }) {
  const { id } = await props.params;
  const guestID = id;
  const guest = guestlist.find((guest) => guestID === guest.id);
  const family = guestlist.filter(
    (g) => guest?.phone === g.phone && guest.table === g.table
  );
  const allName = family
    .map((y) => y.name)
    .filter((name, index, self) => name && self.indexOf(name) === index) // Exclude duplicates and empty names
    .reduce((acc, name, index, array) => {
      if (index === 0) return name; // First name
      if (index === array.length - 1) return `${acc} & ${name}`; // Last name
      return `${acc}, ${name}`; // Intermediate names
    }, "");
  const table_no = guest?.table;

  return (
    <div className="w-full bg-white">
      <main className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#F9DD7E]/30 via-[#97753E]/10 to-[#F9DD7E]/30">
        <div className="flex relative h-full w-full items-center">
          <div className="flex absolute w-full h-full">
            <Image
              className=""
              src="/goldflower.png"
              alt="Globe icon"
              fill
              quality={100}
              priority
              style={{
                objectFit: "contain",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col gap-5 items-center w-full justify-center py-36 z-10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-sm font-[family-name:var(--font-cinzel)]">
                <p className="text-[12px] font-bold">
                  Assalamualaikum & Salam Sejahtera
                </p>
                <p className="text-[12px] max-w-64 ">
                  YAM / YM / Tan Sri / Puan Sri / Dato’ Sri / Datin Sri / Dato’
                  / Datin / Tuan / Puan
                </p>
                <h4 className=" max-w-72  font-bold mt-3 px-2 py-1 bg-gradient-to-r from-[#97753E] via-[#bda24c] to-[#97753E] rounded-lg text-white text-sm ">
                  {allName}
                </h4>
                <h4 className="mt-2">
                  {family.length > 1 ? "(" + family.length + " Pax)" : ""}
                </h4>
              </div>
            </div>
            <TableNumber table_no={table_no} />
          </div>
        </div>
        <div className="p-10 flex text-center flex-col gap-3 items-center justify-center  font-[family-name:var(--font-cinzel)]">
          <span className="text-[#97753E]  font-bold ">
            *Pendaftaran Bermula Jam 6.30 Petang*
          </span>
          <span className="shadow-xl text-white font-bold text-lg rounded-md w-full text-center py-2 bg-gradient-to-r from-[#97753E] via-[#bda24c] to-[#97753E]">
            Tarikh: 14 Disember 2024 (Sabtu)
          </span>
          <span className="font-bold text-2xl text-center text-[#97753E] ">
            Palace of The Golden Horses,<br></br> Seri Kembangan
          </span>
          <div className="flex justify-evenly gap-2 w-full">
            <Link
              className="shadow-lg text-sm text-white font-bold py-2 bg-gradient-to-r from-[#97753E] via-[#bda24c] to-[#97753E] w-1/2 rounded-md flex items-center justify-center"
              href={`https://maps.app.goo.gl/HHrVUE2Sxr382LX1A`}
              target="_blank"
            >
              Google Map
            </Link>
            <Link
              className="shadow-lg text-sm text-white font-bold py-2 bg-gradient-to-r from-[#97753E] via-[#bda24c] to-[#97753E] w-1/2 rounded-md flex items-center justify-center"
              href={`https://ul.waze.com/ul?preview_venue_id=66650142.666566961.327044&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location`}
              target="_blank"
            >
              Waze
            </Link>
          </div>

          <span className="shadow-lg text-[#97753E] w-full font-bold rounded-md py-2 border-[#97753E] border-2 text-center">
            Tema Pakaian:
            <br />
            Baju Melayu/ Batik & Baju Kurung
          </span>
        </div>

        <div className="h-full w-full relative flex justify-center items-center">
          <div className="w-full aspect-square -my-10">
            <Image
              className=""
              src="/floral.png"
              alt="Globe icon"
              fill
              quality={100}
              priority
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div className="absolute flex flex-col justify-center items-center gap-3">
            <Image
              className=""
              src="/crest.png"
              alt="Globe icon"
              width={150}
              height={150}
            />
            <Link
              className="shadow-lg text-white font-bold rounded-md px-3 py-2 bg-gradient-to-r from-[#97753E] via-[#F9DD7E] to-[#97753E]  font-[family-name:var(--font-cinzel)]"
              href={`https://jdinvite.com/anwar-puteri/ `}
            >
              KLIK UNTUK BUKA E-KAD
            </Link>
          </div>
        </div>
        <div className="w-full relative aspect-square">
          <Image
            className=""
            src="/name.png"
            alt="Globe icon"
            fill
            quality={100}
            priority
            style={{
              objectFit: "contain",
            }}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </div>
        <div>
          <Countdown />
        </div>
        <WingTables table_no={table_no} />
      </main>
    </div>
  );
}

const WingTables = ({ table_no }: { table_no?: string }) => {
  // Total elements in the Right Wing Table
  const elementsPerRow = 6; // Number of elements per row

  // Function to create rows of elements
  const createRows = (
    start: number,
    end: number,
    alignLastRow: "center" | "end" | "between"
  ) => {
    const rows = [];
    for (let i = start; i <= end; i += elementsPerRow) {
      const row = [];

      for (let j = i; j < i + elementsPerRow && j <= end; j++) {
        row.push(
          <div
            key={j}
            className={`${
              j.toString() === table_no
                ? "bg-green-500 animate-pulse border-2 border-black"
                : "bg-slate-200"
            } size-[20px] flex items-center justify-center  rounded-full border border-black`}
          >
            <p className="text-[8px]">{j}</p>
          </div>
        );
      }

      // Adjust row alignment based on row size and alignment setting
      rows.push(
        <div
          key={`row-${i}`}
          className={`flex w-full gap-1 mb-4 ${
            row.length < elementsPerRow
              ? alignLastRow === "center"
                ? "justify-center"
                : "justify-end"
              : "justify-between"
          }`}
        >
          {row}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="flex items-center flex-col h-full w-full gap-10 pt-36 pb-44 px-3">
      <h3 className="text-[#BE9946] font-bold text-3xl font-[family-name:var(--font-cinzel)]">
        PELAN MAJLIS
      </h3>
      <div className="border-t border-b border-[#BE9946] w-full h-1" />
      <div className="px-3 py-3 flex items-center justify-center bg-pink-300 border-black border">
        <p className="font-bold text-[10px]">PELAMIN STAGE</p>
      </div>

      <div className="flex items-center justify-center w-10 h-10 bg-orange-400 rounded-full border-black border">
        <p className="text-[10px] font-bold">VVIP</p>
      </div>

      <div className="flex w-full gap-3 h-full">
        <div className="flex h-fit w-4 px-1 items-center justify-center bg-pink-300 border-black border">
          <p className="text-center font-bold text-[10px]">
            B U F F E T L I N E
          </p>
        </div>

        {/* Left Wing Table */}
        <div className=" w-1/2 flex-col">
          <div className="flex flex-col w-full">{createRows(1, 35, "end")}</div>
          <div className="w-full bg-yellow-300 h-8 flex items-center justify-center border-black border">
            <p className="text-center font-bold text-[10px]">LEFT WING</p>
          </div>
        </div>

        {/* Entrance */}
        <div className="flex items-end ">
          <div className="flex h-fit w-4 -mb-8 px-1 items-center justify-center bg-yellow-300 border-black border">
            <p className="text-center font-bold text-[10px] ">
              <MdArrowUpward className="text-sm" /> E N T R A N C E
            </p>
          </div>
        </div>

        {/* Right Wing Table */}
        <div className="w-1/2 flex-col">
          <div className="flex flex-col w-full">
            {createRows(36, 69, "center")}
          </div>
          <div className="w-full bg-yellow-300 h-8 flex items-center justify-center border-black border">
            <p className="text-center font-bold text-[10px]">RIGHT WING</p>
          </div>
        </div>
        <div className="flex h-fit w-4 px-1 items-center justify-center bg-pink-300 border-black border">
          <p className="text-center font-bold text-[10px]">
            B U F F E T L I N E
          </p>
        </div>
      </div>
      <div className="border-t border-b border-[#BE9946] w-full h-1" />
    </div>
  );
};

const TableNumber = ({ table_no }: { table_no?: string }) => (
  <div className="w-full flex justify-center items-center flex-col  font-[family-name:var(--font-cinzel)]">
    <p className="text-sm">Nomber Meja:</p>
    <div className="text-sm flex items-center flex-col gap-2 ">
      <Image
        className=""
        src="/goldcircle.png"
        alt="Globe icon"
        width={150}
        height={150}
      />
      <div className="absolute h-[150px] justify-center flex flex-col items-center">
        <h1 className="font-bold text-6xl text-[#B58D4F]">{table_no}</h1>
        {Number(table_no) <= 35 ? (
          <div className="text-xs">
            <p>LEFT WING</p>
          </div>
        ) : (
          <div className="text-xs">
            <p>LEFT WING</p>
          </div>
        )}
      </div>
    </div>
    <div className="text-xs">
      <p>Sila rujuk pelan majlis di bawah</p>
    </div>
  </div>
);
