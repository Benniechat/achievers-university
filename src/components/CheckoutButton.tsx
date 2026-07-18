"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CheckoutButton({ courseId, price }: { courseId: string, price: number }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout/paystack", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        if (res.status === 401) {
          router.push("/login");
          return;
        }
        alert(data.error || "Checkout failed");
        setLoading(false);
        return;
      }

      if (data.authorizationUrl) {
        window.location.href = data.authorizationUrl;
      }
    } catch (error) {
      alert("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handleCheckout} 
      disabled={loading}
      className="bg-cta text-primary font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity w-full shadow-[0_0_20px_rgba(253,191,15,0.3)] disabled:opacity-50"
    >
      {loading ? "Processing..." : `Enroll Now for ₦${price.toLocaleString()}`}
    </button>
  );
}
