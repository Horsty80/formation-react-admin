import {
  ChatIcon,
  CurrencyEuroIcon,
  EyeIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import React from "react";

function CardsBox() {
  return (
    <div
      data-testid="cardBox"
      className="relative w-full p-5 grid grid-cols-4 gap-[30px]"
    >
      <div data-testid="cardViews" className="cardKpi hover:bg-primary group">
        <div>
          <div className="kpiValue group-hover:text-white">1,504</div>
          <div className="kpiLabel group-hover:text-white">Daily Views</div>
        </div>
        <div className="iconBx">
          <EyeIcon className="kpiIcon group-hover:text-white" />
        </div>
      </div>
      <div data-testid="cardSales" className="cardKpi hover:bg-primary group">
        <div>
          <div className="kpiValue group-hover:text-white">80</div>
          <div className="kpiLabel group-hover:text-white">Sales</div>
        </div>
        <div className="iconBx">
          <ShoppingCartIcon className="kpiIcon group-hover:text-white" />
        </div>
      </div>
      <div
        data-testid="cardComments"
        className="cardKpi hover:bg-primary group"
      >
        <div>
          <div className="kpiValue group-hover:text-white">284</div>
          <div className="kpiLabel group-hover:text-white">Comments</div>
        </div>
        <div className="iconBx">
          <ChatIcon className="kpiIcon group-hover:text-white" />
        </div>
      </div>
      <div data-testid="cardEarn" className="cardKpi hover:bg-primary group">
        <div>
          <div className="kpiValue group-hover:text-white">7,842€</div>
          <div className="kpiLabel group-hover:text-white">Earning</div>
        </div>
        <div className="iconBx">
          <CurrencyEuroIcon className="kpiIcon group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}

export default CardsBox;
