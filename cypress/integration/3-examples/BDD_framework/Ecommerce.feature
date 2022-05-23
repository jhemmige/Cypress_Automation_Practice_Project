Feature: End to End Ecommerce Validation

    We are validating the End to End scenarios
@regression
    Scenario: Ecommerce Product Delivery
    Given I open the Ecommerce Page
    When  I add the items to cart
    And validate the total price displayed
    Then select the country submit and Verify Thankyou message

@smoke
    Scenario: Form submission happens successfully
    Given I open EcommercePage containing the form
    When I fill up all the input fields with valid inputs
    |name|email|gender|dob|
    |jaaz|cy@hello.com|Male|1999-12-02|
    |jhumma|cya@hellooo.com|Male|2000-12-02|

    Then I want to ensure form is validated
    And user clicks on shop link successfully