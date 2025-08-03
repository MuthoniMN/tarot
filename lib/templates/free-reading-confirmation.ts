import { type EmailTemplate, type UserData, emailStyles } from "./types"

export const freeReadingConfirmationEmail = (userData: UserData): EmailTemplate => ({
    subject: "🌟 Your Free Consultation Request Received - Luna Starweaver",
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
          <div class="stars">✨ 🌙 ⭐</div>
          <h1>Mystic Readings</h1>
          <p>Your spiritual journey begins...</p>
        </div>
        
        <div class="content">
          <h2>Welcome, ${userData.firstName}! 🔮</h2>
          
          <p>The universe has guided you to me, and I'm honored to be part of your spiritual journey. Your request for a free consultation has been received with gratitude.</p>
          
          <div class="mystical-border">
            <h3>🌟 What Happens Next:</h3>
            <ul>
              <li><strong>Within 24 hours:</strong> I'll personally review your information and send you a brief email reading</li>
              <li><strong>Your free reading includes:</strong> 2-3 card pull with basic interpretation and guidance</li>
              <li><strong>Delivery method:</strong> Simple email format with your insights</li>
              <li><strong>Upgrade option:</strong> If you'd like a full reading, I'll include information about comprehensive PDF reports</li>
            </ul>
          </div>

          ${userData.questions
            ? `
          <div class="mystical-border">
            <h3>🔍 Your Questions:</h3>
            <p><em>"${userData.questions}"</em></p>
            <p>I'm already sensing the energy around these areas and look forward to providing clarity.</p>
          </div>
          `
            : ""
        }

          <p>In the meantime, I encourage you to:</p>
          <ul>
            <li>🧘‍♀️ Take a few moments each day for quiet reflection</li>
            <li>📝 Write down any additional questions that come to mind</li>
            <li>🌙 Pay attention to your dreams and intuitive nudges</li>
          </ul>

          <div style="text-align: center;">
            <a href="https://mysticreadings.com/services" class="cta-button">Explore Full Readings</a>
          </div>

          <p>Blessings and light,<br>
          <strong>Luna Starweaver</strong><br>
          <em>Intuitive Tarot Reader & Astrologer</em></p>
        </div>
        
        <div class="footer">
          <p>🌙 Mystic Readings | Illuminating paths since 2020</p>
          <p>Questions? Reply to this email or visit our website</p>
        </div>
      </div>
    </body>
    </html>
  `,
    text: `
    Welcome, ${userData.firstName}!

    The universe has guided you to me, and I'm honored to be part of your spiritual journey. Your request for a free consultation has been received with gratitude.

    What Happens Next:
    - Within 24 hours: I'll personally review your information and send you a brief email reading
    - Your free reading includes: 2-3 card pull with basic interpretation and guidance
    - Delivery method: Simple email format with your insights
    - Upgrade option: If you'd like a full reading, I'll include information about comprehensive PDF reports

    ${userData.questions ? `Your Questions: "${userData.questions}" - I'm already sensing the energy around these areas and look forward to providing clarity.` : ""}

    In the meantime, I encourage you to:
    - Take a few moments each day for quiet reflection
    - Write down any additional questions that come to mind
    - Pay attention to your dreams and intuitive nudges

    Blessings and light,
    Luna Starweaver
    Intuitive Tarot Reader & Astrologer

    Mystic Readings | Illuminating paths since 2020
  `,
})
