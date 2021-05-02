# Cowin Vaccine Availability Notifier

<p>This is the code I wrote which can be configured to be scheduled by Google App Scripts to check Cowin Vaccine Availability API after every 10min (or as per configuration). If vaccine slot is available then the information is passed by email to receipient about Center, Vaccine, Availability, Fees, Date etc.</p>

<p>
  <b>Why, What and How?: </b> Government (Indian and State) has opened a vaccination drive for all citizens 18+ from 1st May 2021 but as there is surge in demand (obvi) and shortage of vaccines, it's hard to get your hands on a vaccine availability or schedule. For those who are familier with IRCTC would know the pain. :P And to make it worse it does not even have fixed schedule for slot opening, so you just have to check all day and night on Cowin.<br>
But thanks to Cowin + API Setu APIs we have access to public APIs which can help us reduce the pain of checking all day for slots and just checking when available in your nearby area (based on Pincode or by district).<br>
I am consuming Cowin/APISetu APIs to check if schedule/slot is available in centers from my nearby Pincodes and if available then trigger email with all information as a notifier. I am using Google Cloud's App Script to run and schedule this code project for running every 10 minutes and thus alerting me at the earliest when vaccine is available.<br><br>
  Why I am doing this? -> Because, I am one of that unfornunate guy in the country right now whose family is going through severe medical condition and for which I have to make sure at any cost I cannot get Covid and thus vaccine is safest way to reduce the chance.
</p>

<table>
  <tr>
    <b>Application Flow</b>
  </tr>
  <tr>
    <ul>
      <li>Start - Trigger - Every 5/10min time based </li>
      <li>Code Checks if slot available in any pincode centers for 18+ vaccine drive</li>
      <li>For all found details is gathered and drafted. If nothing found code ends.</li>
      <li>Email is triggered with drafted email body to receipients mentioned.</li>
      <li>End</li>
    </ul>
  </tr>
</table>

<table>
  <tr>
    <b>Please follow steps below to setup and use the script.</b>
  </tr>
  <tr>
    <ul>
      <li>
        Open Google App Script: <a href="https://script.google.com/"> https://script.google.com/</a> and create a new project
      </li>
      <li>
        Paste the code in the editor section of the opened project. The code checks availability based on Pincodes, so please check and correct the Pincodes as per your local area in the array.
      </li>
      <li>
        Check and correct the code as per your requirement. Configurations can be adjusted as per need. Like Age condition and availability condition. Also configure the call of email function to point to your or required receient email id. Save the code once changes done.
      </li>
      <li>
        Next and one of the important thing is to set up trigger for our code. Navigate to the <b>Triggers</b> section. Create a new trigger with configuration as:<br>
       <b>a. Choose which function to run: myFunction<br>
       b. Select event source: Time-driven<br>
       c. Select type of time based trigger: Minutes Later <br>
       d. Select minute interval: Every 10 minutes
       e. Failure notification settings: Notify me hourly</b>
      </li>
      <li>
        Test the code by running it from <b>Editor</b> section.
      </li>
      <li>
        Monitor runs from <b>Executions</b> section.
      </li>
    </ul>
    </tr>
    <tr>
      <br>
      <b>**Integration with Alexa and Direct Phone Notification coming soon! 🤖</b>
      <br>
    </tr>
    <tr>
      <br>
      <b>Email Example Screenshot:</b><br>
      <img src="https://github.com/vijaykumaringle/GoogleAppScripts/blob/main/Cowin%20Vaccine%20Availability%20Notifier/Email-example.PNG">
    </tr>
    <tr>
      <b>Code example Screenshot:</b><br>
      <img src="https://github.com/vijaykumaringle/GoogleAppScripts/blob/main/Cowin%20Vaccine%20Availability%20Notifier/code-ss.PNG">
    </tr>
</table>
