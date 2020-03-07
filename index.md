<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stepper.css">
    <title>Stepper Form</title>
</head>
<body>
    <h1>Stepper Form</h1>
    <p>
        <span id="emailTitle" class="focus">Email</span>
        <span id="passwordTitle">Password</span>
        <span id="updatesTitle">Updates</span>
        <span id="reviewTitle">Review</span>
    </p>

    <!-- EMAIL -->
    <div>
        <div id="step1" class="stepLayout">
            <label for="email" ><strong>Email: </strong></label>
            <input id="emailAddress" name="email" type="text">
            <div>
                <button id ="next1" >Next</button>
            </div>

        </div>
    </div>

    <!-- PASSWORD -->
    <div>
        <div id="step2" class="stepLayout" hidden="true">
            <label for="password" ><strong>Password: </strong></label>
            <input id="password" name="password" type="password">
            <div>
                <button id ="back2" >Back</button>
                <button id="next2" >Next</button>
            </div>
        </div>

    </div>

    <!-- OPTIONS -->
    <div>
        <div id="step3" class="stepLayout" hidden="true">
            <form action="" id="updatesForm">
                <div>
                    <label for="daily" >
                        <input name="updates" type="radio" value="Daily">
                        Daily
                    </label>
                </div>
                <div>
                    <label for="weekly" >
                        <input name="updates" type="radio" value="Weekly">
                        Weekly
                    </label>
                </div>
                <div>
                    <label for="noUpdates" >
                        <input name="updates" type="radio" value="No Updates">
                        No Updates
                    </label>
                </div>
            </form>

            <button id="back3" >Back</button>
            <button id="next3" >Next</button>
        </div>
    </div>

    <!-- SUBMIT -->
    <div>
        <div id="step4" class="stepLayout" hidden="true">
            <p id="emailDisplay" >Email: </p>
            <p id="updatesDisplay">Options:  </p>

            <button id="back4" >Back</button>
            <button id="submit">Submit</button>
        </div>
    </div>

    <div id="thankYou" class="stepLayout" hidden="true">
        <h2>Thank you for your submission!</h2>
    </div>


    <script src="stepper.js"></script>

</body>
</html>