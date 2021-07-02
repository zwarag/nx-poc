import { wrapAngularDevkitSchematic } from '@nrwl/devkit/ngcli-adapter';
import {
  Tree,
  generateFiles,
  joinPathFragments,
  names,
  readProjectConfiguration,
  formatFiles,
} from '@nrwl/devkit';
import { ComponentSecondary } from './schema';
import { strings } from '@angular-devkit/core/src/utils';

export default async function (
  host: Tree,
  schema: ComponentSecondary
): Promise<Tree> {
  console.log('start', schema);
  console.log('readProjectConfiguration');
  const projectConfiguration = readProjectConfiguration(host, schema.project);

  const componentGenerator = wrapAngularDevkitSchematic(
    '@schematics/angular',
    'component'
  );

  await componentGenerator(host, {
    name: schema.name,
    project: schema.project,
    style: 'scss',
    flat: true,
    path: `${projectConfiguration.root}/${schema.name}`,
    skipImport: true,
  });

  generateFiles(
    host,
    joinPathFragments(__dirname, './files'),
    projectConfiguration.root,
    {
      ...schema,
      ...names(schema.name),
      className: strings.classify(schema.name),
      dashName: strings.dasherize(schema.name),
      tmpl: '',
    }
  );

  await formatFiles(host);

  return host;
}
