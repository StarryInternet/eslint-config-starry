const config     = require('../../index');
const { ESLint } = require('eslint');
const fs         = require('fs');
const os         = require('os');
const path       = require('path');
const assert     = require('chai').assert;

describe( 'eslint-config-starry', () => {

  it( 'exports a flat config array', () => {
    assert.isArray( config );
    assert.isAbove( config.length, 0 );
  });

  it( 'includes expected plugins and rules', () => {
    const entry = config[ 0 ];

    assert.property( entry, 'plugins' );
    assert.property( entry.plugins, '@starryinternet/starry' );
    assert.property( entry.plugins, 'node' );

    assert.property( entry, 'rules' );
    assert.containsAllKeys( entry.rules, [
      'no-undef',
      'eqeqeq',
      'comma-dangle',
      'no-unused-vars',
      'node/no-missing-require'
    ]);
  });

  it( 'includes node and browser globals', () => {
    const entry = config[ 0 ];
    const globals = entry.languageOptions && entry.languageOptions.globals;

    assert.isObject( globals );
    assert.property( globals, 'process' );
    assert.property( globals, 'window' );
  });

  it( 'loads the config via ESLint', async () => {
    const temp_dir       = fs.mkdtempSync( path.join( os.tmpdir(), 'eslint-config-starry-' ) );
    const config_path    = path.join( temp_dir, 'eslint.config.js' );
    const fixture_path   = path.join( temp_dir, 'fixture.js' );
    const source_path    = path.join( __dirname, '..', '..', 'index.js' );
    const config_content = `module.exports = require("${ source_path }");`;

    const source = [
      'function add(a, b) { return a + b; }',
      'add(1, 2);'
    ].join( '\n' );

    fs.writeFileSync( config_path, config_content );
    fs.writeFileSync( fixture_path, source );

    const eslint = new ESLint({ cwd: temp_dir, overrideConfigFile: config_path });
    const results = await eslint.lintFiles([ fixture_path ]);

    assert.isArray( results );
    assert.equal( results[ 0 ].fatalErrorCount, 0 );
  });

});
