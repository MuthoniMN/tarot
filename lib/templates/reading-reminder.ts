import { type EmailTemplate, type UserData, emailStyles } from "./types"

export const paidReadingReminderEmail = (userData: UserData): EmailTemplate => ({
    subject: "🔮 Your Reading is Tomorrow - Preparation & Connection Details",
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
          <div class="stars">🔮 ⭐ 🌙</div>
          <h1>Your Reading is Tomorrow!</h1>
          <p>Final preparation & connection details</p>
        </div>
        
        <div class="content">
          <h2>Hello ${userData.firstName}! ✨</h2>
          
          <p>I'm excited to connect with you tomorrow for your reading session! The energy around your questions is already coming through clearly, and I sense this will be a powerful and illuminating experience for you.</p>
          
          <div class="mystical-border">
            <h3>📅 Your Reading Details:</h3>
            <ul>
              <li><strong>Reading Type:</strong> ${userData.readingType || "Spiritual Guidance Session"}</li>
              <li><strong>Delivery Method:</strong> Email with PDF attachment</li>
              <li><strong>Expected Delivery:</strong> Within 24 hours of your scheduled date</li>
              <li><strong>Report Length:</strong> 8-12 pages of detailed insights</li>
            </ul>
          </div>

          <div class="mystical-border">
            <h3>🧘‍♀️ How Your Reading is Prepared:</h3>
            <ul>
              <li>✨ <strong>Sacred Ritual:</strong> I'll create a sacred space and connect with your energy</li>
              <li>🔮 <strong>Intuitive Process:</strong> Your questions guide my meditation and card/chart work</li>
              <li>📝 <strong>Detailed Writing:</strong> I'll channel insights into a comprehensive written report</li>
              <li>🎨 <strong>Beautiful Presentation:</strong> Your reading is formatted as a stunning PDF</li>
              <li>📧 <strong>Personal Delivery:</strong> Sent directly to your email with love and blessings</li>
            </ul>
          </div>

          ${userData.questions
            ? `
          <div class="mystical-border">
            <h3>🔍 Your Questions for Tomorrow:</h3>
            <p style="font-style: italic;">"${userData.questions}"</p>
            <p>I've been meditating on these areas and am ready to provide you with clear, actionable guidance.</p>
          </div>
          `
            : ""
        }

          <div class="mystical-border">
            <h3>⏰ What to Do If You Need to Reschedule:</h3>
            <p>Life happens! If you need to reschedule, please contact me at least 2 hours before our session:</p>
            <ul>
              <li>📧 Reply to this email</li>
              <li>📞 Call/text: (555) 123-MYSTIC</li>
              <li>💬 WhatsApp: Available for urgent changes</li>
            </ul>
          </div>

          <p><strong>Your reading package will include:</strong></p>
          <ul>
            <li>📄 Comprehensive PDF reading report (8-12 pages)</li>
            <li>🎨 Beautiful mystical design with spiritual artwork</li>
            <li>📝 Detailed card interpretations or astrological analysis</li>
            <li>💌 Personalized guidance for your specific questions</li>
            <li>🔮 Spiritual practices and recommendations</li>
            <li>💎 Bonus: Crystal and meditation suggestions</li>
          </ul>

          <p>I'm truly looking forward to our connection tomorrow. Trust that the universe has perfectly aligned this timing for your highest good.</p>

          <div style="text-align: center;">
            <a href="https://mysticreadings.com/reading-prep" class="cta-button">Final Preparation Guide</a>
          </div>

          <p>See you tomorrow in the sacred space of guidance and wisdom!</p>

          <p>With anticipation and blessings,<br>
          <strong>Luna Starweaver</strong><br>
          <em>Your Spiritual Guide</em></p>
        </div>
        
        <div class="footer">
          <p>🌙 Mystic Readings | Tomorrow's the day!</p>
          <p>Questions? Call (555) 123-MYSTIC or reply to this email</p>
        </div>
      </div>
    </body>
    </html>
  `,
    text: `
    Hello ${userData.firstName}!

    I'm excited to connect with you tomorrow for your reading session! The energy around your questions is already coming through clearly, and I sense this will be a powerful and illuminating experience for you.

    Your Reading Details:
    - Reading Type: ${userData.readingType || "Spiritual Guidance Session"}
    - Delivery Method: Email with PDF attachment
    - Expected Delivery: Within 24 hours of your scheduled date
    - Report Length: 8-12 pages of detailed insights

    How Your Reading is Prepared:
    ✅ Sacred Ritual: I'll create a sacred space and connect with your energy
    ✅ Intuitive Process: Your questions guide my meditation and card/chart work
    ✅ Detailed Writing: I'll channel insights into a comprehensive written report
    ✅ Beautiful Presentation: Your reading is formatted as a stunning PDF
    ✅ Personal Delivery: Sent directly to your email with love and blessings

    ${userData.questions ? `Your Questions for Tomorrow: "${userData.questions}" - I've been meditating on these areas and am ready to provide you with clear, actionable guidance.` : ""}

    What to Do If You Need to Reschedule:
    Life happens! If you need to reschedule, please contact me at least 2 hours before our session:
    - Reply to this email
    - Call/text: (555) 123-MYSTIC
    - WhatsApp: Available for urgent changes

    Your reading package will include:
    - Comprehensive PDF reading report (8-12 pages)
    - Beautiful mystical design with spiritual artwork
    - Detailed card interpretations or astrological analysis
    - Personalized guidance for your specific questions
    - Spiritual practices and recommendations
    - Bonus: Crystal and meditation suggestions

    I'm truly looking forward to our connection tomorrow. Trust that the universe has perfectly aligned this timing for your highest good.

    See you tomorrow in the sacred space of guidance and wisdom!

    With anticipation and blessings,
    Luna Starweaver
    Your Spiritual Guide

    Mystic Readings | Tomorrow's the day!
  `,
})
