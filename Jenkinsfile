pipeline {
  agent none
  stages {
    stage('TEST,BUILD AND PUSH ON PRESLAV'){
      agent {
        label 'master'
      }
      steps {
        git url: 'https://github.com/mpp04/hotbev_frontend.git', branch: 'dev'
        bat 'dir'
        bat 'docker build -t mpp04/hotbev_frontend .'
        bat "docker login -u ${env.DOCKER_USR} -p $env.DOCKER_PWD"
        bat 'docker push mpp04/hotbev_frontend'
      }
    }
    stage('DEPLOY ON EC2'){
      agent {
        label 'slave'
      }
      steps {
        sh 'echo $HOME' //ensure user ubuntu and jenkins are added to sudoers file
        // sh 'sudo service docker restart'
        sh 'sudo docker stop frontend'
        sh 'sudo docker rm frontend'
        sh "sudo docker login -u $env.DOCKER_USR -p $env.DOCKER_PWD"
        sh 'sudo docker pull mpp04/hotbev_frontend'
        sh 'sudo docker run -d -p 80:80 --name frontend mpp04/hotbev_frontend'
      }
    }
  }
}
