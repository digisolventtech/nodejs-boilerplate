import { TestModal } from "../models";

//contain your business logic

//its like worker, need to done its job and also take care of error
//no matter from where and source

export const SampleWorker = {
  getTestData: async () => {
    try {
        const data = await TestModal.testFetchData({});
        return {data};
    } catch (err) {
      // console.log('Worker error is: ', err);
      return { error: err };
    }
  },
};
