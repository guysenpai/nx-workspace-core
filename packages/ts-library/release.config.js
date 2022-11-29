const name = 'ts-library';
const srcRoot = `packages/${name}`;

module.exports = {
  extends: 'release.config.base.js',
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: name + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
  plugins: [
    ['@semantic-release/npm', {
      npmPublish: false,
      tarballDir: 'dist',
    }],
    ['@semantic-release/git', {
      assets: [`${srcRoot}/package.json`],
      message: `Release ${name} ` + '${nextRelease.version}',
    }],
  ],
};
