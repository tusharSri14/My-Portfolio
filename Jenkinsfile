pipeline{
    agent any
        stages{
            stage('Build'){
                steps{
                sh 'docker build -t myportfolio .'
                }
            }
            stage('Login'){
                steps{
                    sh 'docker login -u himanshu014 -p Himanshu@123'
                }
            }
            stage('Push'){
                steps{
                    sh 'docker push myportfolio'
                }
            }
        }
    }
