const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349137224781";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_51_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDk5LFxuICAgICAgICA5NixcbiAgICAgICAgMjMzLFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjksXG4gICAgICAgIDg3LFxuICAgICAgICA0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU2LFxuICAgICAgICA3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICA1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDgxLFxuICAgICAgICA2OSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDAsXG4gICAgICAgIDkyLFxuICAgICAgICA3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidWhYRTNwa1BLcEJQa2xMMWtGdlRFTVZKMTArL3NtSmpNd0F5SGpWYk9STT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaWFacjNSaGdTUVdzSEdkZXdHQlFid1wiLFxuICBcInBob25lSWRcIjogXCJjOTc0MjcxZC1iZTRjLTRjYzMtOTYwNi1hOTJlOTQ3M2NiMTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjU1LFxuICAgICAgNTgsXG4gICAgICAxNDcsXG4gICAgICAyMDksXG4gICAgICAzOCxcbiAgICAgIDE0NSxcbiAgICAgIDkyLFxuICAgICAgMjE0LFxuICAgICAgMTk2LFxuICAgICAgNjEsXG4gICAgICAyNyxcbiAgICAgIDk4LFxuICAgICAgODYsXG4gICAgICA5NyxcbiAgICAgIDE0NyxcbiAgICAgIDE1NyxcbiAgICAgIDIzMSxcbiAgICAgIDQ5LFxuICAgICAgMTI5LFxuICAgICAgMjQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgzLFxuICAgICAgNDcsXG4gICAgICAyMDcsXG4gICAgICAyNDAsXG4gICAgICA2NixcbiAgICAgIDY3LFxuICAgICAgODUsXG4gICAgICA3NCxcbiAgICAgIDIzNixcbiAgICAgIDExOSxcbiAgICAgIDU1LFxuICAgICAgODYsXG4gICAgICAyMDEsXG4gICAgICA1OSxcbiAgICAgIDIxLFxuICAgICAgMTQyLFxuICAgICAgMjExLFxuICAgICAgMTc3LFxuICAgICAgNTAsXG4gICAgICA4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCQUZDTlNIQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzNzIyNDc4MToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjUyNjQ3NjQyNzYzMzI3OjEwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xQb3JZWURFT0NZa0xVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNG5jbmphSXkvNDRtb1UwUnVhWkZXampsL1MvbmxkUUYyMzZVUWRFNUR5bz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2TlJpVjRQUGpIeE1LNW1SYW4zWmh6Z1A5Q0tZbXZoVU9sQWFmdC9JcDdhWkU0S05zYXlDOUE4OGgxcm1QOXhWdU5HTDQ0ZWlxdWFYQUtFT09CZUZBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPNStQQnJ4ZklyVzRYSHptdlEyUE1odDZ4M21GVkNRZk9SNFg5WXUrOVpqMlV2NDMvSWY4L2EvTXRKdlhIb1JjK0k5MDJiL1NqR2dCejBpSDRiM0dnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTM3MjI0NzgxOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDI3MTA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2RFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHZEUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBOFBuRXVqK3N2Z2g0TVFqcTBsdms0T3I5eXdlYThIR3lmQktpVWRCZlpVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgxODYzOTkyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMDI3MTE1NDYzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
