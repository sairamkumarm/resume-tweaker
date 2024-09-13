// 'use client'

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Button } from "@/components/ui/button"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
// import { useTheme } from 'next-themes'
// import { Sun, Moon, Laptop } from 'lucide-react'
// import Image from 'next/image'

// export default function LoginPage() {
//   const [isLoading, setIsLoading] = useState(false)
//   const { theme, setTheme } = useTheme()

//   const handleOAuthLogin = (provider: string) => {
//     setIsLoading(true)
//     // Simulating OAuth login
//     setTimeout(() => {
//       setIsLoading(false)
//       console.log(`Logged in with ${provider}`)
//     }, 2000)
//   }

//   const providerConfig = [
//     { name: 'Google', icon: <Image width={10} height={20} src={"./socialmedia/google.svg"} alt='google' />, },
//     { name: 'LinkedIn', icon: <Image width={20} height={20} src={"./socialmedia/linkedin.svg"} alt='linkedin' />, },
//     { name: 'Apple', icon: <Image width={20} height={20} src={"./socialmedia/apple.svg"} alt='apple' />,},
//   ]

//   const themeOptions = [
//     { name: 'light', icon: Sun },
//     { name: 'dark', icon: Moon },
//     { name: 'system', icon: Laptop },
//   ]

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-md"
//       >
//         <Card className="border-zinc-200 dark:border-zinc-800 shadow-lg">
//           <CardHeader className="space-y-1">
//             <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
//             <CardDescription className="text-center">
//               Choose your preferred sign-in method
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4 mt-4">
//             {providerConfig.map((provider, index) => (
//               <motion.div
//                 key={provider.name}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <Button
//                   className={`w-full  font-semibold py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center`}
//                   onClick={() => handleOAuthLogin(provider.name)}
//                   variant={"default"}
//                   disabled={isLoading}
//                 >
//                   <div className="mr-2 text-lg">
//                     {provider.icon}
//                   </div>
//                   {isLoading ? 'Signing in...' : `Continue with ${provider.name}`}
//                 </Button>
//               </motion.div>
//             ))}
//           </CardContent>
//           <CardFooter className="flex flex-col space-y-4">
//             <div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
//               By signing in, you agree to our
//               <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:underline ml-1">Terms of Service</a>
//               <span className="mx-1">and</span>
//               <a href="#" className="text-zinc-900 dark:text-zinc-100 hover:underline">Privacy Policy</a>
//             </div>
//             <div className="flex justify-center space-x-2">
//               {themeOptions.map((option) => (
//                 <Button
//                   key={option.name}
//                   variant="outline"
//                   size="sm"
//                   onClick={() => setTheme(option.name)}
//                   className={`${theme === option.name ? 'bg-zinc-200 dark:bg-zinc-700' : ''}`}
//                 >
//                   <option.icon className="h-[1.2rem] w-[1.2rem]" />
//                   <span className="sr-only">{option.name} theme</span>
//                 </Button>
//               ))}
//             </div>
//           </CardFooter>
//         </Card>
//       </motion.div>
//     </div>
//   )
// }
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [showContent, setShowContent] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowContent(true);
		}, 3000); // 3 second delay
		return () => clearTimeout(timer);
	}, []);

	const handleOAuthLogin = (provider: string) => {
		setIsLoading(true);
		// Simulating OAuth login
		setTimeout(() => {
			setIsLoading(false);
			console.log(`Logged in with ${provider}`);
		}, 2000);
	};

	const providerConfig = [
		{ name: "Google", icon: <Image width={10} height={20} src={"./socialmedia/google.svg"} alt="google" /> },
		{ name: "LinkedIn", icon: <Image width={20} height={20} src={"./socialmedia/linkedin.svg"} alt="linkedin" /> },
		{ name: "Apple", icon: <Image width={20} height={20} src={"./socialmedia/apple.svg"} alt="apple" /> },
	];

	const themeOptions = [
		{ name: "light", icon: Sun },
		{ name: "dark", icon: Moon },
		{ name: "system", icon: Laptop },
	];

	if (!showContent) {
		return <div className="min-h-screen flex items-center justify-center p-4">Loading...</div>;
	}

	return (
		<div className="min-h-screen flex items-center justify-center p-4">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full max-w-md"
			>
				<Card className="border-zinc-200 dark:border-zinc-800 shadow-lg">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
						<CardDescription className="text-center">Choose your preferred sign-in method</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4 mt-4">
						{providerConfig.map((provider, index) => (
							<motion.div
								key={provider.name}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
							>
								<Button
									className={`w-full  font-semibold py-2 px-4 rounded-md shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center`}
									onClick={() => handleOAuthLogin(provider.name)}
									variant={"default"}
									disabled={isLoading}
								>
									<div className="mr-2 text-lg">{provider.icon}</div>
									{isLoading ? "Signing in..." : `Continue with ${provider.name}`}
								</Button>
							</motion.div>
						))}
					</CardContent>
					<CardFooter className="flex flex-col space-y-4">
						<div className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
							By signing in, you agree to our
							<a href="#" className="text-zinc-900 dark:text-zinc-100 hover:underline ml-1">
								Terms of Service
							</a>
							<span className="mx-1">and</span>
							<a href="#" className="text-zinc-900 dark:text-zinc-100 hover:underline">
								Privacy Policy
							</a>
						</div>
						<div className="flex justify-center space-x-2">
							{themeOptions.map((option) => (
								<Button
									key={option.name}
									variant="outline"
									size="sm"
									onClick={() => setTheme(option.name)}
									className={`${theme === option.name ? "bg-zinc-200 dark:bg-zinc-700" : ""}`}
								>
									<option.icon className="h-[1.2rem] w-[1.2rem]" />
									<span className="sr-only">{option.name} theme</span>
								</Button>
							))}
						</div>
					</CardFooter>
				</Card>
			</motion.div>
		</div>
	);
}
