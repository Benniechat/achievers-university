"use client";
import { useState } from "react";
import { markLessonComplete } from "@/actions/progress";

export function MarkCompleteButton({ lessonId, courseId, isCompleted }: { lessonId: string, courseId: string, isCompleted: boolean }) {
  const [loading, setLoading] = useState(false);

  const handleComplete = async () => {
    setLoading(true);
    try {
      await markLessonComplete(lessonId, courseId);
    } catch (e) {
      alert("Failed to mark complete");
    } finally {
      setLoading(false);
    }
  };

  if (isCompleted) {
    return (
      <button disabled className="bg-green-500/20 text-green-500 border border-green-500/50 font-bold px-6 py-2 rounded-md flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">check_circle</span>
        Completed
      </button>
    );
  }

  return (
    <button 
      onClick={handleComplete} 
      disabled={loading}
      className="bg-cta text-primary font-bold px-6 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
    >
      {loading ? "Marking..." : "Mark as Complete"}
      <span className="material-symbols-outlined text-[18px]">done</span>
    </button>
  );
}
