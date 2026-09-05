import { execFileSync } from "child_process";

function hasSecretWriteToken() {
  return Boolean(process.env.PAT || process.env.GH_TOKEN);
}

function setRepoSecret(name, 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) {
  const repository = process.env.GITHUB_REPOSITORY;
  const token = process.env.GH_TOKEN || process.env.PAT;

  if (!repository) {
    throw new Error("GITHUB_REPOSITORY 未配置");
  }
  if (!token) {
    throw new Error("PAT/GH_TOKEN 未配置");
  }

  execFileSync("gh", ["secret", "set", name, "--repo", repository], {
    input: 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,
    encoding: "utf8",
    env: {
      ...process.env,
      GH_TOKEN: token,
    },
    stdio: ["pipe", "pipe", "pipe"],
  });
}

export { hasSecretWriteToken, setRepoSecret };
