import React from "react";

const page = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
			<div className="absolute inset-0 opacity-30">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
			</div>

			<div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rotate-45 animate-float hidden lg:block"></div>

			<nav className="relative z-10 flex items-center justify-between p-8 lg:px-12">
				<a
					href="#"
					className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
				>
					Magnitopic
				</a>
				<ul className="flex space-x-8 text-sm">
					<li>
						<a
							href="#projects"
							className="text-white/80 hover:text-white transition-colors relative group"
						>
							Projects
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="text-white/80 hover:text-white transition-colors relative group"
						>
							Contact
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
						</a>
					</li>
					<li>
						<a
							href="#photography"
							className="text-white/80 hover:text-white transition-colors relative group"
						>
							Photography
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
						</a>
					</li>
				</ul>
			</nav>

			<div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 text-center">
				<div className="max-w-4xl mx-auto animate-fadeIn">
					<p className="text-lg text-white/70 mb-4">Hi, I'm</p>
					<h1 className="text-5xl lg:text-7xl font-bold mb-2">
						<span className="bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
							Alex Aparicio
						</span>
					</h1>
					<h2 className="text-2xl lg:text-3xl font-semibold text-white/90 mb-3">
						Software Developer
					</h2>
					<p className="text-blue-400 font-medium mb-6">
						aka Magnitopic
					</p>

					<p className="text-lg text-white/80 mb-2 max-w-2xl mx-auto">
						I love creating, learning and exploring technology
					</p>
					<p className="text-white/60 mb-12">
						Web Dev • Data Science • AI
					</p>

					<div className="flex justify-center space-x-6">
						<a
							href="#"
							className="group flex items-center justify-center w-12 h-12 text-white/70 bg-white/5 hover:bg-white/10 rounded-lg transition-all hover:scale-105 hover:text-blue-400 border border-white/10 hover:border-blue-400/50"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
							</svg>
						</a>
						<a
							href="#"
							className="group flex items-center justify-center w-12 h-12 text-white/70 bg-white/5 hover:bg-white/10 rounded-lg transition-all hover:scale-105 hover:text-blue-400 border border-white/10 hover:border-blue-400/50"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
						<a
							href="#"
							className="group flex items-center justify-center w-12 h-12 text-white/70 bg-white/5 hover:bg-white/10 rounded-lg transition-all hover:scale-105 hover:text-blue-400 border border-white/10 hover:border-blue-400/50"
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 24 24"
							>
								<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
							</svg>
						</a>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
				<div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
					<div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
				</div>
			</div>
		</div>
	);
};

export default page;
