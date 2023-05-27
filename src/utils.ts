import { existsSync, promises as fs } from "fs";
import { findUp } from "find-up";

export async function getPackageJson(cwd = process.cwd()) {
  const path = await findUp("package.json", { cwd });
  if(!path || !existsSync(path)) {
    return null
  }
  return JSON.parse(await fs.readFile(path, "utf-8"))
}

export async function getPackageJsonListed(name: string, cwd?: string) {
    const pkg = await getPackageJson(cwd) || {}
    return (name in (pkg.dependencies || {})) || (name in (pkg.devDependencies || {}))
}