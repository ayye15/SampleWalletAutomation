
Feature: Fan sees creator posts

Scenario: Fan visits creator page
Given fan is in jamclout page
When fan enters creator link on the browser
Then fan should see creator posts

Scenario: Fan sees each posts
Given fan is in creator page
When fan clicks post
Then fan should see the post image
