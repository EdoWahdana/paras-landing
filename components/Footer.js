import Link from 'next/link'
import { useToast } from 'hooks/useToast'
import { useIntl } from 'hooks/useIntl'

const Footer = () => {
	const toast = useToast()
	const { localeLn } = useIntl()
	const _showBetaInfo = () => {
		toast.show({
			text: (
				<div className="text-sm text-gray-900">
					<p>{localeLn('UseOwnRisk')}</p>
				</div>
			),
			type: 'info',
			duration: null,
		})
	}

	return (
		<div className="bg-black z-10 relative bg-opacity-60">
			<div className="max-w-6xl m-auto px-4 mt-16 text-gray-400 py-8">
				<div className="md:flex flex-wrap justify-center md:justify-between ">
					<div className="w-2/3 md:w-1/3">
						<svg
							className="cursor-pointer"
							width="60"
							height="16"
							viewBox="0 0 80 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M27.8185 18.223L27.4999 17.0833C27.4018 17.1649 27.2956 17.2426 27.1812 17.3161C26.1355 18.0269 24.6813 18.3823 22.8185 18.3823C21.0538 18.3823 19.6486 18.0636 18.6029 17.4264C17.5571 16.7891 17.0342 15.6168 17.0342 13.9092C17.0342 12.3079 17.5653 11.1723 18.6274 10.5024C19.6976 9.83247 21.3561 9.4975 23.6028 9.4975H27.218V9.05633C27.218 8.10045 26.9647 7.41826 26.4582 7.00977C25.9517 6.59311 25.2736 6.38477 24.4239 6.38477C23.6559 6.38477 23.0023 6.5686 22.4631 6.93624C21.9239 7.30389 21.589 7.88803 21.4582 8.68868L17.3406 7.53673C17.5857 6.20504 18.3128 5.20831 19.522 4.54655C20.7393 3.88479 22.3079 3.5539 24.2278 3.5539C27.0056 3.5539 28.9051 4.12988 29.9263 5.28184C30.9476 6.43379 31.4582 8.07186 31.4582 10.196V18.223H27.8185ZM27.218 13.897V11.9852H24.4852C23.276 11.9852 22.4468 12.1364 21.9974 12.4387C21.5563 12.741 21.3357 13.2107 21.3357 13.848C21.3357 14.4771 21.5358 14.9509 21.9362 15.2695C22.3365 15.58 22.9778 15.7352 23.8602 15.7352C24.8324 15.7352 25.633 15.5514 26.2621 15.1838C26.8994 14.8161 27.218 14.3872 27.218 13.897Z"
								fill="white"
							/>
							<path
								d="M43.0744 10.8823C43.0744 9.06041 42.8661 7.87169 42.4494 7.31614C42.0409 6.75242 41.4691 6.47056 40.7338 6.47056C39.8841 6.47056 39.206 6.76876 38.6995 7.36516C38.2746 7.87169 38.0295 8.43542 37.9642 9.05633V18.223H33.7485V3.68871H37.7803L37.8661 5.08576C37.907 5.04491 37.9478 5.00815 37.9887 4.97547C39.0916 4.03593 40.5377 3.56616 42.3269 3.56616C44.2632 3.56616 45.5744 4.16256 46.2607 5.35537C46.947 6.54 47.2901 8.38231 47.2901 10.8823H43.0744Z"
								fill="white"
							/>
							<path
								d="M59.9157 18.223L59.597 17.0833C59.499 17.1649 59.3928 17.2426 59.2784 17.3161C58.2327 18.0269 56.7784 18.3823 54.9157 18.3823C53.151 18.3823 51.7458 18.0636 50.7 17.4264C49.6543 16.7891 49.1314 15.6168 49.1314 13.9092C49.1314 12.3079 49.6624 11.1723 50.7245 10.5024C51.7948 9.83247 53.4533 9.4975 55.7 9.4975H59.3152V9.05633C59.3152 8.10045 59.0619 7.41826 58.5554 7.00977C58.0488 6.59311 57.3707 6.38477 56.5211 6.38477C55.7531 6.38477 55.0995 6.5686 54.5603 6.93624C54.0211 7.30389 53.6861 7.88803 53.5554 8.68868L49.4378 7.53673C49.6829 6.20504 50.41 5.20831 51.6191 4.54655C52.8364 3.88479 54.4051 3.5539 56.325 3.5539C59.1028 3.5539 61.0023 4.12988 62.0235 5.28184C63.0447 6.43379 63.5553 8.07186 63.5553 10.196V18.223H59.9157ZM59.3152 13.897V11.9852H56.5823C55.3732 11.9852 54.5439 12.1364 54.0946 12.4387C53.6534 12.741 53.4328 13.2107 53.4328 13.848C53.4328 14.4771 53.633 14.9509 54.0333 15.2695C54.4337 15.58 55.075 15.7352 55.9573 15.7352C56.9296 15.7352 57.7302 15.5514 58.3593 15.1838C58.9965 14.8161 59.3152 14.3872 59.3152 13.897Z"
								fill="white"
							/>
							<path
								d="M72.9902 18.3455C71.0131 18.3455 69.3914 18.0514 68.1251 17.4632C66.8587 16.8667 66.0376 15.8823 65.6618 14.5097L69.3628 13.1617C69.5262 14.0277 69.9347 14.6445 70.5883 15.0122C71.25 15.3717 72.0262 15.5514 72.9167 15.5514C73.8481 15.5514 74.567 15.4248 75.0736 15.1715C75.5801 14.9182 75.8334 14.5547 75.8334 14.0808C75.8334 13.4844 75.527 13.0963 74.9142 12.9166C74.3097 12.7287 73.317 12.5326 71.9363 12.3284C69.7059 12.0343 68.121 11.589 67.1814 10.9926C66.2419 10.3962 65.7721 9.3627 65.7721 7.89212C65.7721 6.38886 66.4176 5.29409 67.7084 4.60782C69.0074 3.92155 70.7231 3.57841 72.8554 3.57841C74.9224 3.57841 76.5074 3.87253 77.6103 4.46076C78.7214 5.04083 79.4445 5.98445 79.7794 7.29163L76.2133 8.61516C76.0417 7.83084 75.6618 7.25895 75.0736 6.89948C74.4935 6.53183 73.7296 6.34801 72.7819 6.34801C71.8832 6.34801 71.1806 6.4869 70.6741 6.76467C70.1757 7.04245 69.9265 7.40193 69.9265 7.8431C69.9265 8.41499 70.2492 8.77855 70.8947 8.93378C71.5482 9.08901 72.5327 9.26058 73.8481 9.44848C75.9886 9.72626 77.549 10.1715 78.5294 10.7843C79.5098 11.3888 80 12.4101 80 13.848C80 15.4738 79.3668 16.6298 78.1005 17.3161C76.8423 18.0024 75.1389 18.3455 72.9902 18.3455Z"
								fill="white"
							/>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M2.45097 18.3823L0 0L10.3553 1.83823C10.7955 1.95407 11.2031 2.0472 11.5784 2.13296C12.9897 2.45543 13.9444 2.67359 14.4607 3.60292C15.1143 4.77122 15.4411 6.20912 15.4411 7.91663C15.4411 9.63231 15.1143 11.0743 14.4607 12.2426C13.8071 13.4109 12.4387 13.995 10.3553 13.995H5.87007L6.72791 18.3823H2.45097ZM3.799 3.799L9.3876 4.78089C9.62517 4.84277 9.84513 4.89252 10.0477 4.93832C10.8093 5.11057 11.3246 5.2271 11.6032 5.72351C11.9559 6.34755 12.1323 7.11561 12.1323 8.02767C12.1323 8.9441 11.9559 9.71434 11.6032 10.3384C11.2505 10.9624 10.5119 11.2745 9.3876 11.2745H6.8347L5.29625 11.1519L3.799 3.799Z"
								fill="white"
							/>
						</svg>
						<p className="my-3 md:w-2/3 text-xs">
							Create, Trade, and Collect Digital Collectibles. All-in-one social NFT marketplace for
							creators and collectors.
						</p>
						<div className="flex mt-2 gap-2 text-gray-400">
							<div>
								<a
									href="https://www.facebook.com/parashq.digital"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300 h-4 w-4 rounded"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0 8.04467C0 12.022 2.88867 15.3293 6.66667 16V10.222H4.66667V8H6.66667V6.222C6.66667 4.222 7.95533 3.11133 9.778 3.11133C10.3553 3.11133 10.978 3.2 11.5553 3.28867V5.33333H10.5333C9.55533 5.33333 9.33333 5.822 9.33333 6.44467V8H11.4667L11.1113 10.222H9.33333V16C13.1113 15.3293 16 12.0227 16 8.04467C16 3.62 12.4 0 8 0C3.6 0 0 3.62 0 8.04467Z"
											fill="white"
										/>
									</svg>
								</a>
							</div>
							<div>
								<a
									href="https://twitter.com/ParasHQ"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300 h-4 w-4 rounded "
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M15.7621 3.29122C15.2054 3.53789 14.6074 3.70456 13.9788 3.77989C14.6274 3.39175 15.1127 2.78087 15.3441 2.06122C14.7347 2.42321 14.0677 2.67802 13.3721 2.81456C12.9043 2.31513 12.2848 1.98411 11.6096 1.87287C10.9345 1.76164 10.2415 1.87642 9.63825 2.19939C9.03501 2.52236 8.55527 3.03546 8.27353 3.65902C7.99178 4.28259 7.92378 4.98172 8.08009 5.64789C6.84521 5.58589 5.63717 5.26492 4.53437 4.70582C3.43157 4.14673 2.45865 3.362 1.67876 2.40256C1.41209 2.86256 1.25876 3.39589 1.25876 3.96389C1.25846 4.47522 1.38438 4.97872 1.62534 5.42971C1.86631 5.8807 2.21486 6.26525 2.64009 6.54922C2.14694 6.53353 1.66467 6.40028 1.23342 6.16055V6.20055C1.23337 6.91772 1.48144 7.61281 1.93554 8.16789C2.38964 8.72296 3.0218 9.10384 3.72476 9.24589C3.26728 9.3697 2.78765 9.38794 2.32209 9.29922C2.52042 9.9163 2.90675 10.4559 3.427 10.8425C3.94725 11.2291 4.57537 11.4433 5.22342 11.4552C4.12331 12.3188 2.76468 12.7873 1.36609 12.7852C1.11834 12.7853 0.870807 12.7708 0.624756 12.7419C2.04441 13.6547 3.69698 14.1391 5.38476 14.1372C11.0981 14.1372 14.2214 9.40522 14.2214 5.30122C14.2214 5.16789 14.2181 5.03322 14.2121 4.89989C14.8196 4.46054 15.344 3.91649 15.7608 3.29322L15.7621 3.29122V3.29122Z"
											fill="white"
										/>
									</svg>
								</a>
							</div>
							<div>
								<a
									href="https://instagram.com/paras.hq"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300 h-4 w-4 rounded "
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M4.97675 0.710748C5.75875 0.674748 6.00808 0.666748 8.00008 0.666748C9.99208 0.666748 10.2414 0.675415 11.0227 0.710748C11.8041 0.746081 12.3374 0.870748 12.8041 1.05141C13.2927 1.23608 13.7361 1.52475 14.1027 1.89808C14.4761 2.26408 14.7641 2.70675 14.9481 3.19608C15.1294 3.66275 15.2534 4.19608 15.2894 4.97608C15.3254 5.75941 15.3334 6.00875 15.3334 8.00008C15.3334 9.99208 15.3247 10.2414 15.2894 11.0234C15.2541 11.8034 15.1294 12.3367 14.9481 12.8034C14.7641 13.2928 14.4756 13.7362 14.1027 14.1027C13.7361 14.4761 13.2927 14.7641 12.8041 14.9481C12.3374 15.1294 11.8041 15.2534 11.0241 15.2894C10.2414 15.3254 9.99208 15.3334 8.00008 15.3334C6.00808 15.3334 5.75875 15.3247 4.97675 15.2894C4.19675 15.2541 3.66341 15.1294 3.19675 14.9481C2.70736 14.7641 2.26396 14.4756 1.89741 14.1027C1.52433 13.7365 1.23562 13.2933 1.05141 12.8041C0.870748 12.3374 0.746748 11.8041 0.710748 11.0241C0.674748 10.2407 0.666748 9.99141 0.666748 8.00008C0.666748 6.00808 0.675415 5.75875 0.710748 4.97741C0.746081 4.19608 0.870748 3.66275 1.05141 3.19608C1.2359 2.7068 1.52483 2.26362 1.89808 1.89741C2.26411 1.52442 2.70706 1.23571 3.19608 1.05141C3.66275 0.870748 4.19608 0.746748 4.97608 0.710748H4.97675ZM10.9634 2.03075C10.1901 1.99541 9.95808 1.98808 8.00008 1.98808C6.04208 1.98808 5.81008 1.99541 5.03675 2.03075C4.32141 2.06341 3.93341 2.18275 3.67475 2.28341C3.33275 2.41675 3.08808 2.57475 2.83141 2.83141C2.58811 3.06812 2.40087 3.35627 2.28341 3.67475C2.18275 3.93341 2.06341 4.32141 2.03075 5.03675C1.99541 5.81008 1.98808 6.04208 1.98808 8.00008C1.98808 9.95808 1.99541 10.1901 2.03075 10.9634C2.06341 11.6787 2.18275 12.0667 2.28341 12.3254C2.40075 12.6434 2.58808 12.9321 2.83141 13.1687C3.06808 13.4121 3.35675 13.5994 3.67475 13.7167C3.93341 13.8174 4.32141 13.9367 5.03675 13.9694C5.81008 14.0047 6.04141 14.0121 8.00008 14.0121C9.95875 14.0121 10.1901 14.0047 10.9634 13.9694C11.6787 13.9367 12.0667 13.8174 12.3254 13.7167C12.6674 13.5834 12.9121 13.4254 13.1687 13.1687C13.4121 12.9321 13.5994 12.6434 13.7167 12.3254C13.8174 12.0667 13.9367 11.6787 13.9694 10.9634C14.0047 10.1901 14.0121 9.95808 14.0121 8.00008C14.0121 6.04208 14.0047 5.81008 13.9694 5.03675C13.9367 4.32141 13.8174 3.93341 13.7167 3.67475C13.5834 3.33275 13.4254 3.08808 13.1687 2.83141C12.932 2.58813 12.6439 2.40089 12.3254 2.28341C12.0667 2.18275 11.6787 2.06341 10.9634 2.03075V2.03075ZM7.06341 10.2607C7.58652 10.4785 8.169 10.5079 8.71137 10.3439C9.25373 10.1799 9.72234 9.83269 10.0372 9.36158C10.352 8.89046 10.4935 8.32466 10.4374 7.76082C10.3814 7.19697 10.1314 6.67006 9.73008 6.27008C9.47424 6.0144 9.16489 5.81862 8.8243 5.69685C8.48372 5.57507 8.12037 5.53032 7.76041 5.56582C7.40046 5.60133 7.05285 5.7162 6.74262 5.90217C6.43238 6.08814 6.16724 6.34058 5.96628 6.64132C5.76532 6.94205 5.63354 7.28361 5.58042 7.64139C5.52731 7.99917 5.55418 8.36428 5.65911 8.71043C5.76403 9.05657 5.9444 9.37515 6.18723 9.64323C6.43005 9.9113 6.7293 10.1222 7.06341 10.2607ZM5.33475 5.33475C5.68476 4.98473 6.10029 4.70708 6.55761 4.51766C7.01493 4.32823 7.50508 4.23073 8.00008 4.23073C8.49508 4.23073 8.98523 4.32823 9.44255 4.51766C9.89987 4.70708 10.3154 4.98473 10.6654 5.33475C11.0154 5.68476 11.2931 6.10029 11.4825 6.55761C11.6719 7.01493 11.7694 7.50508 11.7694 8.00008C11.7694 8.49508 11.6719 8.98523 11.4825 9.44255C11.2931 9.89987 11.0154 10.3154 10.6654 10.6654C9.95852 11.3723 8.99977 11.7694 8.00008 11.7694C7.00039 11.7694 6.04164 11.3723 5.33475 10.6654C4.62786 9.95852 4.23073 8.99977 4.23073 8.00008C4.23073 7.00039 4.62786 6.04164 5.33475 5.33475V5.33475ZM12.6054 4.79208C12.6922 4.71026 12.7616 4.61187 12.8096 4.50273C12.8576 4.39359 12.8833 4.27593 12.885 4.1567C12.8868 4.03748 12.8646 3.91911 12.8197 3.80862C12.7749 3.69813 12.7084 3.59775 12.6241 3.51344C12.5397 3.42913 12.4394 3.36259 12.3289 3.31776C12.2184 3.27293 12.1 3.25073 11.9808 3.25247C11.8616 3.25421 11.7439 3.27985 11.6348 3.32788C11.5256 3.37591 11.4272 3.44534 11.3454 3.53208C11.1863 3.70077 11.0992 3.92483 11.1025 4.1567C11.1059 4.38857 11.1995 4.61 11.3635 4.77398C11.5275 4.93795 11.7489 5.03157 11.9808 5.03495C12.2127 5.03833 12.4367 4.95121 12.6054 4.79208V4.79208Z"
											fill="white"
										/>
									</svg>
								</a>
							</div>
							<div>
								<a
									href="https://t.me/parashq"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300 h-4 w-4 rounded "
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8ZM8.28667 5.906C7.50867 6.22933 5.95333 6.89933 3.62133 7.91533C3.24267 8.066 3.044 8.21333 3.026 8.35733C2.99533 8.60133 3.30067 8.69733 3.71533 8.82733C3.772 8.84533 3.83067 8.86333 3.89067 8.88333C4.29933 9.016 4.84867 9.17133 5.134 9.17733C5.39333 9.18267 5.68267 9.076 6.002 8.85733C8.18067 7.386 9.30533 6.64267 9.376 6.62667C9.426 6.61533 9.49533 6.60067 9.542 6.64267C9.58867 6.684 9.584 6.76267 9.57933 6.784C9.54867 6.91267 8.35267 8.02533 7.73267 8.60133C7.53933 8.78067 7.40267 8.908 7.37467 8.93733C7.312 9.002 7.248 9.064 7.18667 9.12333C6.80667 9.48867 6.52267 9.76333 7.20267 10.2113C7.52933 10.4267 7.79067 10.6047 8.05133 10.782C8.336 10.976 8.62 11.1693 8.988 11.4107C9.08133 11.472 9.17067 11.5353 9.258 11.5973C9.58933 11.834 9.88733 12.046 10.2553 12.0127C10.4687 11.9927 10.69 11.792 10.802 11.1927C11.0667 9.77533 11.588 6.706 11.7087 5.44067C11.716 5.33561 11.7115 5.23006 11.6953 5.126C11.6856 5.04195 11.6447 4.96462 11.5807 4.90933C11.4853 4.83133 11.3373 4.81467 11.2707 4.816C10.97 4.82133 10.5087 4.982 8.28667 5.906V5.906Z"
											fill="white"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="md:w-2/3 grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-6 mt-8 md:mt-0">
						<div>
							<p className="text-sm mb-1 text-white font-bold">Paras</p>
							<div>
								<Link href="/market">
									<a className="text-xs inline hover:text-gray-300">{localeLn('Market')}</a>
								</Link>
							</div>
							<div>
								<Link href="/activity">
									<a className="text-xs inline hover:text-gray-300">{localeLn('Activity')}</a>
								</Link>
							</div>
							<div>
								<Link href="/license">
									<a className="text-xs inline hover:text-gray-300">{localeLn('License')}</a>
								</Link>
							</div>
							<div>
								<a
									href="https://ipfs.fleek.co/ipfs/bafybeihu6atdada45rmx4sszny6sahrzas4tuzrpuufdcpe6b63r6ugdce"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Whitepaper
								</a>
							</div>
						</div>
						<div>
							<p className="text-sm mb-1 text-white font-bold">Products</p>
							<div>
								<a
									href="https://stats.paras.id"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Paras Stats
								</a>
							</div>
							<div>
								<a
									href="https://stake.paras.id"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Paras Staking
								</a>
							</div>
							<div>
								<a
									href="https://comic.paras.id"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Paras Comic
								</a>
							</div>
						</div>
						<div>
							<p className="text-sm mb-1 text-white font-bold">Developers</p>
							<div>
								<a
									href="https://docs.paras.id"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Gitbook
								</a>
							</div>
							<div>
								<a
									href="https://github.com/parashq"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Github
								</a>
							</div>
							<div>
								<a
									href="https://parashq.github.io/"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Documentation
								</a>
							</div>
						</div>
						<div>
							<p className="text-sm mb-1 text-white font-bold">Community</p>
							<div>
								<a
									href="https://guide.paras.id/"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Guide
								</a>
							</div>
							<div>
								<a
									href="https://paras.canny.io/"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Feature Request
								</a>
							</div>
							<div>
								<a
									href="https://discord.paras.id/"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Ask on Discord
								</a>
							</div>
							<div>
								<a
									href="https://www.techinasia.com/companies/paras-digital"
									target="_blank"
									rel="noreferrer"
									className="text-xs inline hover:text-gray-300"
								>
									Jobs
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="flex justify-between items-end">
					<div className="mt-8">
						<div className="text-xs">
							<div className="flex mb-1">
								<p>{localeLn('FooterBeta')}</p>
								<svg
									width="12"
									height="12"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="inline	ml-2 cursor-pointer opacity-75"
									onClick={_showBetaInfo}
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8ZM7 10V9.5C7 8.28237 7.42356 7.68233 8.4 6.95C8.92356 6.55733 9 6.44904 9 6C9 5.44772 8.55229 5 8 5C7.44772 5 7 5.44772 7 6H5C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6C11 7.21763 10.5764 7.81767 9.6 8.55C9.07644 8.94267 9 9.05096 9 9.5V10H7ZM9.00066 11.9983C9.00066 12.5506 8.55279 12.9983 8.00033 12.9983C7.44786 12.9983 7 12.5506 7 11.9983C7 11.4461 7.44786 10.9983 8.00033 10.9983C8.55279 10.9983 9.00066 11.4461 9.00066 11.9983Z"
										fill="white"
									/>
								</svg>
							</div>
						</div>
						<div className="flex items-center text-xs">
							<p>{localeLn('Paras2022')}</p>
							<p className="mx-2">|</p>
							<Link href="/privacy">
								<a>{localeLn('Privacy')}</a>
							</Link>
							<p className="mx-2">|</p>
							<div className="flex items-center text-xs">
								<p>{localeLn('PoweredBy')}</p>
								<a href="https://near.org" target="_blank" rel="noreferrer">
									<svg
										className="mx-2"
										width="12"
										height="12"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<g clipPath="url(#clip0)">
											<path
												className="fill-current"
												d="M19.1736 1.21319L14.2154 8.57143C13.8725 9.07253 14.5318 9.67912 15.0066 9.25714L19.8857 5.01099C20.0175 4.90549 20.2022 4.98462 20.2022 5.16923V18.4352C20.2022 18.6198 19.9648 18.6989 19.8593 18.567L5.09008 0.896703C4.61535 0.316484 3.92964 0 3.1648 0H2.63733C1.2659 0 0.131836 1.13407 0.131836 2.53187V21.2044C0.131836 22.6022 1.2659 23.7363 2.6637 23.7363C3.53403 23.7363 4.35162 23.2879 4.82634 22.5231L9.78458 15.1648C10.1274 14.6637 9.4681 14.0571 8.99337 14.4791L4.11425 18.6989C3.98239 18.8044 3.79777 18.7253 3.79777 18.5407V5.3011C3.79777 5.11648 4.03513 5.03736 4.14063 5.16923L18.9099 22.8396C19.3846 23.4198 20.0967 23.7363 20.8351 23.7363H21.3626C22.7604 23.7363 23.8945 22.6022 23.8945 21.2044V2.53187C23.8945 1.13407 22.7604 0 21.3626 0C20.4659 0 19.6483 0.448352 19.1736 1.21319V1.21319Z"
											/>
										</g>
										<defs>
											<clipPath id="clip0">
												<rect width="24" height="23.7363" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</a>
								<svg
									width="12"
									height="12"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M13 11H22V13H13V22H11V13H2V11H11V2H13V11Z"
										fill="#cbd5e0"
									/>
								</svg>
								<a href="https://ipfs.io" target="_blank" rel="noreferrer">
									<svg
										width="22"
										height="22"
										viewBox="0 0 24 24"
										fill="none"
										className="mx-2"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M1.60779 18L12 24L22.3922 18V6.00002L12 0.000488281L1.60779 6.00049V18Z"
											fill="transparent"
										/>
										<path
											d="M10.9272 1.4458L3.39254 5.79608C3.4076 5.92988 3.4076 6.06492 3.39254 6.19871L10.9277 10.549C11.563 10.0802 12.4297 10.0802 13.0651 10.549L20.6002 6.19866C20.5852 6.06487 20.5851 5.92989 20.6002 5.7961L13.0655 1.44582C12.4301 1.91462 11.5634 1.91462 10.928 1.44582L10.9272 1.4458ZM21.3236 7.40033L13.7805 11.7991C13.8688 12.5837 13.4355 13.3343 12.7118 13.6501L12.7203 22.3023C12.8437 22.3562 12.9606 22.4237 13.0689 22.5036L20.6041 18.1534C20.5158 17.3687 20.9491 16.6181 21.6728 16.3023V7.6018C21.5494 7.54795 21.4324 7.48046 21.3241 7.40052L21.3236 7.40033ZM2.67629 7.44868C2.56796 7.52862 2.45104 7.59618 2.32764 7.65003V16.3505C3.05129 16.6663 3.48465 17.4169 3.39634 18.2015L10.931 22.5518C11.0394 22.4719 11.1564 22.4043 11.2797 22.3505V13.65C10.5561 13.3342 10.1227 12.5836 10.211 11.799L2.67636 7.4485L2.67629 7.44868Z"
											className="fill-current"
										/>
										<path d="M12 24L22.3922 18V6L12 12V24Z" fill="black" fillOpacity="0.25098" />
										<path
											d="M12.0001 24V12L1.60791 6V18L12.0001 24Z"
											fill="black"
											fillOpacity="0.039216"
										/>
										<path
											d="M1.60779 6L12 12L22.3922 6L12 0L1.60779 6Z"
											fill="black"
											fillOpacity="0.13018"
										/>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
