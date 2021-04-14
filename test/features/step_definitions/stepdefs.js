const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert");

function isItFriday(today) {
  if (today === "Friday") {
    return "TGIF";
  }
  return "Nope";
}

Given("today is {string}", function (givenDay) {
  // Write code here that turns the phrase above into concrete actions
  // return "pending";
  this.today = givenDay;
});
When("I ask whether it's Friday yet", function () {
  // Write code here that turns the phrase above into concrete actions
  this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
  // Write code here that turns the phrase above into concrete actions
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
