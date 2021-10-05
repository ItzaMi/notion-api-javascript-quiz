# NotionAPI JavaScript Quiz

This project showcases one of the many possibilities of NotionAPI.
Here I created an `express` server and connected to a database on `Notion` that has rows and columns with different info on it.

The end result is an interactable quiz with the info that we just fetch!

## Running the app

If you would like to run this project, you'll need to create a `.env` file in the root directory and inside you should had your `NotionAPI key` and your `Database ID` like so

```
NOTION_API_KEY = [Here you should insert your key]
NOTION_API_DATABASE = [Here you should insert your key]
```

If you don't know how to get your key, go to [developers.notion.com](https://developers.notion.com/), press **My Integrations**, choose _New Integration_ and once you fill all the info, you should get a `Internal Integration Token`.

If you don't know how to get your Database id, check the **Where can I find my database's ID?** of this [NotionAPI doc](https://developers.notion.com/docs/working-with-databases)

## See it in action!

https://user-images.githubusercontent.com/30603437/136004486-d010c41e-d7e6-409a-bdb5-ec63a3546888.mp4
