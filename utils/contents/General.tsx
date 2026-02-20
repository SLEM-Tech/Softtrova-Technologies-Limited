import { CompanyName, CompanyShortName } from "@constants";
import { FiHeadphones, FiShield, FiZap } from "react-icons/fi";

export const MainTermsOfUse = () => {
	return (
		<div id='termsOfUse' className='text-white/80 space-y-6'>
			<div>
				<h4 className='text-base sm:text-xl xl:text-2xl font-black text-white uppercase tracking-tight'>
					Terms of Service & Hardware Fulfillment Agreement
				</h4>
				<p className='mt-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
					By accessing the {CompanyName} digital portal and finalizing a
					technical procurement, you agree to the following operational
					standards regarding high-performance hardware fulfillment and asset
					management:
				</p>
			</div>

			<ul className='list-none space-y-5 text-xs md:text-sm xl:text-base'>
				<li>
					<span className='font-bold text-gray-300 block uppercase text-[11px] tracking-wider mb-1'>
						01. Component Allocation & Inventory
					</span>
					{CompanyName} specializes in high-fidelity hardware. While we maintain
					a synchronized inventory, final order confirmation is subject to
					technical availability. In cases of global chipset shortages or
					backordered units, clients will be notified within 24 hours.
				</li>

				<li>
					<span className='font-bold text-gray-300 block uppercase text-[11px] tracking-wider mb-1'>
						02. Secure Transaction Verification
					</span>
					To maintain the integrity of our financial ecosystem, all manual bank
					transfers require a digital reference upload. Logistics protocols are
					initiated only after the {CompanyShortName} finance department
					successfully reconciles the transaction.
				</li>

				<li>
					<span className='font-bold text-gray-300 block uppercase text-[11px] tracking-wider mb-1'>
						03. Logistics & Fragile Asset Handling
					</span>
					Advanced computing hardware is classified as a sensitive asset. Our
					logistics partners are vetted for "Fragile Tech Management." While we
					provide estimated windows, {CompanyName} is not liable for delays
					caused by carrier disruptions or customs inspections.
				</li>

				<li>
					<span className='font-bold text-gray-300 block uppercase text-[11px] tracking-wider mb-1'>
						04. Dynamic Pricing & Market Volatility
					</span>
					The tech hardware market is subject to rapid chipset value shifts and
					exchange rate fluctuations. {CompanyName} reserves the right to adjust
					digital pricing in real-time to reflect current global market value
					before a manifest is finalized.
				</li>

				<li>
					<span className='font-bold text-gray-300 block uppercase text-[11px] tracking-wider mb-1'>
						05. System Compatibility & Integration
					</span>
					Clients are responsible for verifying that components (CPUs, GPUs, and
					specialized controllers) are compatible with their intended
					architecture. {CompanyName} provides technical specs, but final
					integration compatibility remains the client's responsibility.
				</li>

				<li>
					<span className='font-bold text-gray-300 block uppercase text-[11px] tracking-wider mb-1'>
						06. Warehouse Pickup & Holding
					</span>
					Hardware designated for "On-Site Pickup" will be held for 10 business
					days. Beyond this window, a technical storage fee may be applied to
					secure the inventory slot for incoming shipments.
				</li>
			</ul>

			<div className='bg-zinc-900/50 p-6 rounded-2xl border border-white/5 mt-6'>
				<p className='leading-[1.6] text-xs md:text-sm italic text-zinc-400'>
					<span className='font-bold text-blue-500 not-italic uppercase text-[10px] block mb-1'>
						Technical Liability Disclaimer:
					</span>
					{CompanyName} is an authorized retailer and technical integrator. We
					are not the original equipment manufacturer (OEM). All long-term
					warranty claims are governed by the manufacturer’s terms, though we
					provide full technical assistance during the RMA process.
				</p>
			</div>
		</div>
	);
};

export const PrivacyPolicy = () => {
	return (
		<div id='privacyPolicy' className='text-zinc-400 space-y-8'>
			<div>
				<h4 className='text-sm sm:text-xl xl:text-2xl font-black text-white uppercase tracking-tighter'>
					01. Data Intelligence & Encryption
				</h4>
				<p className='mt-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
					{CompanyName} utilizes advanced data protocols to provide a secure
					environment for high-value hardware transactions. We operate in strict
					compliance with the Nigeria Data Protection Regulation (NDPR).
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
					<div className='p-4 bg-zinc-900/50 rounded-2xl border border-white/5'>
						<span className='font-bold text-white text-xs uppercase block mb-2 tracking-widest'>
							Deployment Data
						</span>
						<p className='text-xs leading-relaxed'>
							Coordinates and contact metrics are used strictly to facilitate
							the secure transit and delivery of your technical assets.
						</p>
					</div>
					<div className='p-4 bg-zinc-900/50 rounded-2xl border border-white/5'>
						<span className='font-bold text-white text-xs uppercase block mb-2 tracking-widest'>
							Secure Financial Logs
						</span>
						<p className='text-xs leading-relaxed'>
							Payment tokens and verification logs are siloed and encrypted to
							prevent unauthorized access during the checkout sequence.
						</p>
					</div>
				</div>
			</div>

			<div className='bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden'>
				<div className='absolute top-0 right-0 p-6 opacity-20 font-black text-4xl text-white italic'>
					ENCRYPTED
				</div>
				<div className='relative z-10'>
					<h4 className='text-sm sm:text-base lg:text-lg font-black uppercase tracking-widest text-white'>
						02. Hardware-Level Data Protection
					</h4>
					<p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base text-white/90'>
						{CompanyName} employs bank-grade AES-256 encryption to
						protect your digital identity. We treat your personal data with the
						same precision we apply to high-performance computing—ensuring zero
						vulnerabilities.
					</p>
				</div>
			</div>
		</div>
	);
};

export const DeliveryReturn = () => {
	return (
		<div className='text-zinc-300 space-y-12 pb-10'>
			<div>
				<h3 className='font-black text-xl md:text-2xl xl:text-3xl text-black uppercase tracking-tighter mb-4 italic'>
					Logistics & Fulfillment Architecture
				</h3>
				<p className='text-sm md:text-base leading-relaxed max-w-4xl'>
					At{" "}
					<span className='font-bold text-primary-100'>{CompanyShortName}</span>
					, we utilize a strictly monitored logistics network. From anti-static
					packaging to specialized courier handling, we ensure your components
					reach your workstation in pristine condition.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='bg-zinc-900/50 p-8 rounded-[2rem] border border-white/5'>
					<h4 className='font-black text-xs uppercase tracking-[2px] text-blue-500 mb-6'>
						Standard Technical Dispatch
					</h4>
					<p className='text-[10px] font-bold text-zinc-500 uppercase mb-4'>
						Orders Under ₦2,000,000
					</p>
					<ul className='space-y-4 text-sm'>
						<li className='flex justify-between border-b border-white/5 pb-2'>
							<span className='text-zinc-400'>Standard Transit</span>
							<span className='font-black text-white'>₦7,000.00</span>
						</li>
						<li className='flex justify-between border-b border-white/5 pb-2'>
							<span className='text-zinc-400'>Express Secure Handling</span>
							<span className='font-black text-white'>₦12,000.00</span>
						</li>
					</ul>
				</div>

				<div className='bg-white p-8 rounded-[2rem] text-black shadow-2xl'>
					<h4 className='font-black text-xs uppercase tracking-[2px] text-blue-600 mb-6'>
						Premium Fulfillment
					</h4>
					<p className='text-[10px] font-bold text-zinc-400 uppercase mb-4'>
						Enterprise / Bulk Orders
					</p>
					<ul className='space-y-4 text-sm'>
						<li className='flex justify-between border-b border-zinc-200 pb-2'>
							<span className='font-medium'>Priority Fulfillment</span>
							<span className='font-black text-blue-600 uppercase'>
								Included
							</span>
						</li>
						<li className='flex justify-between border-b border-zinc-200 pb-2'>
							<span className='font-medium'>Installation Consultation</span>
							<span className='font-black text-blue-600 uppercase'>
								Complimentary
							</span>
						</li>
					</ul>
				</div>
			</div>

			<div className='bg-zinc-900 border border-white/5 rounded-3xl p-8'>
				<h4 className='font-black text-sm uppercase tracking-widest text-white mb-4'>
					The "Dead on Arrival" (DOA) Protocol
				</h4>
				<p className='text-xs md:text-sm text-zinc-400 leading-relaxed mb-6'>
					We provide a{" "}
					<span className='text-primary-400 font-bold'>Direct Replacement</span>{" "}
					for components found technically defective upon unboxing. To initiate
					a DOA claim, an "Unboxing Video" is mandatory to verify that the
					defect is factory-related and not a result of improper installation.
				</p>
			</div>
		</div>
	);
};

export const RefundPolicy = () => {
	return (
		<div className='text-zinc-400 space-y-6 text-xs sm:text-sm'>
			<p>
				{CompanyName} ensures that every unit dispatched meets industrial
				rigorous benchmarks. Our refund architecture is designed to protect the
				technical integrity of high-value components.
			</p>

			<section className='space-y-2'>
				<h3 className='font-bold text-white uppercase text-xs tracking-widest'>
					1. Eligibility for Returns
				</h3>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						<strong>Technical Malfunction:</strong> Confirmed hardware failure
						within 48 hours of deployment.
					</li>
					<li>
						<strong>Manifest Mismatch:</strong> Receipt of a component with
						technical specs differing from the order.
					</li>
					<li>
						<strong>Seal Integrity:</strong> Returns are only processed if the
						manufacturer’s anti-static or security seal remains unbroken (unless
						for defective units).
					</li>
				</ul>
			</section>

			<section className='space-y-2'>
				<h3 className='font-bold text-white uppercase text-xs tracking-widest'>
					2. Non-Refundable Classifications
				</h3>
				<ul className='list-disc pl-5 space-y-2'>
					<li>
						<strong>Software & Licenses:</strong> Digital activation keys and
						pre-loaded OS environments.
					</li>
					<li>
						<strong>Integration Damage:</strong> Damage caused by improper
						installation (e.g., bent CPU pins, electrostatic discharge).
					</li>
					<li>
						<strong>Consumables:</strong> Opened thermal paste, cooling fluids,
						or pads.
					</li>
				</ul>
			</section>

			<p className='mt-4 p-4 bg-zinc-900 rounded-xl border border-white/5'>
				<strong>Important Note:</strong> To maintain the quality of our
				inventory, all returns undergo a <strong>Technical Diagnostic</strong>{" "}
				by {CompanyShortName} engineers before a credit or replacement is authorized.
			</p>
		</div>
	);
};

export const AboutUsContent = () => {
	return (
		<>
			<p className='text-zinc-400 text-sm sm:text-lg lg:text-xl leading-relaxed lg:text-right max-w-2xl'>
				{CompanyName} is the backbone of your digital
				infrastructure. We provide the high-performance internal components and
				precision peripherals that define modern enterprise and gaming
				workflows.
			</p>

			<p className='text-zinc-500 text-base mt-6 lg:text-right max-w-xl font-medium'>
				Our mission is to supply the precision-engineered tools required for the
				professional technical age—ensuring your digital ecosystem never misses
				a beat.
			</p>
		</>
	);
};

export const performanceFeatures = [
	{
		title: "Processing Speed",
		description:
			"Optimized data transfer rates and ultra-low latency components ensure your system handles demanding technical workflows without bottlenecking.",
		icon: <FiZap className='text-zinc-400 text-2xl' />,
	},
	{
		title: "System Security",
		description:
			"Hardware-level encryption and secure firmware protocols protect your technical assets and sensitive data from external breach attempts.",
		icon: <FiShield className='text-zinc-400 text-2xl' />,
	},
	{
		title: "Technical Support",
		description:
			"Direct access to our hardware engineering team for troubleshooting and system optimization to keep your gear at peak performance.",
		icon: <FiHeadphones className='text-zinc-400 text-2xl' />,
	},
];