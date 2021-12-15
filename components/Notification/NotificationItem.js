import axios from 'axios'
import Link from 'next/link'
import { formatNearAmount } from 'near-api-js/lib/utils/format'
import { useEffect, useState } from 'react'
import { parseImgUrl, prettyTruncate } from 'utils/common'

const NotificationImage = ({ media }) => {
	return (
		<div className="w-16 flex-shrink-0 rounded-md overflow-hidden bg-primary shadow-inner">
			<img
				src={parseImgUrl(media, null, {
					width: `300`,
				})}
			/>
		</div>
	)
}

const NotificationItem = ({ notif, currentUser }) => {
	const [token, setToken] = useState({})

	useEffect(() => {
		fetchToken()
	}, [])

	const fetchToken = async () => {
		const query = notif.token_id
			? {
					url: `${process.env.V2_API_URL}/token`,
					params: {
						token_id: notif.token_id,
						contract_id: notif.contract_id,
					},
			  }
			: {
					url: `${process.env.V2_API_URL}/token-series`,
					params: {
						token_series_id: notif.token_series_id,
						contract_id: notif.contract_id,
					},
			  }

		const resp = await axios.get(query.url, {
			params: query.params,
		})

		if (resp.data.data.results.length > 0) {
			setToken(resp.data.data.results[0])
		}
	}

	const url = `/token/${notif.contract_id}::${notif.token_series_id}${
		notif.token_id ? `/${notif.token_id}` : ''
	}`

	if (!token) {
		return null
	}

	if (notif.type === 'nft_transfer' && notif.from === null) {
		if (notif.price) {
			return (
				<div>
					<Link href={url}>
						<a>
							<div className="cursor-pointer p-2 rounded-md button-wrapper flex items-center">
								<NotificationImage media={token.metadata?.media} />
								<div className="pl-2 text-gray-300">
									bought <span className="font-medium text-gray-100">{token.metadata?.title}</span>{' '}
									for {formatNearAmount(notif.msg.params.price)} Ⓝ
								</div>
							</div>
						</a>
					</Link>
				</div>
			)
		}

		return (
			<div>
				<Link href={url}>
					<a>
						<div className="cursor-pointer p-2 rounded-md button-wrapper flex items-center">
							<NotificationImage media={token.metadata?.media} />
							<div className="pl-2 text-gray-300">
								Creator minted #{token.edition_id || token.token_id} to {notif.to}
							</div>
						</div>
					</a>
				</Link>
			</div>
		)
	}

	if (notif.type === 'nft_transfer' && notif.to === null) {
		return (
			<div>
				<Link href={url}>
					<a>
						<div className="cursor-pointer p-2 rounded-md button-wrapper flex items-center">
							<NotificationImage media={token.metadata?.media} />
							<div className="pl-2 text-gray-300">burned #{token.edition_id || token.token_id}</div>
						</div>
					</a>
				</Link>
			</div>
		)
	}

	if (notif.type === 'nft_transfer') {
		if (notif.price && notif.from === currentUser) {
			return (
				<div>
					<Link href={url}>
						<a>
							<div className="cursor-pointer p-2 rounded-md button-wrapper flex items-center">
								<NotificationImage media={token.metadata?.media} />
								<div className="pl-2 text-gray-300">
									sold <span className="font-medium text-gray-100">{token.metadata?.title}</span>
									{' to '}
									<span className="font-semibold">{notif.to}</span> for{' '}
									{formatNearAmount(notif.msg.params.price)} Ⓝ
								</div>
							</div>
						</a>
					</Link>
				</div>
			)
		}

		if (notif.to === currentUser) {
			return (
				<div>
					<Link href={url}>
						<a>
							<div className="cursor-pointer p-2 rounded-md button-wrapper flex items-center">
								<NotificationImage media={token.metadata?.media} />
								<div className="pl-2 text-gray-300">
									received{' '}
									<span className="font-medium text-gray-100">{token.metadata?.title} </span>
									from{' '}
									<span className="font-medium text-gray-100">
										{prettyTruncate(notif.from, 12, 'address')}
									</span>
								</div>
							</div>
						</a>
					</Link>
				</div>
			)
		}
	}

	if (notif.type === 'resolve_purchase') {
		return (
			<div>
				<Link href={url}>
					<a>
						<div className="cursor-pointer p-2 rounded-md button-wrapper flex items-center">
							<NotificationImage media={token.metadata?.media} />
							<div className="pl-2 text-gray-200">
								sold <span className="font-medium text-gray-100">{token.metadata?.title}</span>
								{' to '}
								<span className="font-semibold">{notif.to}</span> for{' '}
								{formatNearAmount(notif.msg.params.price)} Ⓝ
							</div>
						</div>
					</a>
				</Link>
			</div>
		)
	}

	if (notif.type === 'notification_add_offer') {
		return (
			<div>
				<Link href={url}>
					<a>
						<div className="cursor-pointer p-2 rounded-md button-wrapper flex items-center">
							<NotificationImage media={token.metadata?.media} />
							<div className="pl-2 text-gray-100">
								<span className="font-semibold">{notif.from}</span> offer{' '}
								<span className="font-medium text-gray-100">{token.metadata?.title}</span>
								{' for '}
								{formatNearAmount(notif.msg.params.price)} Ⓝ
							</div>
						</div>
					</a>
				</Link>
			</div>
		)
	}

	if (notif.type === 'notification_category_accepted') {
		return (
			<div>
				<Link href={url}>
					<a>
						<div className="cursor-pointer p-2 rounded-md button-wrapper flex items-center">
							<NotificationImage media={token.metadata?.media} />
							<div className="pl-2 text-gray-100">
								Token <span className="font-semibold">{token.metadata?.title}</span> submission has
								been accepted
								{' to '} <span className="font-semibold">{notif.msg.category_name}</span> category
							</div>
						</div>
					</a>
				</Link>
			</div>
		)
	}

	if (notif.type === 'notification_category_rejected') {
		return (
			<div>
				<Link href={url}>
					<a>
						<div className="cursor-pointer p-2 rounded-md button-wrapper flex items-center">
							<NotificationImage media={token.metadata?.media} />
							<div className="pl-2 text-gray-100">
								Token <span className="font-semibold">{token.metadata?.title}</span> submission has
								been rejected from <span className="font-semibold">{notif.msg.category_name}</span>{' '}
								category.
							</div>
						</div>
					</a>
				</Link>
			</div>
		)
	}

	return null
}

export default NotificationItem