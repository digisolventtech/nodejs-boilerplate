//put all our schema in single file
//so that we can import any schema for single source
//reduce of import line, remembering multiple file path

import { TestCollection } from "./../schema";

const testFetchData = async (query = {}) => {
  return await TestCollection.find(query);
};

export const TestModal = {
    testFetchData
};
