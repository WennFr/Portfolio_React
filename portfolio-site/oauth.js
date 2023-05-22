const { google } = require('googleapis');
const readline = require('readline');

const oauth2Client = new google.auth.OAuth2(
  '93065053275-18rsu8un4o70n9hq67tvoihqkcg6thbj.apps.googleusercontent.com',
  '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',
  'http://localhost:3000'
);

const scopes = [
  'https://www.googleapis.com/auth/gmail.send',
  // Add any additional scopes you require
];

const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
});

console.log('Authorize this app by visiting this URL:', authUrl);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the code from the authorization page:', async (code) => {
  rl.close();

  try {
    const { tokens } = await oauth2Client.getToken(code);
    console.log('Refresh token:', tokens.refresh_token);
  } catch (error) {
    console.error('Error retrieving refresh token:', error);
  }
});
