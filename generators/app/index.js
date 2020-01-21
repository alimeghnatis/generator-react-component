const Generator = require('yeoman-generator')
const chalk = require('chalk')
const yosay = require('yosay')
const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
let pjson = require('../../package.json')
const version = pjson.version
const pkg = pjson.name

function pascalToSnake(s){
  return s
    .replace(/(?:^|\.?)([A-Z])/g, (x,y) => '_' + y.toLowerCase())
    .replace(/^_/, '')
}

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)

    // This makes `appname` a required argument.
    this.argument('name', { type: String, required: true })
    this.option('common', { type: String, alias: 'c' })
    this.option('withcommon', { type: Boolean, alias: 'w' })
    this.option('withquery', { type: Boolean, alias: 'q' })

    // And you can then access it later; e.g.
    this.log('Name', this.options.name)
    this.log('Is a common component ?', !!this.options.common)
    this.options.common ?
      this.log('Common for', this.options.common) :
      this.log('Create common dir ?', !!this.options.withcommon)
  }

  /*prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the legendary ${chalk.red('generator-react-scss-component')} generator!`)
    );

    const prompts = [
			      {
        type: "input",
        name: "name",
        message: "What is the name of the component ?",
				default: 'NewComponent' //this.appname // Default to current folder name
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
	}*/

  writing() {

    /* Setting up variables */
    const {
      name,
      withcommon,
      common,
      withquery
    } = this.options
    const folder = common ? './' : './' + name  +'/'
    const lower = pascalToSnake(name)
    const scss = lower + '.scss'
    const chunk_name = common ? pascalToSnake(common) : lower
    const touchFile = (relativeFilePath) => {
      const fullPath = path.resolve(path.join(process.cwd(), relativeFilePath))
      fs.closeSync(fs.openSync(fullPath, 'w'))
    }

    /* Making the new folder */
    if (!common) {
      mkdirp.sync(name)
      if (withcommon) {
        mkdirp.sync(name + '/common')
      }
    }
    this.destinationRoot(folder)
		
    /* Copying */
    if (!common) this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('index.js'),
      { name, pkg, version, withquery }
    )

    this.fs.copyTpl(
      this.templatePath('component.scss'),
      this.destinationPath(pascalToSnake(scss)),
      { name, lower, pkg, version, withquery }
    )
    if (withquery){
      mkdirp.sync('graphql')
      touchFile('graphql/q.gql')
    }

    this.fs.copyTpl(
      this.templatePath('Component.js'),
      this.destinationPath(name + '.js'),
      {
        name,
        scss,
        chunk_name,
        lower,
        pkg,
        version,
        withquery
      }
    )

  }

  install() {
    //this.installDependencies();
  }
}
