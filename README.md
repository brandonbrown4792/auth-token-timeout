This is a very simple auth token timeout project.

It works by saving the auth token and login time and saves it to the local storage. From there, there's a setInterval check that verifies that the current time is greater than the login time by a timeout amount.