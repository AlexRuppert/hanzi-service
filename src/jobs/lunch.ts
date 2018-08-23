import { IJob } from '../server/job-manager'
const job: IJob = {
  name: 'lunch',
  func: greet => {
    console.log(greet)
  },
  parameters: ['Time for lunch!'],
  times: [
    {
      hour: 14,
      minute: 35,
    },
    {
      hour: 14,
      minute: 36,
    },
  ],
}
export default job
