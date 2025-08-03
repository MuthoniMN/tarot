import { type EmailTemplate, type UserData, emailStyles, formatCurrency, formatDate } from "./types"

export const failedPaymentEmail = (userData: UserData): EmailTemplate => ({
    subject: "⚠️ Payment Issue - Let's Resolve This Together",
    html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${emailStyles}
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="stars">⚠️ 🌙 💫</div>
          <h1>Payment Assistance Needed</h1>
          <p>Let's resolve this together</p>
        </div>
        
        <div class="content">
          <h2>Hello ${userData.firstName},</h2>
          
          <p>I wanted to reach out personally because there was an issue processing your payment for your upcoming reading session. Don't worry - this happens sometimes and is usually easy to resolve!</p>
          
          <div class="mystical-border">
            <h3>🔍 Common Payment Issues:</h3>
            <ul>
              <li>Card expiration date or security code mismatch</li>
              <li>Insufficient funds or daily spending limit reached</li>
              <li>Bank security hold on online transactions</li>
              <li>Billing address doesn't match card information</li>
            </ul>
          </div>

          <p><strong>Your session details are still held for you:</strong></p>
          <ul>
            <li><strong>Reading Type:</strong> ${userData.readingType || "Spiritual Guidance Session"}</li>
            <li><strong>Requested Date:</strong> ${userData.sessionDate ? formatDate(userData.sessionDate) : "To be scheduled"}</li>
            <li><strong>Requested Time:</strong> ${userData.sessionTime || "To be confirmed"} EST</li>
            <li><strong>Amount:</strong> ${userData.amount ? formatCurrency(userData.amount) : "N/A"}</li>
          </ul>

          <div style="text-align: center; background: linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%); padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="margin: 0; color: #c53030;">⏰ Time-Sensitive</h3>
            <p style="margin: 10px 0; color: #c53030;">Please retry your payment within 24 hours to secure your preferred time slot</p>
            <a href="https://mysticreadings.com/retry-payment?session=${userData.transactionId}" class="cta-button">Retry Payment Now</a>
          </div>

          <div class="mystical-border">
            <h3>💳 Alternative Payment Options:</h3>
            <ul>
              <li>Try a different credit or debit card</li>
              <li>Use PayPal for secure processing</li>
              <li>Contact your bank to authorize the transaction</li>
              <li>Call me directly for phone payment assistance</li>
            </ul>
          </div>

          <p>If you continue to experience issues, please don't hesitate to reply to this email or call me directly. I'm here to help ensure you receive the spiritual guidance you're seeking.</p>

          <p><em>Remember: Sometimes the universe creates small delays to ensure perfect timing. Trust that everything is unfolding as it should.</em></p>

          <p>Here to support you,<br>
          <strong>Luna Starweaver</strong><br>
          <em>Phone: (555) 123-MYSTIC</em></p>
        </div>
        
        <div class="footer">
          <p>🌙 Mystic Readings | We're here to help</p>
          <p>Payment support available 7 days a week</p>
        </div>
      </div>
    </body>
    </html>
  `,
    text: `
    Hello ${userData.firstName},

    I wanted to reach out personally because there was an issue processing your payment for your upcoming reading session. Don't worry - this happens sometimes and is usually easy to resolve!

    Common Payment Issues:
    - Card expiration date or security code mismatch
    - Insufficient funds or daily spending limit reached
    - Bank security hold on online transactions
    - Billing address doesn't match card information

    Your session details are still held for you:
    - Reading Type: ${userData.readingType || "Spiritual Guidance Session"}
    - Requested Date: ${userData.sessionDate ? formatDate(userData.sessionDate) : "To be scheduled"}
    - Requested Time: ${userData.sessionTime || "To be confirmed"} EST
    - Amount: ${userData.amount ? formatCurrency(userData.amount) : "N/A"}

    TIME-SENSITIVE: Please retry your payment within 24 hours to secure your preferred time slot
    Retry payment: https://mysticreadings.com/retry-payment?session=${userData.transactionId}

    Alternative Payment Options:
    - Try a different credit or debit card
    - Use PayPal for secure processing
    - Contact your bank to authorize the transaction
    - Call me directly for phone payment assistance

    If you continue to experience issues, please don't hesitate to reply to this email or call me directly. I'm here to help ensure you receive the spiritual guidance you're seeking.

    Remember: Sometimes the universe creates small delays to ensure perfect timing. Trust that everything is unfolding as it should.

    Here to support you,
    Luna Starweaver
    Phone: (555) 123-MYSTIC

    Mystic Readings | We're here to help
  `,
})
