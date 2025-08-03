import { Footer } from '@/components/ui/footer-section';

export default function FooterDemo() {
	return (
		<div className="relative flex min-h-screen flex-col bg-slate-950">
			<div className="flex-1 flex items-center justify-center">
				<div className="text-center">
					<h1 className="font-mono text-4xl font-bold text-white mb-4">
						New Footer Demo
					</h1>
					<p className="text-slate-400 text-lg mb-8">
						Scroll down to see the new footer with GeoCube branding
					</p>
					<div className="text-slate-500 text-sm">
						Featuring: Motion animations, GeoCube logo, and Terra Exploration links
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}