"use client"

import { UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="min-h-svh p-6">
      <UserButton />
    </div>
  )
}