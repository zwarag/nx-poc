import {
  Tree,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (host: Tree, schema: any) {
  await libraryGenerator(host, { name: schema.name });
  const libraryRoot = readProjectConfiguration(host, schema.name).root;
  generateFiles(
    host,
    joinPathFragments(__dirname, './files'),
    libraryRoot,
    schema
  );
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
