Feature: admin sign in BO

Scenario: admin views Today tab
Given admin is in dashboard
When admin clicks today option
Then admin should see todays data

Scenario: admin views Yesterday tab
Given admin is in dashboard
When admin clicks yesterday option
Then admin should see yesterday data

Scenario: admin views This Week tab
Given admin is in dashboard
When admin clicks this week option
Then admin should see this week data

Scenario: admin views Last Week tab
Given admin is in dashboard
When admin clicks last week option
Then admin should see last week data

Scenario: admin views This Month tab
Given admin is in dashboard
When admin clicks this month option
Then admin should see this month data

Scenario: admin views Last Month tab
Given admin is in dashboard
When admin clicks last month option
Then admin should see last month data

Scenario: admin views Annual tab
Given admin is in dashboard
When admin clicks annual option
Then admin should see annual data