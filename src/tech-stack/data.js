import fastApiLogo from '../assets/tech-stack/fastapi-logo.svg';
import djangoLogo from '../assets/tech-stack/django-logo.svg';
import flaskLogo from '../assets/tech-stack/flask-logo.svg';
import tornadoLogo from '../assets/tech-stack/tornado-logo.svg';
import aiohttpLogo from '../assets/tech-stack/aiohttp-logo.svg';
import pyramidLogo from '../assets/tech-stack/pyramid-logo.svg';

import dockerLogo from '../assets/tech-stack/docker-icon.svg';
import terraformLogo from '../assets/tech-stack/terraform-icon.svg';
import bashLogo from '../assets/tech-stack/bach-icon.svg';
import dockercomposeLogo from '../assets/tech-stack/docker-compose-icon.svg';
import kubernetesLogo from '../assets/tech-stack/kubernetes-icon.svg';

import pythonLogo from '../assets/tech-stack/python-icon.svg';
import web3pyLogo from '../assets/tech-stack/web3py-icon.svg';
import golangLogo from '../assets/tech-stack/golang-icon.svg';
import solidityLogo from '../assets/tech-stack/solidity.svg';

import sparkLogo from '../assets/tech-stack/spark-icon.svg';
import airFlow from '../assets/tech-stack/airflow-icon.svg';
import tensorFlowLogo from '../assets/tech-stack/tensorflow-icon.svg';
import pandasLogo from '../assets/tech-stack/pandas-icon.svg';
import matplotlibLogo from '../assets/tech-stack/matplodlib-icon.svg';
import seabornLogo from '../assets/tech-stack/seaborn-icon.svg';
import plotly from '../assets/tech-stack/plotly.svg';
import tensorflow2 from '../assets/tech-stack/tensorflow-2.svg';
import azureLogo from '../assets/tech-stack/azure-icon.svg';

import kafkaLogo from '../assets/tech-stack/kafka-icon.svg';
import rabbitmqLogo from '../assets/tech-stack/rabbitmq-icon.svg';
import celeryLogo from '../assets/tech-stack/celery-icon.svg';

import awsLogo from '../assets/tech-stack/aws-icon.svg';
import gcpLogo from '../assets/tech-stack/gcp-icon.svg';

import postgreSQL from '../assets/tech-stack/postgresql-icon.svg';
import mysql from '../assets/tech-stack/mysql-icon.svg';
import auroradb from '../assets/tech-stack/auroradb-icon.svg';
import mongo from '../assets/tech-stack/mongodb-icon.svg';
import redis from '../assets/tech-stack/redis-icon.svg';
import dynamo from '../assets/tech-stack/dynamodb-icon.svg';

export const frameworksSelectorButtons = [
	'Web frameworks',
	'Databases',
	'Data Engineering',
	'DevOps',
	'Message brockers',
	'Web3',
	'Cloud services',
];

const frameworksStackList = [
	{ name: 'FastAPI', techIcon: fastApiLogo },
	{ name: 'Django', techIcon: djangoLogo },
	{ name: 'Flask', techIcon: flaskLogo },
	{ name: 'Tornado', techIcon: tornadoLogo },
	{ name: 'Aiohttp', techIcon: aiohttpLogo },
	{ name: 'Pyramid', techIcon: pyramidLogo },
];

const devopsStackList = [
	{ name: 'Docker', techIcon: dockerLogo },
	{ name: 'Terraform', techIcon: terraformLogo },
	{ name: 'Bash', techIcon: bashLogo },
	{ name: 'Docker-compose', techIcon: dockercomposeLogo },
	{ name: 'Kubernetes', techIcon: kubernetesLogo },
];

const web3StackList = [
	{ name: 'Python', techIcon: pythonLogo },
	{ name: 'Web3py', techIcon: web3pyLogo },
	{ name: 'Golang', techIcon: golangLogo },
	{ name: 'Solidity', techIcon: solidityLogo },
];

const dataEngineeringStackList = [
	{ name: 'Spark', techIcon: sparkLogo },
	{ name: 'AirFlow', techIcon: airFlow },
	{ name: 'TensorFlow', techIcon: tensorFlowLogo },
	{ name: 'Pandas', techIcon: pandasLogo },
	{ name: 'Matplotlib', techIcon: matplotlibLogo },
	{ name: 'Seaborn', techIcon: seabornLogo },
	{ name: 'Plotly', techIcon: plotly },
	{ name: 'TensorFlow', techIcon: tensorflow2 },
];

const messageBrockersStackList = [
	{ name: 'Kafka', techIcon: kafkaLogo },
	{ name: 'RabbitMQ', techIcon: rabbitmqLogo },
	{ name: 'Celery', techIcon: celeryLogo },
];

const cloudPlatformsStackList = [
	{ name: 'Azure', techIcon: azureLogo },
	{ name: 'AWS', techIcon: awsLogo },
	{ name: 'GCP', techIcon: gcpLogo },
];

const databaseStack = [
	{ name: 'PostgreSQL', techIcon: postgreSQL },
	{ name: 'MySQL', techIcon: mysql },
	{ name: 'AuroraDB', techIcon: auroradb },
	{ name: 'MongoDB', techIcon: mongo },
	{ name: 'Redis', techIcon: redis },
	{ name: 'DynamoDB', techIcon: dynamo },
];

export const techStack = [
	frameworksStackList,
	databaseStack,
	dataEngineeringStackList,
	devopsStackList,
	messageBrockersStackList,
	web3StackList,
	cloudPlatformsStackList,
];
