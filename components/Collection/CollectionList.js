import Link from 'next/link'
import { parseImgUrl } from 'utils/common'
import InfiniteScroll from 'react-infinite-scroll-component'
import CollectionListLoader from './CollectionListLoader'
import { generateFromString } from 'generate-avatar'

const CollectionList = ({ data, fetchData, hasMore }) => {
	if (data.length === 0 && !hasMore) {
		return (
			<div className="w-full">
				<div className="m-auto text-2xl text-gray-600 font-semibold py-32 text-center">
					<div className="w-40 m-auto">
						<img src="/cardstack.png" className="opacity-75" />
					</div>
					<p className="mt-4">No Collections</p>
				</div>
			</div>
		)
	}
	return (
		<InfiniteScroll
			dataLength={data?.length || 3}
			next={fetchData}
			hasMore={hasMore}
			loader={<CollectionListLoader />}
		>
			<div className="flex flex-wrap pt-4">
				{data.map((collection, index) => (
					<div
						key={index}
						className="rounded-md overflow-hidden mb-12 md:mb-8 w-full md:w-1/3 md:px-4"
					>
						<Link href={`/collection/${collection.collection_id}`} shallow={true}>
							<a className="cursor-pointer">
								<div className="flex flex-row flex-wrap md:h-72 h-80">
									<div className="w-full h-full mb-4 rounded">
										<img
											className="object-cover w-full md:h-72 h-full p-1 transform ease-in-out duration-200 hover:opacity-80 rounded-xl"
											src={parseImgUrl(
												collection?.media ||
													`data:image/svg+xml;utf8,${generateFromString(collection.collection_id)}`,
												null,
												{
													width: `600`,
													useOriginal: process.env.APP_ENV === 'production' ? false : true,
												}
											)}
										/>
									</div>
								</div>
							</a>
						</Link>
						<div className="text-white mt-4 md:mt-2">
							<Link href={`/collection/${collection.collection_id}`} shallow={true}>
								<a className="cursor-pointer">
									<p className="grid grid-flow-col text-xl hover:underline font-bold">
										{collection.collection}
									</p>
								</a>
							</Link>
							<div className="flex flex-row flex-wrap text-sm text-gray-400 items-center w-full">
								<span className="mr-1">collection by</span>
								<Link href={`/${collection.creator_id}`} shallow={true}>
									<a>
										<span className="cursor-pointer truncate hover:text-gray-300 hover:underline">
											{collection.creator_id}
										</span>
									</a>
								</Link>
								<span className="ml-1">
									<svg
										width="16"
										height="14"
										viewBox="0 0 18 17"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M17.8095 8.5L15.8343 6.24143L16.1095 3.25429L13.1871 2.59048L11.6571 0L8.90476 1.1819L6.15238 0L4.62238 2.58238L1.7 3.2381L1.97524 6.23333L0 8.5L1.97524 10.7586L1.7 13.7538L4.62238 14.4176L6.15238 17L8.90476 15.81L11.6571 16.9919L13.1871 14.4095L16.1095 13.7457L15.8343 10.7586L17.8095 8.5Z"
											fill="white"
										/>
										<path
											d="M7.3956 12.1429L5.66675 6.494H7.62684L8.74022 10.9039H9.06951L10.1855 5.66675H12.1429L10.4141 12.1429H7.3956Z"
											fill="#0816B3"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M10.1191 5.26196H14.4169L13.6074 6.88101H10.1191V5.26196Z"
											fill="#0816B3"
										/>
									</svg>
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</InfiniteScroll>
	)
}

export default CollectionList
