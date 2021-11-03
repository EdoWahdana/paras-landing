import cachios from 'cachios'
import Avatar from 'components/Common/Avatar'
import Button from 'components/Common/Button'
import TokenBuyModal from 'components/Modal/TokenBuyModal'
import TokenStorageModal from 'components/Modal/TokenStorageModal'
import TokenUpdatePriceModal from 'components/Modal/TokenUpdatePriceModal'
import { STORAGE_ADD_MARKET_FEE } from 'config/constants'
import JSBI from 'jsbi'
import near from 'lib/near'
import { sentryCaptureException } from 'lib/sentry'
import useStore from 'lib/store'
import { formatNearAmount } from 'near-api-js/lib/utils/format'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { parseImgUrl, prettyTruncate } from 'utils/common'
import { useIntl } from 'hooks/useIntl'
const FETCH_TOKENS_LIMIT = 12

const TabOwners = ({ localToken }) => {
	const [tokens, setTokens] = useState([])
	const [isFetching, setIsFetching] = useState(false)
	const [activeToken, setActiveToken] = useState(null)
	const [showModal, setShowModal] = useState(null)
	const [sortBy, setSortBy] = useState()
	const { localeLn } = useIntl()
	const { currentUser } = useStore((state) => ({
		currentUser: state.currentUser,
	}))

	useEffect(() => {
		if (localToken.token_series_id) {
			fetchTokens([], 0)
		}
	}, [])

	useEffect(() => {
		if (!isFetching) {
			changeSortBy(sortBy)
		}
	}, [sortBy, isFetching])

	const hasStorageBalance = async (token) => {
		try {
			if (!token.approval_id) {
				const currentStorage = await near.wallet
					.account()
					.viewFunction(process.env.MARKETPLACE_CONTRACT_ID, `storage_balance_of`, {
						account_id: currentUser,
					})

				const supplyPerOwner = await near.wallet
					.account()
					.viewFunction(process.env.MARKETPLACE_CONTRACT_ID, `get_supply_by_owner_id`, {
						account_id: currentUser,
					})

				const usedStorage = JSBI.multiply(
					JSBI.BigInt(parseInt(supplyPerOwner) + 1),
					JSBI.BigInt(STORAGE_ADD_MARKET_FEE)
				)

				if (JSBI.greaterThanOrEqual(JSBI.BigInt(currentStorage), usedStorage)) {
					return true
				}
				return false
			} else {
				return true
			}
		} catch (err) {
			sentryCaptureException(err)
		}
	}

	const fetchTokens = async (currentData, page) => {
		setIsFetching(true)

		const resp = await cachios.get(`${process.env.V2_API_URL}/token`, {
			params: {
				token_series_id: localToken.token_series_id,
				contract_id: localToken.contract_id,
				__skip: page * FETCH_TOKENS_LIMIT,
				__limit: FETCH_TOKENS_LIMIT,
				__sort: 'token_id::1',
			},
			ttl: 120,
		})
		const respData = resp.data.data.results
		const newData = [...currentData, ...respData]

		setTokens(newData)

		if (respData.length === FETCH_TOKENS_LIMIT) {
			fetchTokens(newData, page + 1)
		} else {
			setIsFetching(false)
		}
	}

	const onUpdateListing = async (token) => {
		setActiveToken(token)
		const hasBalance = await hasStorageBalance(token)
		if (hasBalance) {
			setShowModal('update')
		} else {
			setShowModal('storage')
		}
	}

	const onDismissModal = () => {
		setActiveToken(null)
		setShowModal(null)
	}

	const changeSortBy = (sortby) => {
		let tempTokens = tokens.slice()
		let saleOwner = tokens.filter((token) => token.price)
		let nonSaleOwner = tokens.filter((token) => !token.price)

		if (sortby === 'nameasc') {
			tempTokens.sort((a, b) => a.owner_id.localeCompare(b.owner_id))
		} else if (sortby === 'namedesc') {
			tempTokens.sort((a, b) => b.owner_id.localeCompare(a.owner_id))
		} else if (sortby === 'editionasc') {
			tempTokens.sort((a, b) => parseInt(a.edition_id) - parseInt(b.edition_id))
		} else if (sortby === 'editiondesc') {
			tempTokens.sort((a, b) => parseInt(b.edition_id) - parseInt(a.edition_id))
		} else if (sortby === 'priceasc') {
			saleOwner = saleOwner.sort((a, b) => a.price - b.price)
			tempTokens = [...saleOwner, ...nonSaleOwner]
		} else if (sortby === 'pricedesc') {
			saleOwner = saleOwner.sort((a, b) => b.price - a.price)
			tempTokens = [...saleOwner, ...nonSaleOwner]
		}

		setTokens(tempTokens)
	}

	return (
		<div>
			{!isFetching && tokens.length === 0 ? (
				<div className="bg-gray-800 mt-3 p-3 rounded-md shadow-md">
					<div className="text-white">{localeLn('NoOwnersBecome')}</div>
				</div>
			) : (
				<>
					<div className="flex justify-between bg-gray-800 mt-3 p-3 rounded-md shadow-md">
						<p className="text-sm my-auto text-white font-medium">Sort By</p>
						<select
							className="py-1 rounded-md bg-transparent text-white focus:outline-none outline-none text-right"
							onChange={(e) => setSortBy(e.target.value)}
							defaultValue="editionasc"
							value={sortBy}
						>
							<option value="editionasc">Edition Low-High</option>
							<option value="editiondesc">Edition High-Low</option>
							<option value="nameasc">Name A-Z</option>
							<option value="namedesc">Name Z-A</option>
							<option value="priceasc">Price Low-High</option>
							<option value="pricedesc">Price High-Low</option>
						</select>
					</div>
					{tokens.map((token) => (
						<Owner
							token={token}
							key={token.token_id}
							onBuy={(token) => {
								setShowModal('buy')
								setActiveToken(token)
							}}
							onUpdateListing={(token) => {
								onUpdateListing(token)
							}}
						/>
					))}
				</>
			)}
			{showModal === 'buy' && (
				<TokenBuyModal show={showModal === 'buy'} onClose={onDismissModal} data={activeToken} />
			)}
			{showModal === 'update' && (
				<TokenUpdatePriceModal
					show={showModal === 'update'}
					onClose={onDismissModal}
					data={activeToken}
				/>
			)}
			{showModal === 'storage' && (
				<TokenStorageModal
					show={showModal === 'storage'}
					onClose={onDismissModal}
					data={activeToken}
				/>
			)}
		</div>
	)
}

const Owner = ({ token = {}, onBuy, onUpdateListing }) => {
	const [profile, setProfile] = useState({})
	const { currentUser } = useStore()
	const { localeLn } = useIntl()
	useEffect(() => {
		if (token.owner_id) {
			fetchOwnerProfile()
		}
	}, [token.owner_id])

	const fetchOwnerProfile = async () => {
		try {
			const resp = await cachios.get(`${process.env.V2_API_URL}/profiles`, {
				params: {
					accountId: token.owner_id,
				},
				ttl: 60,
			})
			const newData = resp.data.data.results[0] || {}
			setProfile(newData)
		} catch (err) {
			sentryCaptureException(err)
		}
	}

	return (
		<div className="bg-gray-800 mt-3 p-3 rounded-md shadow-md">
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					<Link href={`/${token.owner_id}`}>
						<a className="hover:opacity-80">
							<Avatar size="md" src={parseImgUrl(profile.imgUrl)} className="align-bottom" />
						</a>
					</Link>
					{token.owner_id ? (
						<div className="ml-2">
							<Link href={`/${token.owner_id}`}>
								<a className="hover:opacity-80">
									<p className="text-white font-semibold truncate">
										{prettyTruncate(token.owner_id, 16, 'address')}
									</p>
								</a>
							</Link>
						</div>
					) : (
						<p className="ml-2 text-white font-semibold">{localeLn('Burned')}</p>
					)}
				</div>
				<div>
					<Link href={`/token/${token.contract_id}::${token.token_series_id}/${token.token_id}`}>
						<a className="hover:opacity-80">
							<p className="text-white font-semibold">
								{token.contract_id === process.env.NFT_CONTRACT_ID
									? `${localeLn('Edition')} #${token.edition_id}`
									: `#${token.token_id}`}
							</p>
						</a>
					</Link>
				</div>
			</div>
			<div className="mt-1">
				<div className="flex items-center justify-between">
					{token.price ? (
						<p className="text-white">
							{localeLn('OnSale')} {formatNearAmount(token.price)} Ⓝ
						</p>
					) : (
						<p className="text-white">{localeLn('NotForSale')}</p>
					)}
					{currentUser && (
						<>
							{token.owner_id === currentUser ? (
								<div className="w-24">
									<Button onClick={() => onUpdateListing(token)} size="sm" isFullWidth>
										{localeLn('Update')}
									</Button>
								</div>
							) : (
								token.price && (
									<div className="w-24">
										<Button onClick={() => onBuy(token)} size="sm" isFullWidth>
											{localeLn('Buy')}
										</Button>
									</div>
								)
							)}
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default TabOwners
