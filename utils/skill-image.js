import html from '/public/svg/skills/html.svg';
import css from '/public/svg/skills/css.svg';
import javascript from '/public/svg/skills/javascript.svg';
import typescript from '/public/svg/skills/typescript.svg';

import react from '/public/svg/skills/react.svg';
import vitejs from '/public/svg/skills/vitejs.svg';
import vue from '/public/svg/skills/vue.svg';
import vuetifyjs from '/public/svg/skills/vuetifyjs.svg';
import angular from '/public/svg/skills/angular.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import nodeJS from '/public/svg/skills/nodejs.svg';
import nuxtJS from '/public/svg/skills/nuxtJS.svg';
import expressJS from '/public/svg/skills/expressjs.svg';
import go from '/public/svg/skills/go.svg';
import ruby from '/public/svg/skills/ruby.svg';
import capacitorjs from '/public/svg/skills/capacitorjs.svg';
import coffeescript from '/public/svg/skills/coffeescript.svg';
import csharp from '/public/svg/skills/csharp.svg';

import mongoDB from '/public/svg/skills/mongoDB.svg';
import firebase from '/public/svg/skills/firebase.svg';
import sqlserver from '/public/svg/skills/sqlserver.svg';
import mysql from '/public/svg/skills/mysql.svg';
import postgresql from '/public/svg/skills/postgresql.svg';

import git from '/public/svg/skills/git.svg';
import graphql from '/public/svg/skills/graphql.svg';
import docker from '/public/svg/skills/docker.svg';

import tailwind from '/public/svg/skills/tailwind.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import materialui from '/public/svg/skills/materialui.svg';

import canva from '/public/svg/skills/canva.svg';
import figma from '/public/svg/skills/figma.svg';
import photoshop from '/public/svg/skills/photoshop.svg';

import gcp from '/public/svg/skills/gcp.svg';
import aws from '/public/svg/skills/aws.svg';
import azure from '/public/svg/skills/azure.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase().replace(/\s+/g, '');  // To handle spaces and case
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'vuejs':
      return vue;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'angular':
      return angular;
    case 'nodejs':
      return nodeJS;
    case 'nextjs':
      return nextJS;
    case 'nuxtjs':
      return nuxtJS;
    case 'expressjs':
      return expressJS;
    case 'go':
      return go;
    case 'ruby':
      return ruby;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'mongodb':
      return mongoDB;
    case 'firebase':
      return firebase;
    case 'sqlserver':
      return sqlserver;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'docker':
      return docker;
    case 'tailwind':
      return tailwind;
    case 'bootstrap':
      return bootstrap;
    case 'materialui':
      return materialui;
    case 'figma':
      return figma;
    case 'photoshop':
      return photoshop;
    case 'aws':
      return aws;
    case 'azure':
      return azure;
    case 'canva':
      return canva;
    case 'CSharp':
      return csharp;
    case 'vitejs':
      return vitejs;
    default:
      return null;
  }
};
