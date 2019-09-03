import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import sgMail = require("@sendgrid/mail");



const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));

    const emailTo = "cameron.mark.scott@gmail.com";
    const emailFrom = req.body.from;
    const emailSubject = req.body.subject;
    const emailMessage = req.body.message;

    sgMail.setApiKey('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');

    const msg = {
      to: emailTo,
      from: emailFrom,
      subject: emailSubject,
      text: emailMessage
    };

    var status = '';

    sgMail.send(msg).then((response) => {
      console.log('email sent');
      status = 'success';
    }).catch(err => {
      console.log(err.stack);
      status = 'fail' + err.stack;
    });

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: "success"
    };

};

export default httpTrigger;
