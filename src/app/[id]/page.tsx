import Image from "next/image";
import Link from "next/link";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";
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
    title: `Your Table Number : ${guest?.table}`,
    description: `Majlis Perkahwinan Anwar & Puteri`,
    openGraph: {
      title: `Your Table Number : ${guest?.table}`,
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
            <div className="flex flex-col items-center justify-center text-center text-sm font-[family-name:var(--font-cinzel)]">
              <p className="text-[12px] font-bold">
                Assalamualaikum & Salam Sejahtera
              </p>
              <p className="text-[12px] max-w-64 ">
                YAM / YM / Tan Sri / Puan Sri / Dato’ Sri / Datin Sri / Dato’ /
                Datin / Tuan / Puan
              </p>
              <h4 className="max-w-72 w-full font-bold mt-3 px-2 py-1 bg-gradient-to-r from-[#97753E] via-[#bda24c] to-[#97753E] rounded-lg text-white text-sm">
                {allName}
              </h4>
              <h4 className="mt-2">
                {family.length > 1 ? "(" + family.length + " Pax)" : ""}
              </h4>
            </div>
            <TableNumber table_no={table_no} />
          </div>
        </div>
        <div className="p-10 flex text-center flex-col gap-3 items-center justify-center  font-[family-name:var(--font-cinzel)]">
          <span className="text-[#97753E]  font-bold ">
            *Registration Starts From 6.30 P.M.*
          </span>
          <span className="shadow-xl text-white font-bold rounded-md w-full text-center py-2 bg-gradient-to-r from-[#97753E] via-[#bda24c] to-[#97753E]">
            Date: 14 December 2024 (Saturday)
          </span>
          <span className="font-bold text-xl text-center text-[#97753E] ">
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

          <span className="shadow-lg text-[#97753E] w-full font-bold rounded-md py-2 border-[#97753E] border-2 text-center bg-white/30 backdrop-blur-lg">
            Dress Code:
            <br />
            Baju Melayu/ Batik & Baju Kurung
          </span>
        </div>

        <div className="h-full w-full relative flex justify-center items-center max-w-md">
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
              className="flex items-center justify-center text-center shadow-lg text-white font-bold rounded-md px-3 py-2 bg-gradient-to-r from-[#97753E] via-[#F9DD7E] to-[#97753E] font-[family-name:var(--font-cinzel)]"
              href={`https://jdinvite.com/anwar-puteri/ `}
            >
              CLICK TO OPEN E-KAD
            </Link>
          </div>
        </div>
        <div className="w-[350px] relative aspect-square backdrop-blur-lg bg-white/30 shadow-lg rounded-t-lg mx-5">
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
  const elementsPerRow = 6; // Number of elements per row
  const totalLeftElements = 35; // Total elements in the Left Wing Table

  // Function to create rows of elements with specific alignment and ordering
  const createRows = (
    start: number,
    end: number,
    align: "right" | "center",
    reverseRows: number[] = []
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
            } size-[20px] flex items-center justify-center rounded-full border border-black relative`}
          >
            {j.toString() === table_no && (
              <>
                <IoArrowDown className="absolute -top-4" />
                <IoArrowUp className="absolute -bottom-4" />
              </>
            )}

            <p className="text-[8px] text-center">{j}</p>
          </div>
        );
      }

      // Reverse the order for specified rows
      if (reverseRows.includes(rows.length + 1)) {
        row.reverse();
      }

      // Adjust row alignment based on alignment setting
      rows.push(
        <div
          key={`row-${i}`}
          className={`flex w-fit gap-1 mb-4 ${
            align === "center"
              ? "justify-center"
              : align === "right"
              ? "justify-end"
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
    <div className="flex items-center flex-col h-full w-full gap-5 pt-36 pb-[200px] px-3 max-w-md">
      <div className="border-t border-b border-[#BE9946] w-full h-1" />
      <h3 className="text-[#BE9946] font-bold text-3xl font-[family-name:var(--font-cinzel)]">
        EVENT LAYOUT
      </h3>
      <div className="border-t border-b border-[#BE9946] w-full h-1" />
      <div className="flex justify-between items-center gap-10">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-center bg-white py-0 my-0 border items-center justify-center border-black w-full">
            LED SCREEN
          </span>
          <span className="font-bold text-[10px] w-20 py-3 flex items-center justify-center bg-emerald-300 border-black border text-center">
            PIANO
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-center w-20 bg-white py-0 my-0 border items-center justify-center border-black">
            LED SCREEN
          </span>
          <span className="font-bold text-[10px] px-2 py-3 flex items-center justify-center bg-pink-300 border-black border text-center">
            PELAMIN STAGE
          </span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] text-center bg-white py-0 my-0 border items-center justify-center border-black w-full">
            LED SCREEN
          </span>
          <span className="font-bold text-[10px] w-20 py-3 flex items-center justify-center bg-emerald-300 border-black border text-center">
            BAND
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full border-black border">
        <p className="text-[10px] font-bold text-center">MAIN TABLE</p>
      </div>

      <div className="flex w-full gap-3 h-full">
        <div className="flex h-fit w-4 px-1 items-center justify-center bg-pink-300 border-black border">
          <p className="text-center font-bold text-[10px]">
            B U F F E T L I N E
          </p>
        </div>

        {/* Left Wing Table */}
        <div className=" w-1/2 flex-col flex ">
          <div className="flex flex-col w-full items-center justify-center">
            <div className="flex flex-col items-end">
              {createRows(1, totalLeftElements, "right", [2, 4, 6])}
            </div>
          </div>
          <div className="w-full bg-red-300 h-7 flex items-center justify-center border-black border">
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
        <div className=" w-1/2 flex-col flex ">
          <div className="flex flex-col w-full items-center justify-center">
            {createRows(36, 69, "center", [3, 5])}
          </div>
          <div className="w-full bg-red-300 h-7 flex items-center justify-center border-black border">
            <p className="text-center font-bold text-[10px]">RIGHT WING</p>
          </div>
        </div>
        <div className="flex h-fit w-4 px-1 items-center justify-center bg-pink-300 border-black border">
          <p className="text-center font-bold text-[10px]">
            B U F F E T L I N E
          </p>
        </div>
      </div>
      <div className="border-t border-b border-[#BE9946] w-full h-1 mt-10" />
    </div>
  );
};

const TableNumber = ({ table_no }: { table_no?: string }) => (
  <div className="w-full flex justify-center items-center flex-col  font-[family-name:var(--font-cinzel)]">
    <p className="text-sm text-center">Table No:</p>
    <div className="text-sm flex items-center flex-col gap-2 ">
      <Image
        className=""
        src="/goldcircle.png"
        alt="Globe icon"
        width={150}
        height={150}
      />
      <div className="absolute h-[150px] justify-center flex flex-col items-center">
        <h1 className="font-bold text-6xl text-[#B58D4F] text-center">
          {table_no}
        </h1>
        {Number(table_no) <= 35 ? (
          <div className="text-xs text-center">
            <p>LEFT WING</p>
          </div>
        ) : (
          <div className="text-xs text-center">
            <p>RIGHT WING</p>
          </div>
        )}
      </div>
    </div>
    <div className="text-xs text-center">
      <p>Refer To Event Layout Below</p>
    </div>
  </div>
);
