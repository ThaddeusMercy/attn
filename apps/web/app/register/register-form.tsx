"use client";

import type { FormEvent } from "react";
import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import posthog from "posthog-js";

export function RegisterForm() {
  const router = useRouter();
  const nameId = useId();
  const emailId = useId();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const data = new FormData(event.currentTarget);
    if (data.get("website")) {
      router.push("/registered");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source: "register_page" }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "could not reserve your spot");
      }
      posthog.capture("training_registered", { source: "register_page" });
      router.push("/registered");
    } catch (err) {
      setError(err instanceof Error ? err.message : "something went wrong");
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="sr-only" htmlFor={nameId}>
        name
      </label>
      <input
        id={nameId}
        name="name"
        autoComplete="name"
        placeholder="your name"
        required
        className="h-14 w-full rounded-sm border border-neutral-200 bg-white px-4 text-[16px] text-neutral-900 placeholder:text-[#888] outline-none focus:border-[#0099ff]"
      />
      <label className="sr-only" htmlFor={emailId}>
        email
      </label>
      <input
        id={emailId}
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@email.com"
        required
        className="h-14 w-full rounded-sm border border-neutral-200 bg-white px-4 text-[16px] text-neutral-900 placeholder:text-[#888] outline-none focus:border-[#0099ff]"
      />
      <input
        aria-hidden="true"
        autoComplete="off"
        className="hidden"
        name="website"
        tabIndex={-1}
        type="text"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-sm bg-[#0099ff] text-[15px] font-medium text-white transition hover:bg-[#0088e6] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "reserving your spot…" : "reserve my free spot"}
        {!isSubmitting && <span aria-hidden>&rarr;</span>}
      </button>
      <p className="text-center text-[12px] text-[#888]">
        100% free — no card required.
      </p>
      {error ? (
        <p className="text-center text-[13px] font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </form>
  );
}
