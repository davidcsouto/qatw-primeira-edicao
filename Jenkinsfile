pipeline {
    agent {
        docker{
            'mcr.microsoft.com/playwright:v1.51.0-noble'
            args '--qatw-primeira-edicao_skynet'
        }
    }

    stages {
        stage('Node.js Deps') {
            steps {
                sh 'npm install'
            }
        }
        stage('E2E Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
