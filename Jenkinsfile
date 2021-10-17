pipeline {
    agent {
        docker {
            image 'sitapati/docker-alpine-python-node:latest'
            args '-p 3000:3000'
        }
    }
    environment {
        npm_config_cache = 'npm-cache'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm start &'
            }
        }
		stage('Test') {
            steps {
                sh 'chmod +x ./spec/ui/itemAdd.spec.js'
                sh 'chmod +x ./spec/ui/itemCheck.spec.js'
                sh 'chmod +x ./spec/ui/itemDelete.spec.js'
            }
        }
		stage('Kill') {
			steps {
				input message: 'Finished using the web site? (Click "Proceed" to continue)'
				sh 'chmod +x ./scripts/kill.sh' 
			}
		}
    }
}