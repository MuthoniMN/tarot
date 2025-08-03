import { NextRequest, NextResponse } from "next/server"
import { emailService } from "@/lib/email-service"
import type { UserData } from "@/lib/templates/types"

export async function POST(request: NextRequest) {
    try {
        const { reference, bookingData } = await request.json()

        // Here you would verify the payment with Paystack API using the reference
        // For demonstration, let's assume verification is successful if reference is truthy
        const paymentVerified = Boolean(reference)

        if (paymentVerified) {
            // Prepare user data for emails
            const userData: UserData = {
                firstName: bookingData.firstName,
                lastName: bookingData.lastName || "",
                email: bookingData.email,
                readingType: bookingData.service || "",
                questions: bookingData.questions || "",
            }

            // Send payment success email
            await emailService.sendSuccessfulPayment(userData)

            return NextResponse.json({ success: true, message: "Payment verified and emails sent" })
        } else {
            // Send payment failed email
            const userData: UserData = {
                firstName: bookingData.firstName,
                lastName: bookingData.lastName || "",
                email: bookingData.email,
            }
            await emailService.sendFailedPayment(userData)

            return NextResponse.json({ success: false, message: "Payment verification failed" })
        }
    } catch (error) {
        console.error("Error verifying payment:", error)
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
    }
}
