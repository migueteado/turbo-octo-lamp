import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";

const octokit = new Octokit();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await octokit.rest.repos.listCommits({
      owner: "soymvillalobos",
      repo: "turbo-octo-lamp",
    });
    res.status(200).json(response);
  } catch (err: unknown) {
    res.status(500).json(err);
  }
};

export default handler;
