HOW TO USE:

Discription:- This package is used for manage our logs on console and also we send the notifications on slack by using this package as a bot.

STEP-1 -> We simply install this package by using 'npm i mysenselogger' this command and import it where we want to use.
STEP-2 -> We call setUrl function for link our slack group by give the webhook url in setUrl function as a parameter.
STEP-3 -> For send the notifications and print the logs on console we acsess 'log' function by '.' and we can print logs on console and send the notification on slack group.
STEP-4 -> Only 'WARN', 'ERROR', 'FATAL' are able to use the functionality of send notifications on slack.
STEP-5 -> In case of 'DEBUG' we have to set the setDebuggerOn function true for print the log on console.
