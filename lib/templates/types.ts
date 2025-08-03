export interface EmailTemplate {
  subject: string
  html: string
  text: string
}

export interface UserData {
  firstName: string
  lastName?: string
  email: string
  readingType?: string
  questions?: string
  sessionDate?: string
  sessionTime?: string
  amount?: number
  transactionId?: string
  generatedReading?: string
  bitcoinAddress?: string
  birthDate?: string
}

// Helper function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

// Helper function to format date
export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

// Base email styles
export const emailStyles = `
  <style>
    body { 
      font-family: 'Georgia', serif; 
      line-height: 1.6; 
      color: #2d1b69; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 0;
      padding: 20px;
    }
    .container { 
      max-width: 600px; 
      margin: 0 auto; 
      background: white; 
      border-radius: 15px; 
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    .header { 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      color: white; 
      padding: 30px; 
      text-align: center; 
    }
    .header h1 { 
      margin: 0; 
      font-size: 28px; 
      font-weight: bold;
    }
    .content { 
      padding: 30px; 
    }
    .mystical-border {
      border: 2px solid #9f7aea;
      border-radius: 10px;
      padding: 20px;
      margin: 20px 0;
      background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
    }
    .cta-button { 
      display: inline-block; 
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
      color: white; 
      padding: 15px 30px; 
      text-decoration: none; 
      border-radius: 25px; 
      font-weight: bold;
      margin: 20px 0;
    }
    .footer { 
      background: #2d1b69; 
      color: white; 
      padding: 20px; 
      text-align: center; 
      font-size: 14px;
    }
    .stars { 
      color: #ffd700; 
      font-size: 20px; 
    }
    .highlight {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
  </style>
`
