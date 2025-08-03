import { type EmailTemplate, type UserData, emailStyles, formatCurrency, formatDate } from "./types"

export const successfulPaymentEmail = (userData: UserData): EmailTemplate => ({
    subject: "✨ Payment Confirmed - Your Reading is Scheduled!",
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
          <div class="stars">✅ ✨ 🌟</div>
          <h1>Payment Confirmed!</h1>
          <p>Your spiritual session is secured</p>
        </div>
        
        <div class="content">
          <h2>Thank you, ${userData.firstName}! 🙏</h2>
          
          <p>Your payment has been successfully processed, and your reading session is now confirmed. I'm excited to connect with you and provide the guidance you're seeking.</p>
          
          <div class="mystical-border">
            <h3>📅 Your Session Details:</h3>
            <ul>
              <li><strong>Reading Type:</strong> ${userData.readingType || "Spiritual Guidance Session"}</li>
              <li><strong>Date:</strong> ${userData.sessionDate ? formatDate(userData.sessionDate) : "To be scheduled"}</li>
              <li><strong>Time:</strong> ${userData.sessionTime || "To be confirmed"} EST</li>
              <li><strong>Amount Paid:</strong> ${userData.amount ? formatCurrency(userData.amount) : "N/A"}</li>
              <li><strong>Transaction ID:</strong> ${userData.transactionId || "Processing"}</li>
            </ul>
          </div>

          <div class="mystical-border">
            <h3>🔮 How to Prepare for Your Reading:</h3>
            <ul>
              <li><strong>Find a quiet space</strong> where you won't be interrupted</li>
              <li><strong>Prepare your questions</strong> - write down what you'd like guidance on</li>
              <li><strong>Have a notebook ready</strong> to jot down insights and messages</li>
              <li><strong>Come with an open mind</strong> and heart to receive the universe's wisdom</li>
              <li><strong>Ensure good internet connection</strong> if we're meeting via video call</li>
            </ul>
          </div>

          <p><strong>Connection Details:</strong> I'll send you the Zoom link or call you directly 5 minutes before our scheduled time.</p>

          <p><strong>Your reading will include:</strong></p>
          <ul>
            <li>📄 Comprehensive PDF reading report (8-12 pages)</li>
            <li>🎨 Beautiful mystical design with spiritual artwork</li>
            <li>📝 Detailed interpretation of your cards/chart</li>
            <li>💌 Personalized guidance and actionable insights</li>
            <li>🔮 Additional resources and spiritual practices</li>
          </ul>

          <div style="text-align: center;">
            <a href="https://mysticreadings.com/prepare-for-reading" class="cta-button">Reading Preparation Guide</a>
          </div>

          <p>If you need to reschedule or have any questions, please reply to this email at least 24 hours before your session.</p>

          <p>I'm looking forward to our connection and helping illuminate your path forward!</p>

          <p>Blessings and anticipation,<br>
          <strong>Luna Starweaver</strong><br>
          <em>Your Spiritual Guide</em></p>
        </div>
        
        <div class="footer">
          <p>🌙 Mystic Readings | Your session is confirmed</p>
          <p>Questions? Reply to this email or call (555) 123-MYSTIC</p>
        </div>
      </div>
    </body>
    </html>
  `,
    text: `
    Thank you, ${userData.firstName}!

    Your payment has been successfully processed, and your reading session is now confirmed. I'm excited to connect with you and provide the guidance you're seeking.

    Your Session Details:
    - Reading Type: ${userData.readingType || "Spiritual Guidance Session"}
    - Date: ${userData.sessionDate ? formatDate(userData.sessionDate) : "To be scheduled"}
    - Time: ${userData.sessionTime || "To be confirmed"} EST
    - Amount Paid: ${userData.amount ? formatCurrency(userData.amount) : "N/A"}
    - Transaction ID: ${userData.transactionId || "Processing"}

    How to Prepare for Your Reading:
    - Find a quiet space where you won't be interrupted
    - Prepare your questions - write down what you'd like guidance on
    - Have a notebook ready to jot down insights and messages
    - Come with an open mind and heart to receive the universe's wisdom
    - Ensure good internet connection if we're meeting via video call

    Connection Details: I'll send you the Zoom link or call you directly 5 minutes before our scheduled time.

    What to Expect:
    - A detailed written reading delivered via email within 24 hours
    - Beautiful PDF report with your personalized insights and guidance
    - High-quality spiritual artwork and mystical design elements
    - Follow-up support via email for any clarifying questions
    - Lifetime access to your reading - save and revisit anytime

    If you need to reschedule or have any questions, please reply to this email at least 24 hours before your session.

    I'm looking forward to our connection and helping illuminate your path forward!

    Blessings and anticipation,
    Luna Starweaver
    Your Spiritual Guide

    Mystic Readings | Your session is confirmed
  `,
})
