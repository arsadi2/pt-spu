import React from "react";
import KeunggulanItem from "./KeunggulanItem";
import { KeunggulanItemType } from "./KeunggulanItem/KeunggulanItem";
import { Star, CurrencyCircleDollar, Heartbeat } from "phosphor-react";

const Keunggulan: React.FC = () => {
  const keunggulans: KeunggulanItemType[] = [
    {
      title: "Kualitas Terbaik",
      icon: <Star size={56} className="text-my-yellow" />,
      description: "Pengemasan Modern tanpa mengurangi kualitas minyak goreng.",
    },
    {
      title: "Harga Terjangkau",
      icon: <CurrencyCircleDollar size={56} className="text-my-yellow" />,
      description: "Harga terjangkau untuk masyarakat Indonesia.",
    },
    {
      title: "Stay Healthy",
      icon: <Heartbeat size={56} className="text-my-yellow" />,
      description: "Minyak goreng yang sehat untuk tubuh.",
    },
  ];

  return (
    <section className="w-full px-20 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
      {keunggulans.map((unggul, key) => {
        return <KeunggulanItem keunggulan={unggul} key={key} />;
      })}
    </section>
  );
};

export default Keunggulan;
