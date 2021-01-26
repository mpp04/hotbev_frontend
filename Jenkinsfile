
// DRAFT PIPELINE MODELS!

pipeline 
{
	agent any
	stages 
	{
		stage('One') 
		{
			steps 
			{ 
			echo 'Hello World'
			echo 'Checking system...'
			}
		}
		stage('Two')
		{
			steps 
			{ 
			echo 'This is stage 2'	
			echo "Resolve ${env:ec2}"
			}
			
		}
		stage('Interactive test') 
		{
            input 
			{
                message "Should we continue?"
                ok "Yes, we should."
                submitter "alice,bob"
                parameters 
				{
                    string(name: 'PERSON', defaultValue: 'Mr Jenkins', description: 'Who should I say hello to?')
                }
            }
            steps 
			{
                echo "Hello, ${PERSON}, nice to meet you."
            }
		}
	}
}

pipeline {
    agent any
    tools {
        maven 'maven' 
    }
    stages {
        stage('Example') {
            steps {
                //sh 'mvn --version'
				bat mvn --version
            }
        }
    }
}


node {
    stage('Example') {
        if (env.BRANCH_NAME == 'master') {
            echo 'I only execute on the master branch'
        } else {
            echo 'I execute elsewhere'
        }
    }
}