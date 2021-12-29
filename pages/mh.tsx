import React from "react";
import ArticlesAndNews from "../components/ArticlesAndNews";
import ChooseCountry from "../components/ChooseCountry";
import Layout from "../components/layout";
import QuestionsAnswer from "../components/QuestionsAnswer";
import WordClassExperts from "../components/WordClassExperts";

const mh = () => {
  return (
    <Layout home={false}>
      <ChooseCountry></ChooseCountry>
      <QuestionsAnswer></QuestionsAnswer>
      <ArticlesAndNews></ArticlesAndNews>
      {/* <WordClassExperts></WordClassExperts> */}
    </Layout>
  );
};

export default mh;
