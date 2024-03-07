import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://graphql.contentful.com/content/v1/spaces/wdy5jxja98zi/environments/master":
        {
          headers: {
            Authorization: "Bearer vgScaii16AyJh1XgNhlh662PKLSAm5pnTVdNv5RfcdY",
            access_token: "o2aIcrBbPcKo57HZceCSiCtXhRDJGnPi75Q4TjLmYEk",
          },
        },
    },
  ],
  documents: ["app/graphql/queries/*.graphql"],
  generates: {
    "app/graphql/generated.ts": {
      plugins: [
        "add",
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
      config: {
        content: "// @ts-nocheck",
        fetcher: "graphql-request",
      },
    },
  },
};

export default config;
