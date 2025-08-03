'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LinkedinIcon, YoutubeIcon, MailIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Platform',
		links: [
			{ title: 'GeoCube Explorer', href: '#explorer' },
			{ title: 'Satellite Analytics', href: '#analytics' },
			{ title: 'Legacy Data Engine', href: '#data-engine' },
			{ title: 'Enterprise API', href: '#api' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About Terra', href: '/about' },
			{ title: 'Case Studies', href: '/case-studies' },
			{ title: 'Client Success', href: '/success' },
			{ title: 'Careers', href: '/careers' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Documentation', href: '/docs' },
			{ title: 'API Reference', href: '/api-docs' },
			{ title: 'Support Center', href: '/support' },
			{ title: 'Privacy Policy', href: '/privacy' },
		],
	},
	{
		label: 'Connect',
		links: [
			{ title: 'Email', href: 'mailto:hello@terra.is', icon: MailIcon },
			{ title: 'LinkedIn', href: '#', icon: LinkedinIcon },
			{ title: 'Twitter', href: '#', icon: TwitterIcon },
			{ title: 'YouTube', href: '#', icon: YoutubeIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="md:rounded-t-6xl relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<div className="flex items-center gap-3">
						<Image 
							src="/logos/geocube_white.svg" 
							alt="GeoCube" 
							width={32} 
							height={32} 
							className="h-8 w-8"
						/>
						<div>
							<h3 className="text-xl font-bold text-white">GeoCube</h3>
							<p className="text-muted-foreground text-xs">by Terra Exploration</p>
						</div>
					</div>
					<p className="text-muted-foreground text-sm max-w-sm">
						Precision mineral intelligence at enterprise scale. Transforming geological exploration through AI-powered data fusion.
					</p>
					<p className="text-muted-foreground mt-8 text-sm md:mt-4">
						© {new Date().getFullYear()} Terra Exploration. All rights reserved.
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs font-semibold text-white">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="hover:text-foreground inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}