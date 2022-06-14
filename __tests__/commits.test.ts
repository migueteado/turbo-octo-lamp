import { githubResponse } from "../mocks/data"
import { getCommits, ListCommitsResponseType } from "../lib/commits"

describe("Commits request", () => {
  it("Should return a list of commits", async () => {
    const commits = (await getCommits(1)) as { data: ListCommitsResponseType }

    expect(commits.data).toMatchObject(githubResponse)
  })
})
