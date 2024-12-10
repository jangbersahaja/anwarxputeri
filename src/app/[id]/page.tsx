import Image from "next/image";
import Link from "next/link";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { guestlist } from "../../../public/guest";
import Countdown from "../components/Countdown";

type tParams = Promise<{ id: string }>;

export default async function Home(props: { params: tParams }) {
  const { id } = await props.params;
  const guestID = id;
  const guest = guestlist.find((guest) => guestID === guest.id);

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
          <div className="flex flex-col gap-5 items-center w-full justify-center pt-36 pb-24">
            <div className="flex flex-col items-center justify-center  text-center">
              <div className="text-sm max-w-64">
                <p>Assalamualaikum dan Salam Sejahtera</p>
                <p>
                  YAM / YM / Tan Sri / Puan Sri / Dato’ Sri / Datin Sri / Dato’
                  / Datin / Tuan / Puan
                </p>
                <h4 className="font-bold mt-3 px-2 py-1 bg-gradient-to-r from-[#97753E] via-[#F9DD7E] to-[#97753E] rounded-lg text-white text-sm">
                  {guest?.name}
                </h4>
              </div>
            </div>
            <TableNumber table_no={table_no} />
            <MdArrowDownward className="text-4xl" />
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
              className="shadow-lg text-white font-bold text-sm rounded-md px-3 py-2 bg-gradient-to-r from-[#97753E] via-[#F9DD7E] to-[#97753E]"
              href={`https://jdinvite.com/anwar-puteri/ `}
            >
              KLIK UNTUK BUKA E-KAD
            </Link>
          </div>
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
      <h3 className="text-[#BE9946] font-bold">PELAN MAJLIS</h3>
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
  <div className="w-full flex justify-center items-center flex-col">
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
      <p>Sila rujuk pelan majlis di bawah bagi melihat susunan meja</p>
    </div>
  </div>
);
