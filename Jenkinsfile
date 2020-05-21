pipeline {
  agent {
    docker {
      image 'node:6-alpine'
    }

  }
  stages {
    stage('build') {
      steps {
        git(url: 'https://github.com/ch88251/design-patterns-with-typescript.git', branch: 'master')
      }
    }

    stage('test') {
      steps {
        sh 'npm test'
      }
    }

  }
}