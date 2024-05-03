"use client"

import WalletContext from "@/components/WalletContext";
import SubscriptionPassesCards from "./SubscriptionPassesCards";
import WalletButton from "@/components/WalletButton";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="text-center my-5">My Project</h1>
        <WalletContext>
          <div className="text-center my-5">
            <WalletButton />
          </div>
          <SubscriptionPassesCards />
        </WalletContext>
      </div>
    </>
  );
}
