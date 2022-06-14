const githubResponse = {
  status: 200,
  url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits?page=1&per_page=5",
  headers: {
    "accept-ranges": "bytes",
    "access-control-allow-origin": "*",
    "access-control-expose-headers":
      "ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset",
    "cache-control": "public, max-age=60, s-maxage=60",
    "connection": "close",
    "content-encoding": "gzip",
    "content-length": "2466",
    "content-security-policy": "default-src 'none'",
    "content-type": "application/json; charset=utf-8",
    "date": "Tue, 14 Jun 2022 18:02:59 GMT",
    "etag":
      'W/"52980e7c9e7468b0a17872d314f438c4c853b47c42024f16844ba32d429fa1b6"',
    "last-modified": "Tue, 14 Jun 2022 13:40:06 GMT",
    "link":
      '<https://api.github.com/repositories/503214786/commits?page=2&per_page=5>; rel="next", <https://api.github.com/repositories/503214786/commits?page=2&per_page=5>; rel="last"',
    "referrer-policy":
      "origin-when-cross-origin, strict-origin-when-cross-origin",
    "server": "GitHub.com",
    "strict-transport-security": "max-age=31536000; includeSubdomains; preload",
    "vary": "Accept, Accept-Encoding, Accept, X-Requested-With",
    "x-content-type-options": "nosniff",
    "x-frame-options": "deny",
    "x-github-media-type": "github.v3; format=json",
    "x-github-request-id": "1C9D:50F0:6E698:C8C23:62A8CD52",
    "x-ratelimit-limit": "60",
    "x-ratelimit-remaining": "50",
    "x-ratelimit-reset": "1655232617",
    "x-ratelimit-resource": "core",
    "x-ratelimit-used": "10",
    "x-xss-protection": "0",
  },
  data: [
    {
      sha: "d9453db1952711963cbb68c37a04bef15959d6e3",
      node_id:
        "C_kwDOHf5ywtoAKGQ5NDUzZGIxOTUyNzExOTYzY2JiNjhjMzdhMDRiZWYxNTk1OWQ2ZTM",
      commit: {
        author: {
          name: "Miguel Villalobos",
          email: "27830744+soymvillalobos@users.noreply.github.com",
          date: "2022-06-14T13:40:06Z",
        },
        committer: {
          name: "GitHub",
          email: "noreply@github.com",
          date: "2022-06-14T13:40:06Z",
        },
        message:
          "Merge pull request #1 from soymvillalobos/development\n\nDevelopment",
        tree: {
          sha: "5066cf31ba4666e5b710a4d11e5cc205d23860c3",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/trees/5066cf31ba4666e5b710a4d11e5cc205d23860c3",
        },
        url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/commits/d9453db1952711963cbb68c37a04bef15959d6e3",
        comment_count: 0,
        verification: {
          verified: true,
          reason: "valid",
          signature:
            "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJiqI+2CRBK7hj4Ov3rIwAAAuAIAIpeBjJDWihF3v3owuQSxeL4\nFo/pKnoZW/WSNNzHqSjo69QJ0ATpvaYqWEbFx6iqbm1/PLNa0Dl5nij+pBFXY2Pr\nN7gL04UmgYWnACChapmrAj/FEc3D0XOeAdB/WoHSgJX7FjQX3DZWeSHNzXmz3Jn1\n3trh2oPXFpxPeAVPTt5HAMK2tMQr9TVuUDwq1oWMHE4YuUACeGNGIO1sNHAR9gan\nAkfC+YrN7FD0cXYCnCYL1X66ZP2/Y+fL7OU9ndbduKmDaOqkb39M908So5YXN1/B\nf7NUZ38Yc9R7NJd413xqp0KqdswF6ip7kUN0pp6HDdAJ199WoazkcVwzWDeIuvw=\n=7t9w\n-----END PGP SIGNATURE-----\n",
          payload:
            "tree 5066cf31ba4666e5b710a4d11e5cc205d23860c3\nparent 6dabf19a47cdde0bc01c96710051ba04de9f902f\nparent e0f1442e9b0e2beb705deab9bb79973821d3919e\nauthor Miguel Villalobos <27830744+soymvillalobos@users.noreply.github.com> 1655214006 -0500\ncommitter GitHub <noreply@github.com> 1655214006 -0500\n\nMerge pull request #1 from soymvillalobos/development\n\nDevelopment",
        },
      },
      url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/d9453db1952711963cbb68c37a04bef15959d6e3",
      html_url:
        "https://github.com/soymvillalobos/turbo-octo-lamp/commit/d9453db1952711963cbb68c37a04bef15959d6e3",
      comments_url:
        "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/d9453db1952711963cbb68c37a04bef15959d6e3/comments",
      author: {
        login: "soymvillalobos",
        id: 27830744,
        node_id: "MDQ6VXNlcjI3ODMwNzQ0",
        avatar_url: "https://avatars.githubusercontent.com/u/27830744?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/soymvillalobos",
        html_url: "https://github.com/soymvillalobos",
        followers_url: "https://api.github.com/users/soymvillalobos/followers",
        following_url:
          "https://api.github.com/users/soymvillalobos/following{/other_user}",
        gists_url:
          "https://api.github.com/users/soymvillalobos/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/soymvillalobos/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/soymvillalobos/subscriptions",
        organizations_url: "https://api.github.com/users/soymvillalobos/orgs",
        repos_url: "https://api.github.com/users/soymvillalobos/repos",
        events_url:
          "https://api.github.com/users/soymvillalobos/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/soymvillalobos/received_events",
        type: "User",
        site_admin: false,
      },
      committer: {
        login: "web-flow",
        id: 19864447,
        node_id: "MDQ6VXNlcjE5ODY0NDQ3",
        avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/web-flow",
        html_url: "https://github.com/web-flow",
        followers_url: "https://api.github.com/users/web-flow/followers",
        following_url:
          "https://api.github.com/users/web-flow/following{/other_user}",
        gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/web-flow/subscriptions",
        organizations_url: "https://api.github.com/users/web-flow/orgs",
        repos_url: "https://api.github.com/users/web-flow/repos",
        events_url: "https://api.github.com/users/web-flow/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/web-flow/received_events",
        type: "User",
        site_admin: false,
      },
      parents: [
        {
          sha: "6dabf19a47cdde0bc01c96710051ba04de9f902f",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/6dabf19a47cdde0bc01c96710051ba04de9f902f",
          html_url:
            "https://github.com/soymvillalobos/turbo-octo-lamp/commit/6dabf19a47cdde0bc01c96710051ba04de9f902f",
        },
        {
          sha: "e0f1442e9b0e2beb705deab9bb79973821d3919e",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/e0f1442e9b0e2beb705deab9bb79973821d3919e",
          html_url:
            "https://github.com/soymvillalobos/turbo-octo-lamp/commit/e0f1442e9b0e2beb705deab9bb79973821d3919e",
        },
      ],
    },
    {
      sha: "e0f1442e9b0e2beb705deab9bb79973821d3919e",
      node_id:
        "C_kwDOHf5ywtoAKGUwZjE0NDJlOWIwZTJiZWI3MDVkZWFiOWJiNzk5NzM4MjFkMzkxOWU",
      commit: {
        author: {
          name: "moaitodev",
          email: "bymavc@outlook.com",
          date: "2022-06-14T13:37:50Z",
        },
        committer: {
          name: "moaitodev",
          email: "bymavc@outlook.com",
          date: "2022-06-14T13:37:50Z",
        },
        message: "💄 Page main styles update",
        tree: {
          sha: "5066cf31ba4666e5b710a4d11e5cc205d23860c3",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/trees/5066cf31ba4666e5b710a4d11e5cc205d23860c3",
        },
        url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/commits/e0f1442e9b0e2beb705deab9bb79973821d3919e",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/e0f1442e9b0e2beb705deab9bb79973821d3919e",
      html_url:
        "https://github.com/soymvillalobos/turbo-octo-lamp/commit/e0f1442e9b0e2beb705deab9bb79973821d3919e",
      comments_url:
        "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/e0f1442e9b0e2beb705deab9bb79973821d3919e/comments",
      author: {
        login: "soymvillalobos",
        id: 27830744,
        node_id: "MDQ6VXNlcjI3ODMwNzQ0",
        avatar_url: "https://avatars.githubusercontent.com/u/27830744?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/soymvillalobos",
        html_url: "https://github.com/soymvillalobos",
        followers_url: "https://api.github.com/users/soymvillalobos/followers",
        following_url:
          "https://api.github.com/users/soymvillalobos/following{/other_user}",
        gists_url:
          "https://api.github.com/users/soymvillalobos/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/soymvillalobos/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/soymvillalobos/subscriptions",
        organizations_url: "https://api.github.com/users/soymvillalobos/orgs",
        repos_url: "https://api.github.com/users/soymvillalobos/repos",
        events_url:
          "https://api.github.com/users/soymvillalobos/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/soymvillalobos/received_events",
        type: "User",
        site_admin: false,
      },
      committer: {
        login: "soymvillalobos",
        id: 27830744,
        node_id: "MDQ6VXNlcjI3ODMwNzQ0",
        avatar_url: "https://avatars.githubusercontent.com/u/27830744?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/soymvillalobos",
        html_url: "https://github.com/soymvillalobos",
        followers_url: "https://api.github.com/users/soymvillalobos/followers",
        following_url:
          "https://api.github.com/users/soymvillalobos/following{/other_user}",
        gists_url:
          "https://api.github.com/users/soymvillalobos/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/soymvillalobos/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/soymvillalobos/subscriptions",
        organizations_url: "https://api.github.com/users/soymvillalobos/orgs",
        repos_url: "https://api.github.com/users/soymvillalobos/repos",
        events_url:
          "https://api.github.com/users/soymvillalobos/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/soymvillalobos/received_events",
        type: "User",
        site_admin: false,
      },
      parents: [
        {
          sha: "2d913dac124e9994bb9191782c5dfa6f1751e557",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/2d913dac124e9994bb9191782c5dfa6f1751e557",
          html_url:
            "https://github.com/soymvillalobos/turbo-octo-lamp/commit/2d913dac124e9994bb9191782c5dfa6f1751e557",
        },
      ],
    },
    {
      sha: "2d913dac124e9994bb9191782c5dfa6f1751e557",
      node_id:
        "C_kwDOHf5ywtoAKDJkOTEzZGFjMTI0ZTk5OTRiYjkxOTE3ODJjNWRmYTZmMTc1MWU1NTc",
      commit: {
        author: {
          name: "moaitodev",
          email: "bymavc@outlook.com",
          date: "2022-06-14T13:37:32Z",
        },
        committer: {
          name: "moaitodev",
          email: "bymavc@outlook.com",
          date: "2022-06-14T13:37:32Z",
        },
        message: "🐛 Fixed image issue, added domain to next config",
        tree: {
          sha: "a35f1cc0f29eb7de606165a70bff557a20d990a9",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/trees/a35f1cc0f29eb7de606165a70bff557a20d990a9",
        },
        url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/commits/2d913dac124e9994bb9191782c5dfa6f1751e557",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/2d913dac124e9994bb9191782c5dfa6f1751e557",
      html_url:
        "https://github.com/soymvillalobos/turbo-octo-lamp/commit/2d913dac124e9994bb9191782c5dfa6f1751e557",
      comments_url:
        "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/2d913dac124e9994bb9191782c5dfa6f1751e557/comments",
      author: {
        login: "soymvillalobos",
        id: 27830744,
        node_id: "MDQ6VXNlcjI3ODMwNzQ0",
        avatar_url: "https://avatars.githubusercontent.com/u/27830744?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/soymvillalobos",
        html_url: "https://github.com/soymvillalobos",
        followers_url: "https://api.github.com/users/soymvillalobos/followers",
        following_url:
          "https://api.github.com/users/soymvillalobos/following{/other_user}",
        gists_url:
          "https://api.github.com/users/soymvillalobos/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/soymvillalobos/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/soymvillalobos/subscriptions",
        organizations_url: "https://api.github.com/users/soymvillalobos/orgs",
        repos_url: "https://api.github.com/users/soymvillalobos/repos",
        events_url:
          "https://api.github.com/users/soymvillalobos/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/soymvillalobos/received_events",
        type: "User",
        site_admin: false,
      },
      committer: {
        login: "soymvillalobos",
        id: 27830744,
        node_id: "MDQ6VXNlcjI3ODMwNzQ0",
        avatar_url: "https://avatars.githubusercontent.com/u/27830744?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/soymvillalobos",
        html_url: "https://github.com/soymvillalobos",
        followers_url: "https://api.github.com/users/soymvillalobos/followers",
        following_url:
          "https://api.github.com/users/soymvillalobos/following{/other_user}",
        gists_url:
          "https://api.github.com/users/soymvillalobos/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/soymvillalobos/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/soymvillalobos/subscriptions",
        organizations_url: "https://api.github.com/users/soymvillalobos/orgs",
        repos_url: "https://api.github.com/users/soymvillalobos/repos",
        events_url:
          "https://api.github.com/users/soymvillalobos/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/soymvillalobos/received_events",
        type: "User",
        site_admin: false,
      },
      parents: [
        {
          sha: "b85afcc88e6d1243807479dd8ab7c66d6ee494ae",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/b85afcc88e6d1243807479dd8ab7c66d6ee494ae",
          html_url:
            "https://github.com/soymvillalobos/turbo-octo-lamp/commit/b85afcc88e6d1243807479dd8ab7c66d6ee494ae",
        },
      ],
    },
    {
      sha: "b85afcc88e6d1243807479dd8ab7c66d6ee494ae",
      node_id:
        "C_kwDOHf5ywtoAKGI4NWFmY2M4OGU2ZDEyNDM4MDc0NzlkZDhhYjdjNjZkNmVlNDk0YWU",
      commit: {
        author: {
          name: "moaitodev",
          email: "bymavc@outlook.com",
          date: "2022-06-14T13:37:00Z",
        },
        committer: {
          name: "moaitodev",
          email: "bymavc@outlook.com",
          date: "2022-06-14T13:37:00Z",
        },
        message: "✨ Commit component initial layout",
        tree: {
          sha: "f0e9562494e0610242f2469be33e14d54c706e05",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/trees/f0e9562494e0610242f2469be33e14d54c706e05",
        },
        url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/commits/b85afcc88e6d1243807479dd8ab7c66d6ee494ae",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/b85afcc88e6d1243807479dd8ab7c66d6ee494ae",
      html_url:
        "https://github.com/soymvillalobos/turbo-octo-lamp/commit/b85afcc88e6d1243807479dd8ab7c66d6ee494ae",
      comments_url:
        "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/b85afcc88e6d1243807479dd8ab7c66d6ee494ae/comments",
      author: {
        login: "soymvillalobos",
        id: 27830744,
        node_id: "MDQ6VXNlcjI3ODMwNzQ0",
        avatar_url: "https://avatars.githubusercontent.com/u/27830744?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/soymvillalobos",
        html_url: "https://github.com/soymvillalobos",
        followers_url: "https://api.github.com/users/soymvillalobos/followers",
        following_url:
          "https://api.github.com/users/soymvillalobos/following{/other_user}",
        gists_url:
          "https://api.github.com/users/soymvillalobos/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/soymvillalobos/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/soymvillalobos/subscriptions",
        organizations_url: "https://api.github.com/users/soymvillalobos/orgs",
        repos_url: "https://api.github.com/users/soymvillalobos/repos",
        events_url:
          "https://api.github.com/users/soymvillalobos/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/soymvillalobos/received_events",
        type: "User",
        site_admin: false,
      },
      committer: {
        login: "soymvillalobos",
        id: 27830744,
        node_id: "MDQ6VXNlcjI3ODMwNzQ0",
        avatar_url: "https://avatars.githubusercontent.com/u/27830744?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/soymvillalobos",
        html_url: "https://github.com/soymvillalobos",
        followers_url: "https://api.github.com/users/soymvillalobos/followers",
        following_url:
          "https://api.github.com/users/soymvillalobos/following{/other_user}",
        gists_url:
          "https://api.github.com/users/soymvillalobos/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/soymvillalobos/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/soymvillalobos/subscriptions",
        organizations_url: "https://api.github.com/users/soymvillalobos/orgs",
        repos_url: "https://api.github.com/users/soymvillalobos/repos",
        events_url:
          "https://api.github.com/users/soymvillalobos/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/soymvillalobos/received_events",
        type: "User",
        site_admin: false,
      },
      parents: [
        {
          sha: "9dc5a2400792b837fb4c4eb5f451f22e2eeae77c",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/9dc5a2400792b837fb4c4eb5f451f22e2eeae77c",
          html_url:
            "https://github.com/soymvillalobos/turbo-octo-lamp/commit/9dc5a2400792b837fb4c4eb5f451f22e2eeae77c",
        },
      ],
    },
    {
      sha: "9dc5a2400792b837fb4c4eb5f451f22e2eeae77c",
      node_id:
        "C_kwDOHf5ywtoAKDlkYzVhMjQwMDc5MmI4MzdmYjRjNGViNWY0NTFmMjJlMmVlYWU3N2M",
      commit: {
        author: {
          name: "moaitodev",
          email: "bymavc@outlook.com",
          date: "2022-06-14T13:35:19Z",
        },
        committer: {
          name: "moaitodev",
          email: "bymavc@outlook.com",
          date: "2022-06-14T13:35:19Z",
        },
        message: "⚡️ Moved github api logic to serversideprops request",
        tree: {
          sha: "24e4116330fd6c63b301cbbd2f816bbce78a20a7",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/trees/24e4116330fd6c63b301cbbd2f816bbce78a20a7",
        },
        url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/git/commits/9dc5a2400792b837fb4c4eb5f451f22e2eeae77c",
        comment_count: 0,
        verification: {
          verified: false,
          reason: "unsigned",
          signature: null,
          payload: null,
        },
      },
      url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/9dc5a2400792b837fb4c4eb5f451f22e2eeae77c",
      html_url:
        "https://github.com/soymvillalobos/turbo-octo-lamp/commit/9dc5a2400792b837fb4c4eb5f451f22e2eeae77c",
      comments_url:
        "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/9dc5a2400792b837fb4c4eb5f451f22e2eeae77c/comments",
      author: {
        login: "soymvillalobos",
        id: 27830744,
        node_id: "MDQ6VXNlcjI3ODMwNzQ0",
        avatar_url: "https://avatars.githubusercontent.com/u/27830744?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/soymvillalobos",
        html_url: "https://github.com/soymvillalobos",
        followers_url: "https://api.github.com/users/soymvillalobos/followers",
        following_url:
          "https://api.github.com/users/soymvillalobos/following{/other_user}",
        gists_url:
          "https://api.github.com/users/soymvillalobos/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/soymvillalobos/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/soymvillalobos/subscriptions",
        organizations_url: "https://api.github.com/users/soymvillalobos/orgs",
        repos_url: "https://api.github.com/users/soymvillalobos/repos",
        events_url:
          "https://api.github.com/users/soymvillalobos/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/soymvillalobos/received_events",
        type: "User",
        site_admin: false,
      },
      committer: {
        login: "soymvillalobos",
        id: 27830744,
        node_id: "MDQ6VXNlcjI3ODMwNzQ0",
        avatar_url: "https://avatars.githubusercontent.com/u/27830744?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/soymvillalobos",
        html_url: "https://github.com/soymvillalobos",
        followers_url: "https://api.github.com/users/soymvillalobos/followers",
        following_url:
          "https://api.github.com/users/soymvillalobos/following{/other_user}",
        gists_url:
          "https://api.github.com/users/soymvillalobos/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/soymvillalobos/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/soymvillalobos/subscriptions",
        organizations_url: "https://api.github.com/users/soymvillalobos/orgs",
        repos_url: "https://api.github.com/users/soymvillalobos/repos",
        events_url:
          "https://api.github.com/users/soymvillalobos/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/soymvillalobos/received_events",
        type: "User",
        site_admin: false,
      },
      parents: [
        {
          sha: "be5a071e2e4d8092d2efc772702afa001f6f6a5c",
          url: "https://api.github.com/repos/soymvillalobos/turbo-octo-lamp/commits/be5a071e2e4d8092d2efc772702afa001f6f6a5c",
          html_url:
            "https://github.com/soymvillalobos/turbo-octo-lamp/commit/be5a071e2e4d8092d2efc772702afa001f6f6a5c",
        },
      ],
    },
  ],
}

export { githubResponse }
