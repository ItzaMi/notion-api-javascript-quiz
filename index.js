require('dotenv').config();
const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_API_DATABASE;

exports.getDatabase = async function () {
  const response = await notion.databases.query({ database_id: databaseId });

  const responseResults = response.results.map((page) => {
    return {
      id: page.id,
      question: page.properties.Question.title[0].plain_text,
      answers: page.properties.Answers.multi_select,
      correct: page.properties.Correct.rich_text[0].plain_text,
    };
  });

  return responseResults;
};
