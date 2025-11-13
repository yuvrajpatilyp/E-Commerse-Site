import React from "react";
import Card from "../Reusable/Card";

function RelatedProduct() {
  return (
    <section className="max-w-[1100px] mx-auto py-10 px-4">
      <div className="flex items-center gap-2 mb-15">
        <div className="w-4 h-8 bg-red-500 rounded-md"></div>
        <h2 className="text-1xl font-semibold text-red-500">
          Related Item
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth no-scrollbar">
        <Card
          image="./src/assets/HAVIT HV-G92 Gamepad.png"
          title="HAVIT HV-G92 Gamepad"
          newprice="$120"
          oldprice="$160"
          discount="-40%"
        />

        <Card
          image="./src/assets/AK-900 Wired Keyboard.png"
          title="AK-900 Wired Keyboard"
          newprice="$960"
          oldprice="$1160"
          discount="-35%"
        />

        <Card
          image="./src/assets/IPS LCD monitor.png"
          title="IPS LCD Gaming Monitor"
          newprice="$370"
          oldprice="$400"
          discount="-30%"
        />

        <Card
          image="./src/assets/RGB liquid cooler.png"
          title="RGB liquid CPU Cooler"
          newprice="$160"
          oldprice="$170"
          discount=""
        />
      </div>
    </section>
  );
}

export default RelatedProduct;
