const git  = require('simple-git/promise');
const _    = require('lodash');
const colors   = require('colors');

const r="release/"
const av="AutoValidate"
const blue=r+"devblue/"+av
const green=r+"greenacre/"
const self=r+"devnnekkan/"+av
const dev="develop"
const rel = "rc/DEPLOYMENT-";
const args = process.argv.splice(3);

module.exports = function() {
    _.isUndefined(args[0]) ? console.log(colors.red("Empty Arguments! Check Help 'viv-git --help' ")) : findBranch(args[0]);

    function fetchAndPull(branchPath){
        console.log(colors.cyan("Checking out => "+ branchPath));
        git().checkout(branchPath).then(() => {
                console.log(colors.cyan("checking status of the current branch "));
                git().status((err, status) => {
                    if(!_.isUndefined(status) && status.behind > 0){ 
                        console.log(`Branch is behind by ${status.behind} commits`);
                        console.log(colors.cyan("pulling branch from remote.."));
                        git().pull((err, update) => {
                            if(update && update.summary.changes) console.log(colors.green("Done!"));
                        });
                    }
                });
        });
    }

    function findBranch(branch){
        switch(branch) {
            case 'new':
                break;
            case 'dev':
                fetchAndPull(dev);
                break;
            case 'blue':
                fetchAndPull(blue);
                break;
            case 'self':
                fetchAndPull(self);
                break;
            case 'green':
                if(_.isUndefined(args[1])) console.log(colors.red("Enter Recent branch of greenacre")); 
                else fetchAndPull(green+args[1]);
                break;
            case 'rel':
                if(_.isUndefined(args[1])) console.log(colors.red("Enter deploy branch number"));
                else fetchAndPull(args[1]);
                break;
            default:
                fetchAndPull("feature/"+args[0]);
        }
    }
};