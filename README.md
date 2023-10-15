# gas-calendar-slack

This is easy script for integration of GSA + Google Calendar + Slack.


## How to handle credentials.

Please do not commit any credentails to repository. Please treat them carefully.

### Credentials for deployments

Please store the credentails in GitHub Secrets, and use them from GitHub Action to deploy GSA. Following variables are refered in GitHub actions to deploy GSA script.

| KEY | VALUE |
| --- | --- |
| ACCESS_TOKEN | XXXX |
| CLIENT_ID | XXXX |
| CLIENT_SECRET | XXXX |
| ID_TOKEN | XXXX |
| REFRESH_TOKEN | XXXX |
| SCRIPT_ID | XXXX |


### Credentials for application 

Please store the credentails in GSA Property manually. Maybe there are better way, but for simple and easy use, it is good enough.

**Script Properties**
| Property | Value |
| --- | --- |
| CALENDAR_ID | XXXX |
| SLACK_CHANNEL_ID | XXXX |
| SLACK_TOKEN | xoxb-XXXXXX |

* You can call Property Service by GSA, but who initiate the GSA then...

## How to set trigger

Please set trigger for `Time-driven`, `Minutes Timer` and `Every minute` with `main` function manually.

| Field | Value |
| --- | --- |
| Choose which function to run | main |
| Choose which deployment should run | Head |
| Select Event source | Time-driven |
| Select type of time based trigger | Minutes Timer |
| Select minute interval | Every minute |


 * You can call ScriptApp to create trigger, but who run the script? Maybe you can run the script by `clasp run` in GitHub Action.

