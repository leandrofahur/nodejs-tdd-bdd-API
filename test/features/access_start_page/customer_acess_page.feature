# Feature: Is it Friday yet?
#   Everybody wants to know when it's Friday

#   Scenario: Today is or is not Friday
#     Given today is "<day>"
#     When I ask whether it's Friday yet
#     Then I should be told "<answer>"

# Examples:
#     | day             | answer |
#     | Sunday          | Nope   |
#     | Monday          | Nope   |
#     | Tuesday         | Nope   |
#     | Wednesday       | Nope   |
#     | Thursday        | Nope   |
#     | Friday          | TGIF   |
#     | Saturday        | Nope   |

Feature: Customer access page

    As a customer,
    I want to access a web page
    in order to se its contents

    Scenario: Customer access the home page 
        Given there exist the route "<route>"
        When the user send a "<request>" request
        Then they should receive the "<message>"

    Examples:
        | route | request | message  |
        | /     | get     | welcome  |
