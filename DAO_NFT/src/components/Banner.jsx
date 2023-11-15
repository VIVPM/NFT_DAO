import { useState } from 'react'
import { useGlobalState, setGlobalState } from '../store'
import { toast } from 'react-toastify'
import { performContribute } from '../Blockchain.services'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
  const [isStakeholder] = useGlobalState('isStakeholder')
  const [proposals] = useGlobalState('proposals')
  const [balance] = useGlobalState('balance')
  const [mybalance] = useGlobalState('mybalance')
  const [amount, setAmount] = useState('')
  const navigate = useNavigate()

  const onPropose = () => {
    if (!isStakeholder) return
    setGlobalState('createModal', 'scale-100')
  }
  const onMarket = () => {
    navigate('nft_market')
  }

  // const onContribute = async () => {
  //   if (!!!amount || amount == '') return
  //   await performContribute(amount)
  //   toast.success('Contribution received')
  // }

  const opened = () =>
    proposals.filter(
      (proposal) => new Date().getTime() < Number(proposal.duration + '000'),
    ).length

  return (
    <div className="p-8">
      <h2 className="font-semibold text-3xl mb-5">
        {opened()} Proposal{opened() == 1 ? '' : 's'} Currently Opened
      </h2>
      <p>
        Current DAO Balance: <strong>{balance} Eth</strong> <br />
        Your contributions:{' '}
        <span>
          <strong>{mybalance} Eth</strong>
          {isStakeholder ? ', and you are now a stakeholder 😊' : null}
        </span>
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-500" />
      <p>
        {isStakeholder
          ? 'You can now raise proposals on this platform 😆'
          : 'Hey, when you buy NFTs worth 5 ETH or more, you can become a stakeholder 😎'}
      </p>
      
      <div
        className="flex flex-row justify-start items-center space-x-3 mt-4"
        role="group"
      >
        {/* <button
          type="button"
          className={`inline-block px-6 py-2.5
          bg-blue-600 text-white font-medium text-xs
          leading-tight uppercase shadow-md rounded-full
          hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
          focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg transition
          duration-150 ease-in-out dark:text-blue-500
          dark:border dark:border-blue-500 dark:bg-transparent`}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={onContribute}
        >
          Contribute
        </button> */}

        <button
          type="button"
          className={`inline-block px-6 py-2.5
          bg-blue-600 text-white font-medium text-xs
          leading-tight uppercase shadow-md rounded-full
          hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
          focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg transition
          duration-150 ease-in-out dark:text-blue-500
          dark:border dark:border-blue-500 dark:bg-transparent`}
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={onMarket}
        >
          NFT MarketPlace
        </button>

        {isStakeholder ? (
          <button
            type="button"
            className={`inline-block px-6 py-2.5
            bg-blue-600 text-white font-medium text-xs
            leading-tight uppercase shadow-md rounded-full
            hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
            focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg transition
            duration-150 ease-in-out dark:text-blue-500
            dark:border dark:border-blue-500 dark:bg-transparent`}
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            onClick={onPropose}
          >
            Propose
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default Banner
