import { NextRequest, NextResponse } from "next/server"
import { generateFreeReading } from "@/lib/genAiFreeReading"
import { emailService } from "@/lib/email-service"
import type { UserData } from "@/lib/templates/types"

export async function POST(request: NextRequest) {
    try {
        const data = await request.json()

        // Validate required fields
        if (!data.email || !data.firstName) {
            return NextResponse.json({ error: "Missing required user data" }, { status: 400 })
        }

        // Construct prompt including question, readingType, birthDate, birthTime
        const prompt = `Provide a free tarot or spiritual reading based on the following question: "${data.questions}". Also consider the user's reading type preference: "${data.readingType}", birth date: "${data.birthDate}", and birth time: "${data.birthTime}".`

        // Generate the reading
        const generatedReading = await generateFreeReading(prompt)

        // Prepare user data for emails
        const userData: UserData = {
            firstName: data.firstName,
            lastName: data.lastName || "",
            email: data.email,
            readingType: data.readingType || "",
            questions: data.questions || "",
            generatedReading, // add generated reading to userData for delivery email
        }

        // Send confirmation email immediately
        await emailService.sendFreeReadingConfirmation(userData)

        // Schedule delivery email after 10 minutes (600000 ms)
        setTimeout(async () => {
            await emailService.sendFreeReadingDelivery(userData)
        }, 600000)

        return NextResponse.json({ message: "Free consultation request received", generatedReading })
    } catch (error) {
        console.error("Error in free consultation API:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
