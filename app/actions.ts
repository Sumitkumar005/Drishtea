"use server"

export async function sendMessage(formData: FormData) {
  // Simulate form processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const fullName = formData.get("fullName") as string
  const email = formData.get("email") as string
  const message = formData.get("message") as string

  // In a real application, you would send this data to your backend or email service
  console.log("Contact form submission:", { fullName, email, message })

  return {
    success: true,
    message: "Thank you for your message! We will get back to you within 24 hours.",
  }
}
