"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendMessage } from "@/app/actions"

export function ContactForm() {
  const [state, action, isPending] = useActionState(sendMessage, null)

  return (
    <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 max-w-2xl">
      <h3 className="text-2xl font-bold text-green-700 mb-6">Send us a Message</h3>

      {state?.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">{state.message}</div>
      )}

      <form action={action} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl text-lg transition-colors"
        >
          {isPending ? "Sending..." : "Send Inquiry"}
        </Button>
      </form>
    </div>
  )
}
