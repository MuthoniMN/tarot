import nodemailer from "nodemailer"
import {
    freeReadingConfirmationEmail,
    freeReadingFollowUpEmail,
    freeReadingDeliveryEmail,
    readingDeliveryEmail,
    birthdayEmail,
    successfulPaymentEmail,
    failedPaymentEmail,
    paidReadingReminderEmail,
    bitcoinPaymentSuccessEmail,
    type UserData,
    type EmailTemplate,
} from "./templates"

// Email service configuration
interface EmailConfig {
    host: string
    port: number
    secure: boolean
    auth: {
        user: string
        pass: string
    }
    fromEmail: string
    fromName: string
}

// Nodemailer email service
class EmailService {
    private config: EmailConfig
    private transporter: nodemailer.Transporter

    constructor(config: EmailConfig) {
        this.config = config

        // Create Nodemailer transporter
        this.transporter = nodemailer.createTransport({
            host: config.host,
            port: config.port,
            secure: config.secure, // true for 465, false for other ports
            auth: {
                user: config.auth.user,
                pass: config.auth.pass,
            },
        })
    }

    async sendEmail(
        to: string,
        template: EmailTemplate,
        attachments?: Array<{
            filename: string
            content: Buffer | string
            contentType?: string
        }>,
    ): Promise<boolean> {
        try {
            const mailOptions = {
                from: `${this.config.fromName} <${this.config.fromEmail}>`,
                to: to,
                subject: template.subject,
                text: template.text,
                html: template.html,
                attachments: attachments || [],
            }

            const info = await this.transporter.sendMail(mailOptions)
            console.log("Email sent successfully:", info.messageId)
            return true
        } catch (error) {
            console.error("Failed to send email:", error)
            return false
        }
    }

    // Convenience methods for each email type
    async sendFreeReadingConfirmation(userData: UserData): Promise<boolean> {
        const template = freeReadingConfirmationEmail(userData)
        return this.sendEmail(userData.email, template)
    }

    async sendFreeReadingFollowUp(userData: UserData): Promise<boolean> {
        const template = freeReadingFollowUpEmail(userData)
        return this.sendEmail(userData.email, template)
    }

    async sendBirthdayEmail(userData: UserData): Promise<boolean> {
        const template = birthdayEmail(userData)
        return this.sendEmail(userData.email, template)
    }

    async sendSuccessfulPayment(userData: UserData): Promise<boolean> {
        const template = successfulPaymentEmail(userData)
        return this.sendEmail(userData.email, template)
    }

    async sendFailedPayment(userData: UserData): Promise<boolean> {
        const template = failedPaymentEmail(userData)
        return this.sendEmail(userData.email, template)
    }

    async sendReadingReminder(userData: UserData): Promise<boolean> {
        const template = paidReadingReminderEmail(userData)
        return this.sendEmail(userData.email, template)
    }

    async sendBitcoinPaymentSuccess(userData: UserData): Promise<boolean> {
        const template = bitcoinPaymentSuccessEmail(userData)
        return this.sendEmail(userData.email, template)
    }

    async sendFreeReadingDelivery(userData: UserData): Promise<boolean> {
        const template = freeReadingDeliveryEmail(userData)
        return this.sendEmail(userData.email, template)
    }

    async sendReadingDelivery(userData: UserData, pdfBuffer?: Buffer): Promise<boolean> {
        const template = readingDeliveryEmail(userData)

        const attachments = pdfBuffer
            ? [
                {
                    filename: `${userData.firstName}_Reading_${new Date().toISOString().split("T")[0]}.pdf`,
                    content: pdfBuffer,
                    contentType: "application/pdf",
                },
            ]
            : []

        return this.sendEmail(userData.email, template, attachments)
    }

    // Test email connection
    async testConnection(): Promise<boolean> {
        try {
            await this.transporter.verify()
            console.log("Email server connection verified")
            return true
        } catch (error) {
            console.error("Email server connection failed:", error)
            return false
        }
    }
}

// Initialize email service with environment variables
export const emailService = new EmailService({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER || "",
        pass: process.env.SMTP_PASS || "", // Use app password for Gmail
    },
    fromEmail: process.env.FROM_EMAIL || "luna@mysticreadings.com",
    fromName: process.env.FROM_NAME || "Luna Starweaver - Mystic Readings",
})

// Scheduled email functions (for use with cron jobs or scheduled tasks)
export const scheduleFollowUpEmail = async (userData: UserData, delayDays = 4) => {
    // This would integrate with a job queue or scheduler
    console.log(`Scheduling follow-up email for ${userData.email} in ${delayDays} days`)

    // Example with a simple timeout (in production, use a proper job queue)
    setTimeout(
        async () => {
            await emailService.sendFreeReadingFollowUp(userData)
        },
        delayDays * 24 * 60 * 60 * 1000,
    )
}

export const scheduleBirthdayEmail = async (userData: UserData) => {
    if (!userData.birthDate) return

    const birthDate = new Date(userData.birthDate)
    const now = new Date()
    const thisYearBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate())

    // If birthday has passed this year, schedule for next year
    if (thisYearBirthday < now) {
        thisYearBirthday.setFullYear(now.getFullYear() + 1)
    }

    const timeUntilBirthday = thisYearBirthday.getTime() - now.getTime()

    console.log(`Scheduling birthday email for ${userData.email} on ${thisYearBirthday.toDateString()}`)

    setTimeout(async () => {
        await emailService.sendBirthdayEmail(userData)
    }, timeUntilBirthday)
}
