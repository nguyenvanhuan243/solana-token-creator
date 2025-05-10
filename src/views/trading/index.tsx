// Next, React
import { FC, useEffect } from 'react';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';
import { BuySellToken } from 'components/BuySellToken';

export const TradingView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  const renderTradingTokenHeader = () => {
    return (
      <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
        Buy Sell Token
      </h1>
    )
  }

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        {
          renderTradingTokenHeader()
        }
        <div className="text-center">
          {wallet && <p>SOL Balance: {(balance || 0).toLocaleString()}</p>}
          {wallet && <p>Platform Token Balance: {(balance || 0).toLocaleString()}</p>}
          <BuySellToken />
        </div>
      </div>
    </div>
  );
};
