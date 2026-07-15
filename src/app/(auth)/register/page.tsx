"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

function RegisterForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const isAffiliate = type !== "student"; // Default to affiliate unless specified
      
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, isAffiliate })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // Automatically sign in after registration
      const signInRes = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (signInRes?.error) {
        throw new Error(signInRes.error);
      }

      router.push("/dashboard");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm font-medium">
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white/50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white/50"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm bg-white/50"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            required
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I agree to the <a href="/terms" className="text-primary hover:text-accent">Terms of Service</a> and <a href="/privacy" className="text-primary hover:text-accent">Privacy Policy</a>
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-lg text-sm font-medium text-white bg-cta hover:bg-cta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta transition-all hover:-translate-y-0.5 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </div>
      </form>
    </>
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-cta/20 rounded-full blur-[100px] -z-10" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-accent mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to home
        </Link>
        <img alt="Achievers University Logo" className="mx-auto h-12 w-auto mb-4" src="/logo.png" />
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Start your journey today
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:text-accent">
            Sign in instead
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10">
        <div className="glass py-8 px-4 shadow-2xl sm:rounded-3xl sm:px-10 border border-white/50 bg-white/60 backdrop-blur-xl">
          <Suspense fallback={<div className="text-center text-sm text-gray-500 py-4">Loading form...</div>}>
            <RegisterForm />
          </Suspense>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By registering, you automatically join our affiliate program. Your dashboard will be created instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
