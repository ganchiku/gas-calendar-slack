/**
 * Retrieves events from a Google Calendar and posts them to a Slack channel.
 */
function main() {
    Logger.log('Gas-Calendar-Slack Started!')

    const prop = PropertiesService.getScriptProperties().getProperties();
    const slackApp = SlackApp.create(prop.SLACK_TOKEN)
    const slackChannelId = prop.SLACK_CHANNEL_ID
    const calendarId = prop.CALENDAR_ID
    const tagNotified = 'notified'

    const now = new Date()
    const events = CalendarApp.getCalendarById(calendarId).getEventsForDay(now)
    for (let i = 0; i < events.length; i++) {
        let event = events[i]

        if (event.getTag(tagNotified)){
            continue
        }

        if (event.getStartTime().getTime() - 1 * 60 * 1000 > now) {
             continue
        }

        let description = event.getDescription()
            .replace(/<br>/g, '\n')
            .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g,'')
        let message = `[${event.getTitle()}] \n${description}`
        Logger.log(message)

        slackApp.postMessage(slackChannelId, message)
        event.setTag(tagNotified, 'true')
    }
}