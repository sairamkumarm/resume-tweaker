"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOAuthLogin = (provider: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log(`Logged in with ${provider}`);
    }, 2000);
  };

  const providerConfig = [
    {
      name: "Google",
      iconPath: "/svgs/socialmedia/google.svg",
    },
    {
      name: "LinkedIn",
      iconPath: "/svgs/socialmedia/linkedin.svg",
    },
    {
      name: "Apple",
      iconPath: "/svgs/socialmedia/apple.svg",
    },
  ];

  const themeOptions = [
    { name: "light", icon: Sun },
    { name: "dark", icon: Moon },
    { name: "system", icon: Laptop },
  ];

  if (!mounted) {
    return null;
  }

  const isDarkTheme = resolvedTheme === "dark";

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 ${
        isDarkTheme ? "bg-black" : "bg-white"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card
          className={`border-border shadow-lg ${
            isDarkTheme ? "bg-black" : "bg-white"
          }`}
        >
          <CardHeader className="space-y-1">
            <CardTitle
              className={`text-2xl font-bold text-center ${
                isDarkTheme ? "text-white" : "text-black"
              }`}
            >
              Sign in
            </CardTitle>
            <CardDescription
              className={`text-center ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Choose your preferred sign-in method
            </CardDescription>
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
                  className={`w-full font-semibold py-2 px-4 rounded-md shadow-sm hover:shadow-md text-center transition-all duration-200 flex items-center justify-center
                    ${
                      isDarkTheme
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  onClick={() => handleOAuthLogin(provider.name)}
                  disabled={isLoading}
                >
                  <div className="w-full justify-center gap-2 text-lg flex flex-row items-center">
                    <Image
                      width={20}
                      height={20}
                      src={provider.iconPath}
                      alt={provider.name.toLowerCase()}
                      className={`mr-2 ${isDarkTheme ? "" : "filter invert"}`}
                    />
                    {isLoading
                      ? "Signing in..."
                      : `${provider.name}`}
                  </div>
                </Button>
              </motion.div>
            ))}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div
              className={`text-sm text-center ${
                isDarkTheme ? "text-gray-300" : "text-gray-600"
              }`}
            >
              By signing in, you agree to our
              <a
                href="#"
                className={`hover:underline ml-1 ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
              >
                Terms of Service
              </a>
              <span className="mx-1">and</span>
              <a
                href="#"
                className={`hover:underline ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
              >
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
                  className={`${theme === option.name ? "bg-muted" : ""}`}
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
