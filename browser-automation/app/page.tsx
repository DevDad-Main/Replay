"use client"

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    // <div className="min-h-svh p-6">
    <div className="flex flex-col items-start gap-4">
      <UserButton />
      <OrganizationSwitcher />
    </div>
  )
}
