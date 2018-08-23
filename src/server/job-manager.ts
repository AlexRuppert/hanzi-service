export interface IJob {
  name: string
  func: Function
  parameters: any[]
  times?: Array<{
    hour: number
    minute: number
  }>
  interval?: number
  intervalRef?: any
  instantRun?: boolean
  lastRun?: number
}
const INTERVAL_MS = 1000
export class JobManager {
  private jobList: IJob[] = []

  private globalInterval = setInterval(() => {
    const now = new Date()
    const minutes = now.getHours() * 60 + now.getMinutes()

    const timedJobs = this.jobList.filter(
      j =>
        j.times &&
        j.times.some(jt => jt.hour * 60 + jt.minute === minutes && now.getTime() - j.lastRun > 60 * INTERVAL_MS),
    )
    timedJobs.forEach(j => this.runJob(j.name))
  }, INTERVAL_MS)
  constructor() {}
  private findJobByName(name: string) {
    return this.jobList.findIndex(j => j.name === name)
  }

  public get jobs() {
    return this.jobList
  }
  public addJobs(jobs: IJob[]) {
    jobs.forEach(j => this.addJob(j))
  }
  public addJob(job: IJob) {
    const jobIndex = this.findJobByName(job.name)
    if (jobIndex >= 0) {
      this.jobList[jobIndex] = job
    } else {
      this.jobList.push(job)
    }
    if (job.intervalRef) {
      clearInterval(job.intervalRef)
    }
    if (job.interval) {
      job.intervalRef = setInterval(() => {
        job.func(...job.parameters)
        job.lastRun = Date.now()
      }, job.interval)
    }
    job.lastRun = 1
    if (job.instantRun) {
      job.func(...job.parameters)
      job.lastRun = Date.now()
    }
  }
  public removeJob(name: string) {
    const jobIndex = this.findJobByName(name)
    if (jobIndex >= 0) {
      this.jobList.splice(jobIndex, 1)
    }
  }
  public runJob(name: string) {
    const jobIndex = this.findJobByName(name)
    if (jobIndex >= 0) {
      const job = this.jobList[jobIndex]
      job.func(...job.parameters)
      job.lastRun = Date.now()
    }
  }
}
