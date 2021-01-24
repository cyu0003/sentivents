# Sentivents
## Boilermake 8 Submission

Sentivents is a mood tracking app that uses **sentiment analysis** to monitor the wellbeing of users. In this climate, mental health is constantly being tested and one of the first steps to managing stress and unhappiness is being aware of it.

When user talks/types about their day, the app sends the message to a server running a **deep learning** model that analyzes the mood of the message. Specifically, we used **DeepMoji**, a model trained on Twitter tweets, to gain an understanding of the emotional nuance of messages. Compared to other sentiment analysis modesl, DeepMoji is better able to understand sarcasm, slang, and the context of realistic speech. 

The server returns the emojies that most closely describe the emotional state of the message. Back in the app, these emojies and their positive/neutral/negative connotations are displayed as pretty colors, neat graphs, and sick visualizations.

Finally, all the information,(the emojies from DeepMoji, calculated sentiment breakdown, and mood estimate) are stored in a SQLite database where it can be queried, edited, and abused.

From the calendar view largescale mood trends can be viewed and old logs can be revisited or updated.