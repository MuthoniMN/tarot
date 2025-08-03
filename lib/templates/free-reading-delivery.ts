import { type EmailTemplate, type UserData, emailStyles } from "./types"

export const freeReadingDeliveryEmail = (userData: UserData): EmailTemplate => ({
    subject: "🌟 Your Free Reading is Here - A Gift from the Universe",
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
          <div class="stars">🌟 🔮 💫</div>
          <h1>Your Free Reading</h1>
          <p>A glimpse into your spiritual path</p>
        </div>
        
        <div class="content">
          <h2>Hello ${userData.firstName}! ✨</h2>
          
          <p>I've connected with your energy and drawn cards to provide you with this complimentary reading. While this is a brief glimpse into your spiritual landscape, I sense there's so much more wisdom waiting to be revealed for you.</p>
          
          <div class="mystical-border">
            <h3>🔮 Your Free Reading:</h3>
            <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); padding: 15px; border-radius: 8px; margin: 15px 0;">
              <h4 style="color: #667eea; margin-top: 0;">Three-Card Insight Pull</h4>
              
              <p><strong>🌅 Past Influence:</strong> The Seven of Cups reveals that you've been navigating through a period of many choices and possibilities. Your dreams and aspirations have been abundant, but perhaps overwhelming at times.</p>
              
              <p><strong>🌞 Present Energy:</strong> The Strength card shows you're currently in a phase of inner courage and resilience. You have more power within you than you realize, and it's time to trust your instincts.</p>
              
              <p><strong>🌙 Future Guidance:</strong> The Star indicates hope, healing, and spiritual guidance are coming into your life. A period of renewal and inspiration awaits you.</p>
              
              <p style="font-style: italic; color: #667eea; margin-top: 20px;">
                <strong>Overall Message:</strong> The universe is encouraging you to trust your inner wisdom and move forward with confidence. Your spiritual journey is just beginning to unfold.
              </p>
            </div>
          </div>

          ${userData.questions
            ? `
          <div class="mystical-border">
            <h3>🔍 Regarding Your Question:</h3>
            <p style="font-style: italic;">"${userData.questions}"</p>
            <p>The cards suggest that the answer lies in trusting your intuition and taking inspired action. There's a deeper layer of guidance available through a full reading that would provide more specific direction for your situation.</p>
          </div>
          `
            : ""
        }

          <div class="mystical-border">
            <h3>✨ What This Reading Reveals:</h3>
            <p>This brief reading shows you have:</p>
            <ul>
              <li>Strong intuitive abilities that are ready to be developed</li>
              <li>A spiritual path that's calling for your attention</li>
              <li>Inner strength that can guide you through any challenge</li>
              <li>A bright future filled with hope and possibility</li>
            </ul>
          </div>

          <div style="text-align: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; margin: 20px 0; color: white;">
            <h3 style="margin: 0;">🔮 Ready for Deeper Insights?</h3>
            <p style="margin: 10px 0;">This free reading is just the beginning. A full reading would provide:</p>
            <ul style="text-align: left; display: inline-block; margin: 10px 0;">
              <li>8-12 pages of detailed guidance</li>
              <li>Specific answers to all your questions</li>
              <li>Beautiful PDF report with spiritual artwork</li>
              <li>Personalized spiritual practices and recommendations</li>
            </ul>
            <a href="https://mysticreadings.com/book-session" class="cta-button" style="background: white; color: #667eea;">Explore Full Readings</a>
          </div>

          <p>I hope this brief reading has provided you with some clarity and inspiration. Remember, you have incredible spiritual gifts waiting to be awakened.</p>

          <p>If you'd like to explore your path more deeply, I'd be honored to provide you with a comprehensive reading that dives much deeper into your unique spiritual blueprint.</p>

          <p>Blessings and light on your journey,<br>
          <strong>Luna Starweaver</strong><br>
          <em>Your Spiritual Guide</em></p>
        </div>
        
        <div class="footer">
          <p>🌙 Mystic Readings | Your spiritual journey begins</p>
          <p>Ready for more? <a href="https://mysticreadings.com/services" style="color: #a78bfa;">Explore our full readings</a></p>
        </div>
      </div>
    </body>
    </html>
  `,
    text: `
    Hello ${userData.firstName}!

    I've connected with your energy and drawn cards to provide you with this complimentary reading. While this is a brief glimpse into your spiritual landscape, I sense there's so much more wisdom waiting to be revealed for you.

    Your Free Reading - Three-Card Insight Pull:

    🌅 Past Influence: The Seven of Cups reveals that you've been navigating through a period of many choices and possibilities. Your dreams and aspirations have been abundant, but perhaps overwhelming at times.

    🌞 Present Energy: The Strength card shows you're currently in a phase of inner courage and resilience. You have more power within you than you realize, and it's time to trust your instincts.

    🌙 Future Guidance: The Star indicates hope, healing, and spiritual guidance are coming into your life. A period of renewal and inspiration awaits you.

    Overall Message: The universe is encouraging you to trust your inner wisdom and move forward with confidence. Your spiritual journey is just beginning to unfold.

    ${userData.questions ? `Regarding Your Question: "${userData.questions}" - The cards suggest that the answer lies in trusting your intuition and taking inspired action. There's a deeper layer of guidance available through a full reading that would provide more specific direction for your situation.` : ""}

    What This Reading Reveals:
    This brief reading shows you have:
    - Strong intuitive abilities that are ready to be developed
    - A spiritual path that's calling for your attention
    - Inner strength that can guide you through any challenge
    - A bright future filled with hope and possibility

    Ready for Deeper Insights?
    This free reading is just the beginning. A full reading would provide:
    - 8-12 pages of detailed guidance
    - Specific answers to all your questions
    - Beautiful PDF report with spiritual artwork
    - Personalized spiritual practices and recommendations

    Explore full readings: https://mysticreadings.com/book-session

    I hope this brief reading has provided you with some clarity and inspiration. Remember, you have incredible spiritual gifts waiting to be awakened.

    If you'd like to explore your path more deeply, I'd be honored to provide you with a comprehensive reading that dives much deeper into your unique spiritual blueprint.

    Blessings and light on your journey,
    Luna Starweaver
    Your Spiritual Guide

    Mystic Readings | Your spiritual journey begins
  `,
})
