import { Octokit } from "octokit"
import { GetResponseTypeFromEndpointMethod } from "@octokit/types"
import config from "../config"

/**
 * No need for credentials using REST API for public repos
 */
const octokit = new Octokit()

export type ListCommitsResponseType = GetResponseTypeFromEndpointMethod<
  typeof octokit.rest.repos.listCommits
>

const getCommits = async (
  page: number
): Promise<ListCommitsResponseType | unknown> => {
  try {
    const response = await octokit.rest.repos.listCommits({
      owner: config.owner,
      repo: config.repo,
      page: page,
      per_page: 5,
    })
    return response
  } catch (err: unknown) {
    return err
  }
}

export { getCommits }
