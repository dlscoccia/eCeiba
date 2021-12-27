@Library('ceiba-jenkins-library') _
pipeline {
  //Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave_Induccion'
  }

  //Opciones específicas de Pipeline dentro del Pipeline
  options {
    	buildDiscarder(logRotator(numToKeepStr: '3'))
 	disableConcurrentBuilds()
  }

  tools {
  nodejs 'NodeJS12'
}

  //Aquí comienzan los “items” del Pipeline
  stages{
    stage('Checkout') {
      steps{
        echo "------------>Checkout<------------"
        checkout scm
      }
    }
        

stage('NPM Install') {
      steps {
        echo "------------>Installing<------------"
          sh 'node -v'
      sh 'npm install'
    }
}
    stage('Unit Test') {
      steps {
        echo "------------>Testing<------------"
        sh 'npm run test:coverage'
      }
    }
    stage('Test end-to-end') {
      steps{
        echo "------------>Testing Protractor<------------"
       // echo 'cypres test to run local'
      }
    }


stage('Static Code Analysis') {
    steps{
        sonarqubeMasQualityGatesP(sonarKey:'co.com.ceiba.adn:eCeiba-daniel.lorenzo', 
        sonarName:'CeibaADN-eCeiba-daniel.lorenzo', 
        sonarPathProperties:'./sonar-project.properties')
    }
} 


    stage('Build') {
      steps {
        echo "------------>Build<------------"
        sh 'npm run ruild'
      }
    }  
  }

  post {
    
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
      junit allowEmptyResults: true, testResults: '**/test-results/*.xml'
    }
    failure {
      echo 'This will run only if failed'
      mail (to: 'daniel.lorenzo@ceiba.com.co',subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}")
    }
    unstable {
      echo 'This will run only if the run was marked as unstable'
    }
    changed {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }
  }
}
