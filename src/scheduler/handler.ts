import { Handler, Context, ProxyCallback, ProxyResult } from 'aws-lambda'

const run: Handler = (event: any, context: Context, callback: ProxyCallback) => {
  // const response: ProxyResult = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: Math.floor(Math.random() * 10)
  //   })
  // }
  // callback(undefined, response)
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}`);
}

export { run }
