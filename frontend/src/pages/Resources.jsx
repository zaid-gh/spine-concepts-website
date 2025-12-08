import React from "react";
import { ResourcesList } from "../components";
import resourcesData from "../data/resourcesData";

const Resources = () => {


  const categories = resourcesData.categories;

  return (
    <section className="w-full min-h-screen">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full flex justify-center ">
          <ResourcesList categories={categories} />
        </div>
      </div>
    </section>
  );
};

export default Resources;
