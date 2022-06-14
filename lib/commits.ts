import { Octokit } from "octokit"
import { GetResponseTypeFromEndpointMethod } from "@octokit/types"

const octokit = new Octokit()

export type ListCommitsResponseType = GetResponseTypeFromEndpointMethod<
  typeof octokit.rest.repos.listCommits
>

const getCommits = async (): Promise<ListCommitsResponseType | unknown> => {
  try {
    const response = await octokit.rest.repos.listCommits({
      owner: "soymvillalobos",
      repo: "turbo-octo-lamp",
    })
    return response
  } catch (err: unknown) {
    return err
  }
}

export { getCommits }
