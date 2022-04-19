import { IncomingWebhook } from '@slack/webhook'; 

let loggers:any = {}

let output:string;

let debugMode:boolean;

let URL:string;

const sendNotification = async(url:string, output:string) =>{
    const webhook = new IncomingWebhook(url)
    return await webhook.send(output)
}

loggers.setUrl = (url:string) =>{
    URL = url
}

loggers.setDebuggerOn = (bool:boolean) =>{
    debugMode = bool || false 
}

loggers.log = (...args:any) =>{
    switch (args[0]){
        case 'INFO':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            process.stdout.write(output)
            break

        case 'FATAL':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            process.stdout.write(output)
            URL && sendNotification(URL, output)
            break

        case 'ERROR':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            process.stdout.write(output)
            URL && sendNotification(URL, output)
            break

        case 'WARN':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            process.stdout.write(output)
            URL && sendNotification(URL, output)
            break

        case 'DEBUG':
            output = (`[${new Date().toISOString()}] [${args[0]}] [${args[1]}]\n`);
            debugMode && process.stdout.write(output)            
            break

    }
    
}

export default loggers;