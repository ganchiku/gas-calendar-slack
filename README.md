# gas-calendar-slack

This is an easy-to-use script for integrating Google Apps Script (GAS), Google Calendar, and Slack for personal use. For more robust development, consider using [Google's official library, Aside]( https://github.com/google/aside).

## Installation
```bash
$ git clone git@github.com:ganchiku/gas-calendar-slack.git
```

To get started, you'll need to set up clasp, which is the Google Apps Script command-line tool. You can find it [here](https://github.com/google/clasp). After installing clasp, run the following commands:

``` bash
$ clasp login --no-localhost
```
This will generate a file at `$HOME/.clasprc.json`. Please set the values in this file as GitHub Secrets.

## Slack App prepartion
Before using this script, you'll need to create a Slack app for Bots and grant the app permission to post Slack messages. Make sure to set the following scopes for your Slack app:

- chat:write
- chat:write.customize
- chat:write:public

## Handling Credentials

**Important:** Do not commit any credentials to your repository. Treat them with care.

### Credentials for Deployments

To deploy your Google Apps Script (GSA), store the credentials in GitHub Secrets. The following variables are referenced in GitHub Actions to deploy the GSA script:

| KEY | VALUE |
| --- | --- |
| ACCESS_TOKEN | XXXX |
| CLIENT_ID | XXXX |
| CLIENT_SECRET | XXXX |
| ID_TOKEN | XXXX |
| REFRESH_TOKEN | XXXX |
| SCRIPT_ID | XXXX |


### Credentials for application 

For application use, store the credentials in GSA Property manually. While there may be better ways to manage credentials, this approach is simple and straightforward. Use the following Script Properties:

**Script Properties**
| Property | Value |
| --- | --- |
| CALENDAR_ID | XXXX |
| SLACK_CHANNEL_ID | XXXX |
| SLACK_TOKEN | xoxb-XXXXXX |

* You can call the Property Service within GSA, but consider who initiates the GSA script.


## Setting Triggers
To automate your script, set up a trigger with the following configuration:

- Trigger Type: Time-driven
- Function to Run: main
- Deployment: Head
- Event Source: Time-driven
- Type of Time-based Trigger: Minutes Timer
- Minute Interval: Every minute


 * You can also use `ScriptApp` to create a trigger, but consider who will run the script. In some cases, you can run the script using `clasp run` in a GitHub Action workflow.

## Reference
- [GitHub Actionsを使ってGASをデプロイしてみた
](https://dev.classmethod.jp/articles/github-actions-gas-deploy/)
- [Googleカレンダーの特定の予定を3分前にSlackへ通知する方法](https://www.service.andonuts.jp/posts/slack-bot-calender)
