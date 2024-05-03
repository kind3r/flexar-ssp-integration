"use client"

import dayjs from "dayjs"
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { SSPStatusType, useSSP } from "@flexar/sdk";
import { useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import toast from "react-hot-toast";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export default function SubscriptionPassesCards() {
  const wallet = useWallet();

  const { isLoading, passes, refreshPasses, subscribe } = useSSP({
    wallet,
  });

  return (
    <>
      {typeof passes === "undefined" || passes === null ? (
        <>
          {isLoading ? (
            <div className="text-center">
              LOADING <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
            </div>
          ) : (
            <div className="alert alert-danger text-center">
              INVALID API KEY / NETWORK ERROR
            </div>
          )}
        </>
      ) : (
        <>
          {passes.length === 0 ? (
            <div className="alert alert-warning text-center">
              NO PASSES AVAILABLE
            </div>
          ) : (
            <div className="row justify-content-center">
              {passes.map((pass) => {
                return (
                  <div className="col-12 col-lg-3" key={pass.id}>
                    <div className="card">
                      <div className="card-header"><h5>{pass.name}</h5></div>
                      <img src={pass.imageUrl} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <p className="card-text">{pass.description}</p>
                      </div>
                      {pass.isSubscribed === true && pass.subscribedEndDate ? (
                        <div className="card-body">
                          <p className="card-text small">Current subscription ends: <code>{dayjs.unix(pass.subscribedEndDate).format("DD-MM-YYYY HH:mm")}</code></p>
                          <p className="card-text">
                            {pass.canExtend ? "You can extend your subscription" : ""}
                          </p>
                        </div>
                      ) : ""}
                      <div className="card-footer text-center">
                        {pass.tiers.map((tier) => {
                          return (
                            <button className="btn btn-primary mx-2" key={tier.id}
                              disabled={isLoading === true || wallet.connected === false || wallet.publicKey === null || tier.canSubscribe === false}
                              onClick={() => subscribe(tier.id, (type, message) => {
                                switch (type) {
                                  case SSPStatusType.ERROR_WALLET_NOT_CONNECTED:
                                  case SSPStatusType.ERROR_NO_PASS_AVAILABLE:
                                  case SSPStatusType.ERROR_SIGNING_ABORTED:
                                  case SSPStatusType.ERROR_TRANSACTION_FAILED:
                                    toast.error(message);
                                    break;
                                  default:
                                    toast.success(message);
                                    break;
                                }
                              })}
                            >{tier.description} <br /> <strong><code>{tier.price / LAMPORTS_PER_SOL} SOL</code></strong></button>
                          )
                        })}
                      </div>
                      <div className="card-footer">
                        <small>Available <code>{pass.available}</code> out of <code>{pass.minted}</code></small>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <div className="text-center my-5">
            <button className="btn btn-secondary" disabled={isLoading} onClick={() => refreshPasses()}>
              Refresh passes
              {isLoading ? (
                <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>
              ) : ""}
            </button>
          </div>
        </>
      )}
    </>
  )
}