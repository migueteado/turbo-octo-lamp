import { rest } from "msw"
import { githubResponse } from "./data"

const restHandlers = [
  rest.get(
    "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits",
    (_req, res, ctx) => res(ctx.status(200), ctx.json({ ...githubResponse }))
  ),
]

export const handlers = [...restHandlers]
