pipeline     {
    agent any
    stages {
        stage('Clone') {
            steps {
                git url: 'https://github.com/TmaThinhNguyen/fe-demo.git',
                    credentialsId: 'springdeploy-user',
                    branch: 'master'
                echo "Clone successfully!"
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t 0f0f0f0f/react:latest .'
                echo "Build Successfully!"
            }
        }
        stage('Login') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerhubPassword', usernameVariable: 'dockerhubUser')]) {
                        bat "docker login -u ${env.dockerhubUser} -p ${env.dockerhubPassword}"
                        bat 'docker push 0f0f0f0f/react:latest'
                }
                echo "Login Successfully!!!"
            }
        }

    }
}
