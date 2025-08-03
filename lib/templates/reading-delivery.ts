import { type EmailTemplate, type UserData, emailStyles } from "./types"

export const readingDeliveryEmail = (userData: UserData): EmailTemplate => ({
    subject: "🔮 Your Sacred Reading Has Arrived - Open When Ready",
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
          <div class="stars">🔮 ✨ 📜 🌙</div>
          <h1>Your Reading Has Arrived</h1>
          <p>Sacred wisdom awaits within</p>
        </div>
        
        <div class="content">
          <h2>Dear ${userData.firstName}, 🌟</h2>
          
          <p>The universe has spoken, and your reading is complete! I've spent time in sacred space, connecting with your energy and channeling the guidance you seek. Your personalized reading is attached to this email as a beautiful PDF report.</p>
          
          <div class="mystical-border">
            <h3>📄 Your Reading Package Includes:</h3>
            <ul>
              <li><strong>Comprehensive PDF Report:</strong> 8-12 pages of detailed insights</li>
              <li><strong>Beautiful Mystical Design:</strong> Spiritual artwork and sacred symbols</li>
              <li><strong>Personalized Interpretations:</strong> Tailored specifically to your questions</li>
              <li><strong>Actionable Guidance:</strong> Practical steps for your spiritual journey</li>
              <li><strong>Bonus Resources:</strong> Crystal recommendations and spiritual practices</li>
            </ul>
          </div>

          ${userData.questions
            ? `
          <div class="mystical-border">
            <h3>🔍 Your Questions Addressed:</h3>
            <p style="font-style: italic;">"${userData.questions}"</p>
            <p>I've woven the answers to these questions throughout your reading, providing clarity and direction for each area of concern.</p>
          </div>
          `
            : ""
        }

          <div class="mystical-border">
            <h3>🌙 How to Receive Your Reading:</h3>
            <ol>
              <li><strong>Find a quiet moment:</strong> Choose a peaceful time when you can fully absorb the guidance</li>
              <li><strong>Download the PDF:</strong> Your reading is attached to this email</li>
              <li><strong>Read with an open heart:</strong> Allow the insights to resonate deeply</li>
              <li><strong>Take notes:</strong> Jot down what speaks most strongly to you</li>
              <li><strong>Revisit often:</strong> Your reading will reveal new layers over time</li>
            </ol>
          </div>

          <div style="text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; margin: 20px 0; color: white;">
            <h3 style="margin: 0;">💎 Your Reading is Ready!</h3>
            <p style="margin: 10px 0;">Check your email attachments for your personalized PDF report</p>
            <p style="margin: 0; font-size: 14px;">Can't see the attachment? Check your spam folder or reply to this email</p>
          </div>

          <div class="mystical-border">
            <h3>💌 Follow-Up Support:</h3>
            <p>Your reading experience doesn't end here! I'm available for:</p>
            <ul>
              <li>Clarifying questions about your reading (within 7 days)</li>
              <li>Guidance on implementing the spiritual practices suggested</li>
              <li>Support in understanding complex astrological or tarot concepts</li>
              <li>Recommendations for your next steps on your spiritual journey</li>
            </ul>
            <p><em>Simply reply to this email with any questions - I typically respond within 24 hours.</em></p>
          </div>

          <p>Remember, this reading is a sacred gift from the universe to you. Trust in the guidance you receive, and know that you have everything within you to create the life you desire.</p>

          <div style="text-align: center;">
            <a href="https://mysticreadings.com/book-session" class="cta-button">Book Your Next Reading</a>
          </div>

          <p>May this reading illuminate your path and bring you the clarity you seek. You are exactly where you need to be.</p>

          <p>With infinite blessings and cosmic love,<br>
          <strong>Luna Starweaver</strong><br>
          <em>Your Spiritual Guide</em></p>

          <p style="font-size: 12px; color: #666; margin-top: 30px;">
            <strong>Technical Note:</strong> Your reading is delivered as a PDF attachment. If you don't see it, please check your spam/junk folder or contact me directly.
          </p>
        </div>
        
        <div class="footer">
          <p>🌙 Mystic Readings | Your sacred wisdom has arrived</p>
          <p>Questions about your reading? Simply reply to this email</p>
        </div>
      </div>
    </body>
    </html>
  `,
    text: `
    Dear ${userData.firstName},

    The universe has spoken, and your reading is complete! I've spent time in sacred space, connecting with your energy and channeling the guidance you seek. Your personalized reading is attached to this email as a beautiful PDF report.

    Your Reading Package Includes:
    - Comprehensive PDF Report: 8-12 pages of detailed insights
    - Beautiful Mystical Design: Spiritual artwork and sacred symbols
    - Personalized Interpretations: Tailored specifically to your questions
    - Actionable Guidance: Practical steps for your spiritual journey
    - Bonus Resources: Crystal recommendations and spiritual practices

    ${userData.questions ? `Your Questions Addressed: "${userData.questions}" - I've woven the answers to these questions throughout your reading, providing clarity and direction for each area of concern.` : ""}

    How to Receive Your Reading:
    1. Find a quiet moment: Choose a peaceful time when you can fully absorb the guidance
    2. Download the PDF: Your reading is attached to this email
    3. Read with an open heart: Allow the insights to resonate deeply
    4. Take notes: Jot down what speaks most strongly to you
    5. Revisit often: Your reading will reveal new layers over time

    Follow-Up Support:
    Your reading experience doesn't end here! I'm available for:
    - Clarifying questions about your reading (within 7 days)
    - Guidance on implementing the spiritual practices suggested
    - Support in understanding complex astrological or tarot concepts
    - Recommendations for your next steps on your spiritual journey

    Simply reply to this email with any questions - I typically respond within 24 hours.

    Remember, this reading is a sacred gift from the universe to you. Trust in the guidance you receive, and know that you have everything within you to create the life you desire.

    May this reading illuminate your path and bring you the clarity you seek. You are exactly where you need to be.

    With infinite blessings and cosmic love,
    Luna Starweaver
    Your Spiritual Guide

    Technical Note: Your reading is delivered as a PDF attachment. If you don't see it, please check your spam/junk folder or contact me directly.

    Mystic Readings | Your sacred wisdom has arrived
  `,
})
