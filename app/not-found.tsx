"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="container mx-auto py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in min-h-[60vh]">
        <div className="p-6 rounded-full bg-primary/10">
          <Compass className="h-24 w-24 text-primary animate-pulse" />
        </div>

        <div className="space-y-4 max-w-2xl">
          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
            404
          </h1>
          <h2 className="text-2xl font-semibold sm:text-3xl md:text-4xl">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl max-w-xl mx-auto">
            Oops! Looks like you've wandered off the map. The page you're
            looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Redirecting to home in{" "}
            <span className="font-bold text-primary">{countdown}</span> second
            {countdown !== 1 ? "s" : ""}...
          </p>

          <Button size="lg" className="group">
            <Link href="/" className="flex items-center">
              <Home className="mr-2 h-5 w-5" />
              Go Home Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
