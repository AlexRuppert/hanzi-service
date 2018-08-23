import { IJob } from './../server/job-manager'
import Server from './../server/server'
const job: IJob = {
  name: 'greet',
  func: async greet => {
    
  },
  parameters: ['hello'],
  interval: 60000,
  instantRun: true,
}
export default job
