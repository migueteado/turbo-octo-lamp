import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Home, { getServerSideProps } from "../pages/index"
import { getCommits, ListCommitsResponseType } from "../lib/commits"

describe("Home", () => {
  it("check commits list", async () => {
    const data1 = (await getCommits()) as ListCommitsResponseType
    const expected = {
      props: {
        commits: data1,
      },
    }
    const data2 = await getServerSideProps()
    expect(data2).toMatchObject(expected)
  })

  it("renders commit list", async () => {
    const data = (await getServerSideProps()) as unknown as {
      props: {
        commits: {
          data: ListCommitsResponseType
        }
      }
    }
    const { container } = render(<Home commits={data.props.commits.data} />)
    expect(container).toMatchSnapshot()
  })

  it("renders error", async () => {
    const data = {} as unknown as ListCommitsResponseType
    const { container } = render(<Home commits={data} />)
    expect(container).toMatchSnapshot()
  })
})
