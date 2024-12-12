import Image from "next/image";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import { IoIosLink, IoLogoWhatsapp } from "react-icons/io";
import { filteredGuestList, guestlist } from "../../public/guest";

export default function Home() {
  return (
    <div className="w-full">
      <main className="flex flex-col items-center justify-center py-10 px-5 gap-5">
        <div className="flex">
          <Image
            className=""
            src="/crest.png"
            alt="Globe icon"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Guest List</h1>
        <div className="w-full flex flex-col gap-2">
          <GuestListGroupedByTable />
        </div>
      </main>
    </div>
  );
}

const GuestListGroupedByTable: React.FC = () => {
  // Group guests by table
  const groupedGuests = filteredGuestList.reduce<
    Record<string, typeof guestlist>
  >((acc, guest) => {
    if (!acc[guest.table]) {
      acc[guest.table] = [];
    }
    acc[guest.table].push(guest);
    return acc;
  }, {});

  return (
    <div className="flex flex-col gap-4">
      {Object.entries(groupedGuests).map(([table, guests]) => {
        let i = 0;
        const countGuest = guests.filter((g) => g.table === table);
        return (
          <div
            key={table}
            className="p-4 border rounded-lg shadow-md bg-slate-100"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">Table {table}</h2>
              <span>{countGuest.length} pax</span>
            </div>
            <div className="pl-5 flex flex-col justify-end">
              {(() => {
                const prevGuest = { id: "", name: "", phone: "", table: "" }; // Variable to store the last processed phone number
                return guests.map((guest) => {
                  i++;
                  const family = guests.filter((g) => guest.phone === g.phone);
                  const allName = family
                    .map((y) => y.name)
                    .filter(
                      (name, index, self) =>
                        name && self.indexOf(name) === index
                    ) // Exclude duplicates and empty names
                    .reduce((acc, name, index, array) => {
                      if (index === 0) return name; // First name
                      if (index === array.length - 1)
                        return `${acc}%20%26%20${name}`; // Last name
                      return `${acc}%2C%20${name}`; // Intermediate names
                    }, "");

                  const isDuplicate = prevGuest.phone === guest.phone;
                  prevGuest.phone = guest.phone; // Update `prevPhone` for the next iteration

                  return (
                    <div
                      key={guest.id}
                      className={`${
                        !isDuplicate && "mt-2 border-t border-gray-300 pt-1"
                      } text-gray-700 flex justify-between items-center`}
                    >
                      <div className="flex gap-2">
                        <span className="w-6 flex justify-center">{i} </span>

                        {!isDuplicate || !guest.phone ? (
                          <>
                            <span>-</span>
                            <span>{guest.name}</span>
                          </>
                        ) : (
                          <span className="ml-3 flex gap-1 items-center">
                            <IoIosLink className="text-sm" /> {guest.name}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        {!isDuplicate && guest.phone != "na" && (
                          <Link
                            className="bg-green-700 rounded-md text-white px-2 py-2"
                            href={`https://api.whatsapp.com/send?phone=6${
                              guest.phone
                            }&text=Assalamualaikum%20dan%20%20Salam%20Sejahtera%0A%0AYAM%20%2F%20YM%20%2F%20Tan%20Sri%20%2F%20Puan%20Sri%20%2F%20Dato%E2%80%99%20Sri%20%2F%20%20Datin%20Sri%20%2F%20Dato%E2%80%99%20%2F%20Datin%20%2F%20Tuan%20%2F%20Puan%0A%0A${allName}%20${`${
                              family.length > 1
                                ? `(${family.length}%20pax)`
                                : ""
                            }`}%0A%0AWe%20would%20like%20to%20send%20a%20gentle%20reminder%20to%20all%20Invitees%0A%0AMajlis%20Perkahwinan%20Muhammad%20Khairul%20Anwar%20Shahrom%20%26%20Puteri%20Nur%20Fatihana%20Rocky%0A%0ATable%20no%3A%C2%A0${
                              guest.table
                            }%20(Please%20mention%20during%20registration)%0ADate%3A%2014%20December%202024%20(Saturday)%0ARegistration%20time%3A%20Start%20from%206.30%20p.m.%0ADress%20code%3A%20Baju%20Melayu%2F%20Batik%20%26%20Baju%20Kurung%0AVenue%3A%20Palace%20of%20Golden%20Horses%2C%20Seri%20Kembangan%0A%0AThank%C2%A0you%0A%0Ahttps://anwarxputeri.vercel.app/${
                              guest.id
                            }`}
                            target="_blank"
                          >
                            <IoLogoWhatsapp />
                          </Link>
                        )}
                        {!isDuplicate && (
                          <Link
                            className="bg-slate-900 rounded-md text-white px-2 py-2"
                            href={`/${guest.id}`}
                            target="_blank"
                          >
                            <FaGlobe />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        );
      })}
    </div>
  );
};
