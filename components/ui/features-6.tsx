import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'

export function Features() {
    return (
        <section id="solution" className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-12 px-6">
                <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-semibold">The GeoCube ecosystem brings together our models</h2>
                    <p className="max-w-sm sm:ml-auto">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
                </div>
                <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                    <div className="aspect-[88/36] relative">
                        <div className="bg-gradient-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                        <img 
                            src="/images/dashboard_mvp.jpg" 
                            className="absolute inset-0 z-10 w-full h-full object-cover rounded-2xl" 
                            alt="Digital workspace interface" 
                            width={2797} 
                            height={1137} 
                        />
                        {/* Vignette overlay for MVP effect */}
                        <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-br from-black/40 via-transparent via-30% to-black/60 pointer-events-none"></div>
                        <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-tr from-black/30 via-transparent via-40% to-black/40 pointer-events-none"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80" 
                            className="hidden dark:block w-full h-full object-cover rounded-2xl" 
                            alt="Digital workspace interface dark" 
                            width={2797} 
                            height={1137} 
                        />
                        <img 
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" 
                            className="dark:hidden w-full h-full object-cover rounded-2xl" 
                            alt="Digital workspace interface light" 
                            width={2797} 
                            height={1137} 
                        />
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Faaast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Lightning-fast geological data processing and analysis for real-time insights.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Advanced AI algorithms process vast amounts of geological data with precision.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="size-4" />
                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Enterprise-grade security protecting sensitive geological and mining data.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />
                            <h3 className="text-sm font-medium">AI Powered</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Machine learning algorithms trained on decades of geological surveys and data.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}