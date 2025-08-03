import { type EmailTemplate, type UserData, emailStyles, formatCurrency, formatDate } from "./types"

export const bitcoinPaymentSuccessEmail = (userData: UserData): EmailTemplate => ({
    subject: "₿ Bitcoin Payment Confirmed - Welcome to the Future of Spiritual Payments!",
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
          <div class="stars">₿ ✨ 🚀 🌙</div>
          <h1>Bitcoin Payment Confirmed!</h1>
          <p>Welcome to the future of spiritual transactions</p>
        </div>
        
        <div class="content">
          <h2>Congratulations, ${userData.firstName}! 🎉</h2>
          
          <p>Your Bitcoin payment has been successfully confirmed on the blockchain! You're among the forward-thinking souls who embrace both ancient wisdom and modern technology. The universe appreciates your innovative spirit!</p>
          
          <div class="mystical-border">
            <h3>₿ Bitcoin Transaction Details:</h3>
            <ul>
              <li><strong>Bitcoin Amount:</strong> ${userData.bitcoinAmount || "0.001 BTC"}</li>
              <li><strong>USD Value:</strong> ${userData.amount ? formatCurrency(userData.amount) : "$95.00"}</li>
              <li><strong>Transaction ID:</strong> ${userData.transactionId || "Processing..."}</li>
              <li><strong>Confirmations:</strong> ✅ Confirmed on blockchain</li>
              <li><strong>Payment Status:</strong> <span style="color: #10b981; font-weight: bold;">COMPLETED</span></li>
            </ul>
          </div>

          <div class="mystical-border">
            <h3>🔮 Your Reading Session Details:</h3>
            <ul>
              <li><strong>Reading Type:</strong> ${userData.readingType || "Complete Soul Reading"}</li>
              <li><strong>Date:</strong> ${userData.sessionDate ? formatDate(userData.sessionDate) : "To be scheduled"}</li>
              <li><strong>Time:</strong> ${userData.sessionTime || "To be confirmed"} EST</li>
              <li><strong>Duration:</strong> 90 minutes of deep spiritual guidance</li>
            </ul>
          </div>

          <div style="text-align: center; background: linear-gradient(135deg, #f7931a 0%, #ffb347 100%); padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="margin: 0; color: white;">🌟 Crypto Pioneer Bonus!</h3>
            <p style="margin: 10px 0; color: white;">As a thank you for being an early Bitcoin adopter, you'll receive:</p>
            <ul style="color: white; text-align: left; display: inline-block;">
              <li>Extended 90-minute session (15 minutes bonus)</li>
              <li>Exclusive crypto-themed spiritual insights</li>
              <li>Priority booking for future sessions</li>
              <li>Special "Digital Mystic" client status</li>
            </ul>
          </div>

          <div class="mystical-border">
            <h3>🚀 The Spiritual Side of Cryptocurrency:</h3>
            <p>Your choice to pay with Bitcoin reflects several spiritual principles:</p>
            <ul>
              <li><strong>Trust in the Unseen:</strong> Like faith, crypto requires belief in invisible networks</li>
              <li><strong>Decentralized Wisdom:</strong> Moving beyond traditional systems, just like spiritual growth</li>
              <li><strong>Future Vision:</strong> Embracing tomorrow's possibilities today</li>
              <li><strong>Digital Manifestation:</strong> Creating value through collective belief and energy</li>
            </ul>
          </div>

          <p>I'll be incorporating some unique insights about your relationship with technology, innovation, and future manifestation into your reading. Your Bitcoin payment tells me you're someone who thinks outside the box!</p>

          <div style="text-align: center;">
            <a href="https://mysticreadings.com/crypto-readings" class="cta-button">Explore Crypto-Spiritual Insights</a>
          </div>

          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>📧 You'll receive session confirmation within 2 hours</li>
            <li>🔗 Zoom link will be sent 24 hours before your reading</li>
            <li>📱 I'll call you 5 minutes before we begin</li>
            <li>🎥 Recording and summary delivered within 24 hours post-session</li>
          </ul>

          <p>Thank you for being a pioneer in the intersection of ancient wisdom and modern technology. The universe is clearly guiding you toward innovative paths!</p>

          <p>With digital blessings and cosmic appreciation,<br>
          <strong>Luna Starweaver</strong><br>
          <em>Your Tech-Savvy Spiritual Guide</em><br>
          ₿ Bitcoin Address: ${userData.bitcoinAddress || "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"}</p>
        </div>
        
        <div class="footer">
          <p>🌙 Mystic Readings | Bridging ancient wisdom & future technology</p>
          <p>₿ Proud to accept Bitcoin | 🚀 Leading the spiritual revolution</p>
        </div>
      </div>
    </body>
    </html>
  `,
    text: `
    Congratulations, ${userData.firstName}!

    Your Bitcoin payment has been successfully confirmed on the blockchain! You're among the forward-thinking souls who embrace both ancient wisdom and modern technology. The universe appreciates your innovative spirit!

    Bitcoin Transaction Details:
    - Bitcoin Amount: ${userData.bitcoinAmount || "0.001 BTC"}
    - USD Value: ${userData.amount ? formatCurrency(userData.amount) : "$95.00"}
    - Transaction ID: ${userData.transactionId || "Processing..."}
    - Confirmations: ✅ Confirmed on blockchain
    - Payment Status: COMPLETED

    Your Reading Session Details:
    - Reading Type: ${userData.readingType || "Complete Soul Reading"}
    - Date: ${userData.sessionDate ? formatDate(userData.sessionDate) : "To be scheduled"}
    - Time: ${userData.sessionTime || "To be confirmed"} EST
    - Duration: 90 minutes of deep spiritual guidance

    CRYPTO PIONEER BONUS!
    As a thank you for being an early Bitcoin adopter, you'll receive:
    - Extended 90-minute session (15 minutes bonus)
    - Exclusive crypto-themed spiritual insights
    - Priority booking for future sessions
    - Special "Digital Mystic" client status

    The Spiritual Side of Cryptocurrency:
    Your choice to pay with Bitcoin reflects several spiritual principles:
    - Trust in the Unseen: Like faith, crypto requires belief in invisible networks
    - Decentralized Wisdom: Moving beyond traditional systems, just like spiritual growth
    - Future Vision: Embracing tomorrow's possibilities today
    - Digital Manifestation: Creating value through collective belief and energy

    I'll be incorporating some unique insights about your relationship with technology, innovation, and future manifestation into your reading. Your Bitcoin payment tells me you're someone who thinks outside the box!

    Next Steps:
    - You'll receive session confirmation within 2 hours
    - Zoom link will be sent 24 hours before your reading
    - I'll call you 5 minutes before we begin
    - Recording and summary delivered within 24 hours post-session

    Thank you for being a pioneer in the intersection of ancient wisdom and modern technology. The universe is clearly guiding you toward innovative paths!

    With digital blessings and cosmic appreciation,
    Luna Starweaver
    Your Tech-Savvy Spiritual Guide

    Mystic Readings | Bridging ancient wisdom & future technology
  `,
})
