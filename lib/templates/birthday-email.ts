import { type EmailTemplate, type UserData, emailStyles } from "./types"

export const birthdayEmail = (userData: UserData): EmailTemplate => ({
    subject: "🎂✨ Happy Solar Return! Your Birthday Cosmic Forecast",
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
          <div class="stars">🎂 ✨ 🌟 ⭐ 🌙</div>
          <h1>Happy Solar Return!</h1>
          <p>Your personal new year begins</p>
        </div>
        
        <div class="content">
          <h2>Blessed Birthday, ${userData.firstName}! 🎉</h2>
          
          <p>Today marks your Solar Return - the moment when the Sun returns to the exact position it held when you were born. This is your personal New Year, a time of renewal, reflection, and cosmic alignment.</p>
          
          <div class="mystical-border">
            <h3>🌟 Your Solar Return Energy:</h3>
            <p>This year, the universe is calling you to:</p>
            <ul>
              <li><strong>Embrace your authentic self</strong> - Let your true light shine brighter than ever</li>
              <li><strong>Trust your intuition</strong> - Your inner wisdom is particularly strong this year</li>
              <li><strong>Welcome new opportunities</strong> - The cosmos is aligning to bring fresh possibilities</li>
              <li><strong>Release what no longer serves</strong> - Make space for the magic that's coming</li>
            </ul>
          </div>

          <div class="mystical-border">
            <h3>🔮 Birthday Blessing & Affirmation:</h3>
            <p style="font-style: italic; text-align: center; font-size: 18px; color: #667eea;">
              "On this sacred day of my birth, I align with the cosmic forces that guide my path. 
              I am open to receiving all the love, abundance, and wisdom the universe has prepared for me. 
              My light shines bright, and I step confidently into this new year of my life."
            </p>
          </div>

          <p>As a special birthday gift, I'd love to offer you a <strong>Solar Return Reading</strong> - a detailed look at what the stars have in store for your new year ahead.</p>

          <div style="text-align: center; background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%); padding: 20px; border-radius: 10px; margin: 20px 0;">
            <h3 style="margin: 0; color: #2d1b69;">🎁 Birthday Special Offer</h3>
            <p style="margin: 10px 0; color: #2d1b69;"><strong>25% OFF</strong> any reading booked within 7 days</p>
            <a href="https://mysticreadings.com/book-session?promo=BIRTHDAY25" class="cta-button">Claim Your Birthday Reading</a>
          </div>

          <p>May this new year of your life be filled with magic, wonder, and beautiful synchronicities. The universe celebrates you today!</p>

          <p>With birthday blessings and cosmic love,<br>
          <strong>Luna Starweaver</strong><br>
          <em>Your Spiritual Guide</em></p>
        </div>
        
        <div class="footer">
          <p>🌙 Mystic Readings | Celebrating your cosmic journey</p>
          <p>Born to shine bright - Happy Birthday! 🎂✨</p>
        </div>
      </div>
    </body>
    </html>
  `,
    text: `
    Blessed Birthday, ${userData.firstName}!

    Today marks your Solar Return - the moment when the Sun returns to the exact position it held when you were born. This is your personal New Year, a time of renewal, reflection, and cosmic alignment.

    Your Solar Return Energy:
    This year, the universe is calling you to:
    - Embrace your authentic self - Let your true light shine brighter than ever
    - Trust your intuition - Your inner wisdom is particularly strong this year
    - Welcome new opportunities - The cosmos is aligning to bring fresh possibilities
    - Release what no longer serves - Make space for the magic that's coming

    Birthday Blessing & Affirmation:
    "On this sacred day of my birth, I align with the cosmic forces that guide my path. I am open to receiving all the love, abundance, and wisdom the universe has prepared for me. My light shines bright, and I step confidently into this new year of my life."

    As a special birthday gift, I'd love to offer you a Solar Return Reading - a detailed look at what the stars have in store for your new year ahead.

    BIRTHDAY SPECIAL OFFER: 25% OFF any reading booked within 7 days
    Book now: https://mysticreadings.com/book-session?promo=BIRTHDAY25

    May this new year of your life be filled with magic, wonder, and beautiful synchronicities. The universe celebrates you today!

    With birthday blessings and cosmic love,
    Luna Starweaver
    Your Spiritual Guide

    Mystic Readings | Celebrating your cosmic journey
  `,
})
