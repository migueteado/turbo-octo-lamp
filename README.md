# Turbo Octo Lamp

A home task FULLTIME FORCE project.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Clone the repository to your local environment using your preferred method.
2. Install the dependencies with `yarn install`.
3. Run Dev server with `yarn dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To create the static production-ready folder run `yarn build`.

For production run `yarn start`.

For testing run `yarn test`.

# FAQ

### Why did you choose Next.js for this project?

Next.js has great features like server side rendering and image optimization, has good integrations with TailwindCSS for styles, Jest for testing and can handle some minor backend logic like the one required for this project without any problem.

### Why is the config hardcoded instead of in an .env file?

The variables we are using for this project are not considered sensitive information since everyone can access them with GitHub, and including and .env file saved in the repo is a bad practice.

### Why are you not using credentials to connect with the GitHub API?

It is not necessary when using the REST API to reach a public repository. It would require to use the .env file we are trying to avoid in the previous question.
