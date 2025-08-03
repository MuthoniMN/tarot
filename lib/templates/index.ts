// Export all email templates from a single index file
export { freeReadingConfirmationEmail } from "./free-reading-confirmation"
export { freeReadingFollowUpEmail } from "./free-reading-followup"
export { freeReadingDeliveryEmail } from "./free-reading-delivery"
export { readingDeliveryEmail } from "./reading-delivery"
export { birthdayEmail } from "./birthday-email"
export { successfulPaymentEmail } from "./payment-success"
export { failedPaymentEmail } from "./payment-failed"
export { paidReadingReminderEmail } from "./reading-reminder"
export { bitcoinPaymentSuccessEmail } from "./bitcoin-payment-success"

// Export types
export type { EmailTemplate, UserData } from "./types"
export { formatCurrency, formatDate, emailStyles } from "./types"
