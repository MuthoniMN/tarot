import { type EmailTemplate, type UserData, emailStyles } from "./types"

export const freeReadingFollowUpEmail = (userData: UserData): EmailTemplate => ({
    subject: "🌙 Your spiritual journey continues... (4-day follow-up)",
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
          <div class="stars">🌙 ✨ 🔮</div>
          <h1>Your Journey Continues</h1>
          <p>Luna Starweaver</p>
        </div>
        
        <div class="content">
          <h2>Hello again, ${userData.firstName} 🌟</h2>
          
          <p>Four days have passed since you reached out for spiritual guidance, and I wanted to check in with you. Sometimes the universe works in mysterious ways, and the timing for our connection might be unfolding perfectly.</p>
          
          <div class="mystical-border">
            <h3>🔍 Have you noticed any signs?</h3>
            <p>Often after someone reaches out for a reading, they begin to notice:</p>
            <ul>
              <li>Recurring numbers or symbols appearing in daily life</li>
              <li>Vivid dreams or enhanced intuition</li>
              <li>Unexpected clarity about life situations</li>
              <li>Synchronicities and meaningful coincidences</li>
            </ul>
          </div>

          <p>If you're still seeking guidance, I'm here and ready to connect. Many of my clients find that a full reading provides the deep insights they've been searching for.</p>

          <div class="mystical-border">
            <h3>✨ Popular Readings This Month:</h3>
            <ul>
              <li><strong>Complete Soul Reading</strong> - Tarot + Astrology combined (90 min) - <span class="highlight">$135</span></li>
              <li><strong>Love & Relationships</strong> - Heart-centered guidance (45 min) - <span class="highlight">$85</span></li>
              <li><strong>Career & Life Path</strong> - Professional direction (45 min) - <span class="highlight">$80</span></li>
            </ul>
          </div>

          <div style="text-align: center;">
            <a href="https://mysticreadings.com/book-session" class="cta-button">Book Your Reading Now</a>
          </div>

          <p><em>Remember: The cards and stars are always ready to share their wisdom when you are ready to receive it.</em></p>

          <p>With cosmic blessings,<br>
          <strong>Luna Starweaver</strong></p>
        </div>
        
        <div class="footer">
          <p>🌙 Mystic Readings | Your spiritual guide since 2020</p>
          <p>Not interested in follow-ups? <a href="#" style="color: #a78bfa;">Unsubscribe here</a></p>
        </div>
      </div>
    </body>
    </html>
  `,
    text: `
    Hello again, ${userData.firstName}

    Four days have passed since you reached out for spiritual guidance, and I wanted to check in with you. Sometimes the universe works in mysterious ways, and the timing for our connection might be unfolding perfectly.

    Have you noticed any signs?
    Often after someone reaches out for a reading, they begin to notice:
    - Recurring numbers or symbols appearing in daily life
    - Vivid dreams or enhanced intuition
    - Unexpected clarity about life situations
    - Synchronicities and meaningful coincidences

    If you're still seeking guidance, I'm here and ready to connect. Many of my clients find that a full reading provides the deep insights they've been searching for.

    Popular Readings This Month:
    - Complete Soul Reading - Tarot + Astrology combined (90 min) - $135
    - Love & Relationships - Heart-centered guidance (45 min) - $85
    - Career & Life Path - Professional direction (45 min) - $80

    Book your reading: https://mysticreadings.com/book-session

    Remember: The cards and stars are always ready to share their wisdom when you are ready to receive it.

    With cosmic blessings,
    Luna Starweaver

    Mystic Readings | Your spiritual guide since 2020
  `,
})
