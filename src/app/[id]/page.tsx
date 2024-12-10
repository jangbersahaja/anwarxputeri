import Image from "next/image";
import Link from "next/link";
import { guestlist } from "../../../public/guest";

type tParams = Promise<{ id: string }>;

export default async function Home(props: { params: tParams }) {
  const { id } = await props.params;
  const guestID = id;
  const guest = guestlist.find((guest) => guestID === guest.id);

  const table_no = guest?.table;

  const WingTables = () => {
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
      <div className="flex items-center flex-col h-full w-full gap-3 p-3">
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
            <div className="flex flex-col w-full">
              {createRows(1, 35, "end")}
            </div>
            <div className="w-full bg-yellow-300 h-8 flex items-center justify-center border-black border">
              <p className="text-center font-bold text-[10px]">LEFT WING</p>
            </div>
          </div>

          <div className="flex items-end ">
            <div className="flex h-fit w-4 px-1 items-center justify-center bg-yellow-300 border-black border">
              <p className="text-center font-bold text-[10px]">
                E N T R A N C E
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
      </div>
    );
  };

  return (
    <div className="w-full">
      <main className="flex flex-col items-center justify-center ">
        <div className="flex relative h-svh w-full">
          <div className="flex relative w-full h-full">
            <Image
              className=""
              src="/border.png"
              alt="Globe icon"
              fill
              quality={100}
              priority
              style={{
                objectFit: "cover",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
          <div className="flex absolute flex-col px-10 pt-16 gap-3 items-center w-full">
            <Image
              className=""
              src="/crest.png"
              alt="Globe icon"
              width={150}
              height={150}
            />
            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <div className="text-sm max-w-64">
                <p>Assalamualaikum dan Salam Sejahtera</p>
                <p>
                  YAM / YM / Tan Sri / Puan Sri / Dato’ Sri / Datin Sri / Dato’
                  / Datin / Tuan / Puan
                </p>
                <h4 className="font-bold text-base">{guest?.name}</h4>
              </div>
              <div className="text-sm">
                <p>Terima kasih kerana sudi hadir memeriahkan</p>
                <p>Majlis Perkahwinan</p>
                <h2 className="text-xl font-bold">Anwar & Puteri</h2>
              </div>
              <div className="text-sm flex items-center flex-col gap-2">
                <p>Nomber Meja Anda:</p>
                <div className="bg-green-400 w-16 h-16 flex items-center justify-center rounded-full border-2 border-black">
                  <h1 className="font-bold text-3xl">{table_no}</h1>
                </div>
                {Number(table_no) <= 35 ? (
                  <div className="">
                    <p>LEFT WING</p>
                  </div>
                ) : (
                  <div className="">
                    <p>LEFT WING</p>
                  </div>
                )}
              </div>
              <div className="text-xs">
                <p>Sila semak diagram dibawah bagi melihat susunan meja</p>
              </div>
              <div className="shadow-lg bg-slate-50 rounded-md px-3 py-2">
                <Link href={`https://jdinvite.com/anwar-puteri/ `}>
                  KLIK UNTUK BUKA E-KAD
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>Countdown</p>
        </div>
        <WingTables />
      </main>
    </div>
  );
}
