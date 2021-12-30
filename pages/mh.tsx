import React from "react";
import ArticlesAndNews from "../components/ArticlesAndNews";
import ChooseCountry from "../components/ChooseCountry";
import FindYourBestMatch from "../components/FindYourBestMatch";
import Layout from "../components/layout";
import QuestionsAnswer from "../components/QuestionsAnswer";
import WordClassExperts from "../components/WordClassExperts";

const mh = () => {
  return (
    <Layout home={false}>
      <ChooseCountry></ChooseCountry>
      <QuestionsAnswer></QuestionsAnswer>
      <ArticlesAndNews></ArticlesAndNews>
      <WordClassExperts></WordClassExperts>
      <FindYourBestMatch></FindYourBestMatch>
    </Layout>
  );
};

export default mh;
