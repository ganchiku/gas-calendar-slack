function test() {
    var prop = PropertiesService.getScriptProperties().getProperties();

    Logger.log('Hello GitHub Actions Deploy!');

    let slackApp = SlackApp.create( prop.SLACK_TOKEN);
    let slackChannelId = prop.SLCK_CHANNEL_ID;
    Logger.Log(slackChannelId);

    let myCalendar = CalendarApp.getCalendarById(prop.CALENDAR_ID )
    let now = new Date();
    let myEvent = myCalendar.getEventsForDay(now);
    Logger.log(myEvent[0].getTitle());
}