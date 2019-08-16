#!/usr/bin/env node

const colors = require('colors');
const cmdr = require('commander');
const branch = require("../lib/branch");

console.log(colors.rainbow("Welcome to Viv-Git"));

cmdr.command('branch')
    .alias('b')
    .description('Checkout to different branch')
    .action(function () {
        branch();
    });

cmdr.command('pushTo')
    .alias('p')
    .description('deploy to a sanbox branch')
    .action(function () {
        
    });

cmdr.command('chdir')
    .alias('c')
    .description('Change Directory')
    .action(function () {
        //change directory.
    });

cmdr.parse(process.argv);