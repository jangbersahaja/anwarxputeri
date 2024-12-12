"use client";
import { toZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countingDate = new Date("2024-12-14T12:00:00Z");

  useEffect(() => {
    const target = toZonedTime(countingDate, "Asia/Kuala_Lumpur");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div
      className={`bg-gradient-to-r from-[#97753E] via-[#F9DD7E] to-[#97753E] text-white my-auto flex w-[350px] flex-col items-center justify-center rounded-lg py-2 shadow-lg  font-[family-name:var(--font-cinzel)]`}
    >
      <h3 className="text-center text-sm">Menghitung Hari</h3>
      <h3 className="pb-1 text-center font-bold">#AnwarPuteRingOnIt</h3>
      <div className="flex items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{days}</span>
          <span className="text-xs">Hari</span>
        </div>
        <span className="text-3xl">:</span>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{hours}</span>
          <span className="text-xs">Jam</span>
        </div>
        <span className="text-3xl">:</span>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{minutes}</span>
          <span className="text-xs">Minit</span>
        </div>
        <span className="text-3xl">:</span>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl font-bold">{seconds}</span>
          <span className="text-xs">Saat</span>
        </div>
      </div>
    </div>
  );
}
