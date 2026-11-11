---
published: true
layout: post
title: 'The Amazon API Estate: 199 Surfaces, One Source of Truth, and What It Still Leaves Out'
image: https://kinlane-images.s3.amazonaws.com/apievangelist/api-evangelist-images/the-amazon-api-estate-199-surfaces-one-source-of-truth-and-what-it-still-leaves-out.png
date: 2026-11-12
author: Kin Lane
tags:
  - Amazon
  - AWS
  - API Estates
  - APIs.io
  - Kin Score
  - Agent Readiness
  - Smithy
---
Last week I wrote about [the Microsoft API estate](https://apievangelist.com/2026/11/05/the-microsoft-api-estate-169-surfaces-one-company-and-the-work-of-making-it-coherent/). This week I re-profiled every live member of the [Amazon API estate on APIs.io](https://apis.io/estates/amazon/). That is 199 provider profiles, run in eleven waves, plus one I had to run by itself, and every one of them is better described than it was on Monday.

I did one thing differently this time. For Amazon, I made AWS's own Smithy models the source of truth for every API contract in the estate. That decision shaped almost everything I found, so it is where I want to start.

## What an estate is

An estate on APIs.io is every provider profile that declares a company as its parent. For Amazon, that tree is almost entirely [Amazon Web Services](https://apis.io/providers/amazon-web-services/): 196 of the 199 members sit under AWS. The other three are the [Amazon](https://apis.io/providers/amazon/) parent itself, the [Amazon Selling Partner API](https://apis.io/providers/amazon-seller-central/), and AWS. You can see the whole tree on the [estate page](https://apis.io/estates/amazon/), and every profile below links to its own page.

The scores in this post are from this week's re-profile. The estate page updates with the weekend APIs.io build, so until then it will still show the older figures.

## AWS already publishes its own contract

AWS does something most companies at its scale do not. It publishes a machine-readable model of every service it runs, in [Smithy](https://smithy.io), in one public repository: [aws/api-models-aws](https://github.com/aws/api-models-aws). That repository holds 436 service models. It is what AWS generates its own SDKs from.

So instead of trusting whatever OpenAPI we had gathered over the years, I generated every contract in the estate from those models:

- **186 members** are now built from **343 Smithy models**. Each model is pinned to the commit it was read at, with a record that the file we hold is byte-identical to what AWS published.
- **A product is often several models.** [Amazon Bedrock](https://apis.io/providers/amazon-bedrock/) is eight models, from the control plane to the runtime to AgentCore. [Billing and Cost Management](https://apis.io/providers/amazon-billing-and-cost-management/) is fifteen. [IAM](https://apis.io/providers/amazon-iam/) now includes STS, which is how most callers actually get their credentials.
- **The wire format is right.** EC2 and IAM are form-encoded with XML responses, S3 is REST XML, DynamoDB is AWS JSON, and every contract declares SigV4 signing for what it is, rather than pretending it is a bearer token. [Amazon SQS](https://apis.io/providers/amazon-sqs/) is a nice example: AWS moved it to the JSON protocol in 2023, and the model says so, while the spec we held before still described the old one.
- **Every operation ID in every contract now matches the model exactly.** I checked them all against the models.

[Amazon Chime SDK](https://apis.io/providers/amazon-chime/) went from no contract at all to 258 operations, because the model was sitting in AWS's repository the whole time. That is what a vendor-published model buys you.

## The investment shows

Across all 199 members, the mean [Kin Score](https://apis.io/rating/) moved from **56.8 to 69.9**, and the median is 71.3. **154 are exemplar** and 40 strong. Only five members sit below strong.

The top of the estate:

- [Amazon SES](https://apis.io/providers/amazon-ses/) (84.4), [AWS Clean Rooms](https://apis.io/providers/amazon-clean-rooms/) (83.5), [Amazon DynamoDB](https://apis.io/providers/amazon-dynamodb/) (82.9), [CodeGuru Profiler](https://apis.io/providers/amazon-codeguru-profiler/) (81.2), [Amazon Lex](https://apis.io/providers/amazon-lex/) (81.1), [CloudFront](https://apis.io/providers/cloudfront/) (80.7), [CloudSearch](https://apis.io/providers/amazon-cloudsearch/) (80.6) and [CodeDeploy](https://apis.io/providers/amazon-codedeploy/) (80.1).
- The core building blocks are all solidly exemplar: [S3](https://apis.io/providers/amazon-s3/) 77.2, [Lambda](https://apis.io/providers/aws-lambda/) 75.9, [SageMaker](https://apis.io/providers/amazon-sagemaker/) 75.1, [Amazon Q](https://apis.io/providers/amazon-q/) 73.2, [IAM](https://apis.io/providers/amazon-iam/) 68.7 and [EC2](https://apis.io/providers/amazon-ec2/) 68.3.

The biggest movers were services that were simply under-described: [Aurora DSQL](https://apis.io/providers/amazon-aurora-dsql/) +40.7, [Audit Manager](https://apis.io/providers/amazon-audit-manager/) +39.7, [Application Migration Service](https://apis.io/providers/amazon-application-migration-service/) +37.4, [Aurora](https://apis.io/providers/amazon-aurora/) +37.3, [AppSync](https://apis.io/providers/amazon-appsync/) +36.9, [AWS Backup](https://apis.io/providers/aws-backup/) +35.8 and [Athena](https://apis.io/providers/amazon-athena/) +31.5.

## Agent readiness is ahead, but still the gap

Mean agent readiness across the estate is **38.8**, up from 30.7. 98 members are at 40 or above. That is well ahead of where Microsoft sits, and most of it comes straight from the models: complete schemas, every modelled error, and honest authentication are exactly what an agent needs to call an API safely.

The leaders are [Amazon Selling Partner API](https://apis.io/providers/amazon-seller-central/) (67.9), [AWS Glue](https://apis.io/providers/aws-glue/) (52.0), [AWS Batch](https://apis.io/providers/aws-batch/) (51.5), [Security Hub](https://apis.io/providers/aws-security-hub/) (50.8), [Systems Manager](https://apis.io/providers/amazon-systems-manager/) (50.7) and the [Amazon](https://apis.io/providers/amazon/) parent (50.6).

Still, a 31-point gap between Kin Score and agent readiness is the story here too. A model tells an agent how to call an operation. It does not tell it which of 17,000 operations to call, what a sensible workflow looks like, or what the operation costs. Those are the next layer.

## Where the estate is not yet coherent

**AWS retires services and leaves them in the catalog.** I retired nineteen members in this pass, every one of them from AWS's own [Services in Full Shutdown](https://docs.aws.amazon.com/general/latest/gr/full_shutdown_services.html) list or its own end-of-support notice: FinSpace, IoT Events, Lookout for Metrics, Lookout for Vision, Lookout for Equipment, Panorama, RoboMaker, QLDB, Elastic Transcoder, SimSpace Weaver, Mechanical Turk, CodeStar, CodeGuru Security, MediaStore, App Mesh, Proton, Pinpoint, Snowball Edge and DeepRacer. Where AWS names a successor, I pointed the old pages at it: Elastic Transcoder at [MediaConvert](https://apis.io/providers/amazon-mediaconvert/), MediaStore at [S3](https://apis.io/providers/amazon-s3/), App Mesh at [ECS](https://apis.io/providers/amazon-ecs/). The good news is that AWS publishes that list at all. The harder news is that nineteen of the 218 profiles we held were for services that no longer exist.

**A model per service does not map cleanly to a product.** [VPC](https://apis.io/providers/amazon-vpc/), [VPN](https://apis.io/providers/amazon-vpn/), [Transit Gateway](https://apis.io/providers/amazon-transit-gateway/), [PrivateLink](https://apis.io/providers/amazon-privatelink/) and [Verified Access](https://apis.io/providers/amazon-verified-access/) are all part of the EC2 model. [Aurora](https://apis.io/providers/amazon-aurora/) is part of RDS, and [Fargate](https://apis.io/providers/amazon-fargate/) is part of ECS. These are products people buy and search for by name, but there is no model to point at for them. They keep their hand-written contracts for now.

**The same service ends up under two names.** The estate carried both `amazon-xray` and `aws-x-ray`, built from the same X-Ray model. I merged them into [Amazon X-Ray](https://apis.io/providers/amazon-xray/). Slugs still split between `amazon-*` and `aws-*`, which follows AWS's own inconsistent branding.

**Some products have no API at all.** [AWS App Studio](https://apis.io/providers/amazon-app-studio/) is console-only. The contract we held for it pointed at a host that does not exist, so I removed it, and its score dropped to an honest 37.2. [AWS CloudShell](https://apis.io/providers/amazon-cloudshell/) and the [AWS CLI](https://apis.io/providers/aws-cli/) sit at the bottom for a similar reason: they are tools, not hosted APIs.

**The estate is AWS, not Amazon.** 93 of AWS's 436 Smithy models have no member in the estate yet, including AWS Marketplace (eight models), Partner Central (five), Managed Workflows for Apache Airflow, AppStream, Resource Access Manager, Service Quotas and Elastic Disaster Recovery. And outside AWS, Amazon's retail, advertising, Alexa and Prime surfaces are barely represented. The [Selling Partner API](https://apis.io/providers/amazon-seller-central/) is the only one, and it leads the estate on agent readiness.

## One lesson from the run

I want to be honest about one thing that went wrong. After generating the contracts from Smithy, the older specs we held were still sitting beside them. Our own refine step quietly merged their operations back in, so about seventy members briefly carried every operation twice under two different names. Every score went up, so no score flagged it. I caught it by checking each contract's operation IDs against the model, regenerated everything from Smithy, and moved the old specs aside for good.

The lesson is the same one AWS has already learned: one source of truth only works if nothing else is allowed to write to the same place.

## Where I would invest next

1. **Publish lifecycle in the model.** AWS has a shutdown list, but the models do not say a service is closing. A deprecation date and a successor in the model would reach every SDK and every agent at once.
2. **Model products, not just services.** VPC, Aurora and Fargate need a way to be found as themselves, even if their operations live in EC2, RDS and ECS.
3. **Add workflows and cost on top of the models.** The contracts are complete. What agents need next is which operations go together, and what they cost to run.
4. **Bring the rest of Amazon into the same practice.** Retail, advertising and devices would benefit from the discipline AWS already applies to itself.

Amazon has already built the hardest part: a single, public, machine-readable source of truth for an enormous API surface. Most of what is left is metadata on top of it.

## Every member of the estate

Here is every live profile in the Amazon estate, with this week's Kin Score and agent readiness. Each name links to its page on APIs.io.

### Amazon (3)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Amazon Web Services](https://apis.io/providers/amazon-web-services/) | 67.4 | 42.4 |
| [Amazon Selling Partner API](https://apis.io/providers/amazon-seller-central/) | 59.9 | 67.9 |
| [Amazon](https://apis.io/providers/amazon/) | 58.3 | 50.6 |

### Amazon Web Services (196)

| Provider | Kin Score | Agent Readiness |
|---|---|---|
| [Amazon SES](https://apis.io/providers/amazon-ses/) | 84.4 | 38.4 |
| [Amazon Clean Rooms](https://apis.io/providers/amazon-clean-rooms/) | 83.5 | 36.1 |
| [Amazon DynamoDB](https://apis.io/providers/amazon-dynamodb/) | 82.9 | 41.9 |
| [Amazon CodeGuru Profiler](https://apis.io/providers/amazon-codeguru-profiler/) | 81.2 | 38.6 |
| [Amazon Lex](https://apis.io/providers/amazon-lex/) | 81.1 | 33.4 |
| [CloudFront](https://apis.io/providers/cloudfront/) | 80.7 | 37.9 |
| [Amazon CloudSearch](https://apis.io/providers/amazon-cloudsearch/) | 80.6 | 27.1 |
| [Amazon CodeDeploy](https://apis.io/providers/amazon-codedeploy/) | 80.1 | 28.2 |
| [Amazon CloudTrail](https://apis.io/providers/amazon-cloudtrail/) | 79.8 | 30.5 |
| [Amazon IoT SiteWise](https://apis.io/providers/amazon-iot-sitewise/) | 79.7 | 40.6 |
| [Amazon Connect](https://apis.io/providers/amazon-connect/) | 78.8 | 44.6 |
| [Amazon Rekognition](https://apis.io/providers/amazon-rekognition/) | 78.4 | 42.6 |
| [Amazon VPN](https://apis.io/providers/amazon-vpn/) | 78.0 | 34.5 |
| [Amazon API Gateway](https://apis.io/providers/aws-api-gateway/) | 77.9 | 37.1 |
| [Amazon MSK](https://apis.io/providers/amazon-msk/) | 77.6 | 40.7 |
| [Amazon Amplify](https://apis.io/providers/amazon-amplify/) | 77.4 | 28.0 |
| [Amazon Secrets Manager](https://apis.io/providers/amazon-secrets-manager/) | 77.4 | 40.1 |
| [Amazon CloudWatch](https://apis.io/providers/amazon-cloudwatch/) | 77.3 | 41.5 |
| [Amazon S3](https://apis.io/providers/amazon-s3/) | 77.2 | 34.5 |
| [Amazon Config](https://apis.io/providers/amazon-config/) | 77.1 | 36.3 |
| [Amazon Lightsail](https://apis.io/providers/amazon-lightsail/) | 77.1 | 32.6 |
| [Amazon EFS](https://apis.io/providers/amazon-efs/) | 76.9 | 35.9 |
| [Amazon Location Service](https://apis.io/providers/amazon-location-service/) | 76.9 | 46.4 |
| [Amazon DataSync](https://apis.io/providers/amazon-datasync/) | 76.7 | 37.8 |
| [Amazon KMS](https://apis.io/providers/amazon-kms/) | 76.6 | 44.6 |
| [Amazon Cloud9](https://apis.io/providers/amazon-cloud9/) | 76.1 | 34.9 |
| [Amazon Kendra](https://apis.io/providers/amazon-kendra/) | 76.1 | 40.3 |
| [Amazon Managed Blockchain](https://apis.io/providers/amazon-managed-blockchain/) | 76.1 | 42.4 |
| [Amazon Certificate Manager](https://apis.io/providers/amazon-certificate-manager/) | 75.9 | 34.7 |
| [Amazon ECS](https://apis.io/providers/amazon-ecs/) | 75.9 | 48.9 |
| [AWS Lambda](https://apis.io/providers/aws-lambda/) | 75.9 | 46.5 |
| [Amazon Private CA](https://apis.io/providers/amazon-private-ca/) | 75.7 | 45.4 |
| [Amazon FreeRTOS](https://apis.io/providers/amazon-freertos/) | 75.3 | 38.3 |
| [Amazon EventBridge](https://apis.io/providers/amazon-eventbridge/) | 75.2 | 40.2 |
| [Amazon SageMaker](https://apis.io/providers/amazon-sagemaker/) | 75.1 | 37.4 |
| [Amazon CloudFormation](https://apis.io/providers/amazon-cloudformation/) | 75.0 | 41.0 |
| [Amazon IoT FleetWise](https://apis.io/providers/amazon-iot-fleetwise/) | 74.9 | 36.1 |
| [Amazon Macie](https://apis.io/providers/amazon-macie/) | 74.8 | 43.5 |
| [Amazon Transcribe](https://apis.io/providers/amazon-transcribe/) | 74.8 | 35.2 |
| [Amazon Redshift](https://apis.io/providers/amazon-redshift/) | 74.7 | 45.5 |
| [Amazon Verified Permissions](https://apis.io/providers/amazon-verified-permissions/) | 74.7 | 47.4 |
| [Amazon B2B Data Interchange](https://apis.io/providers/amazon-b2b-data-interchange/) | 74.6 | 33.7 |
| [Amazon Transfer Family](https://apis.io/providers/amazon-transfer-family/) | 74.6 | 30.9 |
| [Amazon AppFlow](https://apis.io/providers/amazon-appflow/) | 74.4 | 36.4 |
| [Amazon Cognito](https://apis.io/providers/amazon-cognito/) | 74.4 | 38.0 |
| [Amazon WorkSpaces Web](https://apis.io/providers/amazon-workspaces-web/) | 74.4 | 42.2 |
| [AWS CodeBuild](https://apis.io/providers/aws-codebuild/) | 74.4 | 44.4 |
| [Amazon Managed Grafana](https://apis.io/providers/amazon-managed-grafana/) | 74.3 | 44.9 |
| [Amazon Translate](https://apis.io/providers/amazon-translate/) | 74.3 | 36.0 |
| [Amazon HealthOmics](https://apis.io/providers/amazon-healthomics/) | 74.2 | 46.7 |
| [Amazon Managed Service for Apache Flink](https://apis.io/providers/amazon-managed-apache-flink/) | 74.0 | 37.8 |
| [Amazon OpenSearch Service API](https://apis.io/providers/amazon-opensearch/) | 74.0 | 42.1 |
| [AWS Step Functions](https://apis.io/providers/aws-step-functions/) | 74.0 | 45.8 |
| [Amazon ECR](https://apis.io/providers/amazon-ecr/) | 73.9 | 29.6 |
| [Amazon GameLift](https://apis.io/providers/amazon-gamelift/) | 73.9 | 39.0 |
| [Amazon DataZone](https://apis.io/providers/amazon-datazone/) | 73.8 | 46.3 |
| [Amazon Direct Connect](https://apis.io/providers/amazon-direct-connect/) | 73.8 | 42.8 |
| [Amazon GuardDuty](https://apis.io/providers/amazon-guardduty/) | 73.8 | 40.6 |
| [Amazon QuickSight](https://apis.io/providers/amazon-quicksight/) | 73.8 | 44.5 |
| [AWS Glue](https://apis.io/providers/aws-glue/) | 73.8 | 52.0 |
| [Amazon Managed Service for Prometheus](https://apis.io/providers/amazon-managed-prometheus/) | 73.7 | 47.4 |
| [Amazon MediaTailor](https://apis.io/providers/amazon-mediatailor/) | 73.7 | 44.9 |
| [Amazon VPC](https://apis.io/providers/amazon-vpc/) | 73.7 | 44.6 |
| [Amazon Aurora DSQL](https://apis.io/providers/amazon-aurora-dsql/) | 73.6 | 42.6 |
| [Amazon Compute Optimizer](https://apis.io/providers/amazon-compute-optimizer/) | 73.6 | 34.3 |
| [Amazon EventBridge Scheduler](https://apis.io/providers/amazon-eventbridge-scheduler/) | 73.6 | 33.5 |
| [Amazon Elastic Load Balancing](https://apis.io/providers/amazon-elastic-load-balancing/) | 73.5 | 31.0 |
| [Amazon IoT TwinMaker](https://apis.io/providers/amazon-iot-twinmaker/) | 73.4 | 36.9 |
| [AWS Kinesis](https://apis.io/providers/kinesis/) | 73.3 | 45.6 |
| [Amazon Q](https://apis.io/providers/amazon-q/) | 73.2 | 42.0 |
| [Amazon Audit Manager](https://apis.io/providers/amazon-audit-manager/) | 73.1 | 28.3 |
| [Amazon DocumentDB](https://apis.io/providers/amazon-documentdb/) | 73.1 | 36.4 |
| [Amazon EC2 Auto Scaling](https://apis.io/providers/amazon-ec2-auto-scaling/) | 73.0 | 41.9 |
| [Amazon S3 Glacier](https://apis.io/providers/amazon-s3-glacier/) | 72.9 | 41.0 |
| [Amazon Neptune](https://apis.io/providers/amazon-neptune/) | 72.8 | 43.2 |
| [Amazon Security Lake](https://apis.io/providers/amazon-security-lake/) | 72.8 | 26.5 |
| [Amazon Polly](https://apis.io/providers/amazon-polly/) | 72.7 | 40.1 |
| [AWS Elastic Beanstalk](https://apis.io/providers/aws-elastic-beanstalk/) | 72.5 | 40.1 |
| [Amazon EC2 Image Builder](https://apis.io/providers/amazon-ec2-image-builder/) | 72.4 | 49.1 |
| [Amazon Personalize](https://apis.io/providers/amazon-personalize/) | 72.4 | 35.2 |
| [Amazon Comprehend](https://apis.io/providers/amazon-comprehend/) | 72.3 | 33.5 |
| [Amazon VPC Lattice](https://apis.io/providers/amazon-vpc-lattice/) | 72.3 | 42.9 |
| [Amazon Cloud WAN](https://apis.io/providers/amazon-cloud-wan/) | 72.2 | 35.1 |
| [Amazon Kinesis Data Firehose](https://apis.io/providers/amazon-kinesis-firehose/) | 72.2 | 36.1 |
| [Amazon RDS](https://apis.io/providers/amazon-rds/) | 72.2 | 43.4 |
| [Amazon Braket](https://apis.io/providers/amazon-braket/) | 72.1 | 36.4 |
| [Amazon Simple Workflow Service](https://apis.io/providers/amazon-swf/) | 72.1 | 40.1 |
| [Amazon Timestream](https://apis.io/providers/amazon-timestream/) | 72.1 | 49.4 |
| [Amazon Data Exchange](https://apis.io/providers/amazon-data-exchange/) | 72.0 | 43.2 |
| [Amazon Kinesis Video Streams](https://apis.io/providers/amazon-kinesis-video-streams/) | 71.9 | 35.2 |
| [Amazon EMR](https://apis.io/providers/amazon-emr/) | 71.8 | 34.0 |
| [AWS App Runner](https://apis.io/providers/aws-app-runner/) | 71.8 | 33.4 |
| [Amazon Forecast](https://apis.io/providers/amazon-forecast/) | 71.5 | 34.6 |
| [Amazon Glue DataBrew](https://apis.io/providers/amazon-glue-databrew/) | 71.5 | 36.2 |
| [Amazon IoT Device Defender](https://apis.io/providers/amazon-iot-device-defender/) | 71.5 | 39.4 |
| [Amazon CodePipeline](https://apis.io/providers/amazon-codepipeline/) | 71.4 | 27.9 |
| [Amazon Payment Cryptography](https://apis.io/providers/amazon-payment-cryptography/) | 71.4 | 37.8 |
| [AWS HealthLake](https://apis.io/providers/aws-healthlake/) | 71.4 | 47.2 |
| [Amazon EBS](https://apis.io/providers/amazon-ebs/) | 71.3 | 34.7 |
| [Amazon Inspector](https://apis.io/providers/amazon-inspector/) | 71.3 | 43.9 |
| [Amazon Systems Manager](https://apis.io/providers/amazon-systems-manager/) | 71.3 | 50.7 |
| [Amazon ElastiCache](https://apis.io/providers/amazon-elasticache/) | 71.0 | 31.1 |
| [Amazon Fault Injection Simulator](https://apis.io/providers/amazon-fault-injection-simulator/) | 71.0 | 42.8 |
| [Amazon WorkMail](https://apis.io/providers/amazon-workmail/) | 71.0 | 43.2 |
| [Amazon DevOps Guru](https://apis.io/providers/amazon-devops-guru/) | 70.8 | 40.9 |
| [Amazon Cloud Map](https://apis.io/providers/amazon-cloud-map/) | 70.7 | 32.0 |
| [Amazon CloudHSM](https://apis.io/providers/amazon-cloudhsm/) | 70.7 | 33.5 |
| [Amazon IoT Core](https://apis.io/providers/amazon-iot-core/) | 70.7 | 46.8 |
| [Amazon Parallel Computing Service](https://apis.io/providers/amazon-parallel-computing-service/) | 70.7 | 33.4 |
| [Amazon HealthImaging](https://apis.io/providers/amazon-healthimaging/) | 70.6 | 44.9 |
| [AWS Backup](https://apis.io/providers/aws-backup/) | 70.6 | 46.0 |
| [Amazon MediaConnect](https://apis.io/providers/amazon-mediaconnect/) | 70.4 | 39.7 |
| [Amazon MediaPackage](https://apis.io/providers/amazon-mediapackage/) | 70.3 | 42.1 |
| [Amazon Shield](https://apis.io/providers/amazon-shield/) | 70.3 | 34.6 |
| [Amazon Application Migration Service](https://apis.io/providers/amazon-application-migration-service/) | 70.1 | 38.1 |
| [Amazon AppSync](https://apis.io/providers/amazon-appsync/) | 70.1 | 32.6 |
| [Amazon EventBridge Pipes](https://apis.io/providers/amazon-eventbridge-pipes/) | 70.0 | 25.3 |
| [Amazon MediaLive](https://apis.io/providers/amazon-medialive/) | 69.9 | 40.5 |
| [Amazon Aurora](https://apis.io/providers/amazon-aurora/) | 69.8 | 35.2 |
| [Amazon CodeCommit](https://apis.io/providers/amazon-codecommit/) | 69.8 | 42.4 |
| [Amazon Resource Explorer](https://apis.io/providers/amazon-resource-explorer/) | 69.8 | 42.8 |
| [AWS WAF](https://apis.io/providers/aws-waf/) | 69.8 | 37.7 |
| [Amazon Billing And Cost Management](https://apis.io/providers/amazon-billing-and-cost-management/) | 69.7 | 37.7 |
| [Amazon Interactive Video Service](https://apis.io/providers/amazon-interactive-video-service/) | 69.6 | 39.7 |
| [Amazon Global Accelerator](https://apis.io/providers/amazon-global-accelerator/) | 69.5 | 41.5 |
| [Amazon Incident Manager](https://apis.io/providers/amazon-incident-manager/) | 69.5 | 38.6 |
| [Amazon Entity Resolution](https://apis.io/providers/amazon-entity-resolution/) | 69.4 | 26.1 |
| [Amazon Ground Station](https://apis.io/providers/amazon-ground-station/) | 69.3 | 43.2 |
| [Amazon IoT Greengrass](https://apis.io/providers/amazon-iot-greengrass/) | 69.3 | 40.3 |
| [Amazon Network Firewall](https://apis.io/providers/amazon-network-firewall/) | 69.3 | 37.1 |
| [Amazon Textract](https://apis.io/providers/amazon-textract/) | 69.3 | 42.4 |
| [Amazon Mainframe Modernization](https://apis.io/providers/amazon-mainframe-modernization/) | 69.2 | 41.4 |
| [Amazon SQS](https://apis.io/providers/amazon-sqs/) | 69.1 | 35.1 |
| [Amazon SimpleDB](https://apis.io/providers/amazon-simpledb/) | 68.9 | 35.2 |
| [Amazon IoT Device Management](https://apis.io/providers/amazon-iot-device-management/) | 68.8 | 38.3 |
| [Amazon CodeArtifact](https://apis.io/providers/amazon-codeartifact/) | 68.7 | 28.0 |
| [Amazon IAM](https://apis.io/providers/amazon-iam/) | 68.7 | 41.1 |
| [Amazon MediaConvert](https://apis.io/providers/amazon-mediaconvert/) | 68.7 | 42.3 |
| [Amazon Storage Gateway](https://apis.io/providers/amazon-storage-gateway/) | 68.7 | 43.9 |
| [Amazon CodeCatalyst](https://apis.io/providers/amazon-codecatalyst/) | 68.5 | 33.5 |
| [Amazon Detective](https://apis.io/providers/amazon-detective/) | 68.5 | 34.6 |
| [Amazon Health Dashboard](https://apis.io/providers/amazon-health-dashboard/) | 68.4 | 35.8 |
| [Amazon IAM Access Analyzer](https://apis.io/providers/amazon-iam-access-analyzer/) | 68.4 | 46.6 |
| [Amazon EC2](https://apis.io/providers/amazon-ec2/) | 68.3 | 49.9 |
| [Amazon X-Ray](https://apis.io/providers/amazon-xray/) | 67.8 | 37.2 |
| [Amazon EKS](https://apis.io/providers/amazon-eks/) | 67.7 | 42.6 |
| [Amazon IAM Identity Center](https://apis.io/providers/amazon-iam-identity-center/) | 67.5 | 44.0 |
| [Amazon Keyspaces](https://apis.io/providers/amazon-keyspaces/) | 67.5 | 40.3 |
| [AWS Security Hub](https://apis.io/providers/aws-security-hub/) | 67.3 | 50.8 |
| [Amazon Route 53](https://apis.io/providers/amazon-route-53/) | 67.0 | 35.9 |
| [Amazon Device Farm](https://apis.io/providers/amazon-device-farm/) | 66.9 | 35.8 |
| [Amazon Fraud Detector](https://apis.io/providers/amazon-fraud-detector/) | 66.6 | 36.3 |
| [Amazon Organizations](https://apis.io/providers/amazon-organizations/) | 66.6 | 45.2 |
| [Amazon Well-Architected Tool](https://apis.io/providers/amazon-well-architected-tool/) | 66.4 | 45.0 |
| [Amazon Firewall Manager](https://apis.io/providers/amazon-firewall-manager/) | 66.2 | 34.6 |
| [Amazon Outposts](https://apis.io/providers/amazon-outposts/) | 66.0 | 46.9 |
| [Amazon Service Catalog](https://apis.io/providers/amazon-service-catalog/) | 65.8 | 41.8 |
| [AWS Batch](https://apis.io/providers/aws-batch/) | 65.6 | 51.5 |
| [Amazon Trusted Advisor](https://apis.io/providers/amazon-trusted-advisor/) | 65.5 | 38.6 |
| [Amazon Athena](https://apis.io/providers/amazon-athena/) | 65.4 | 45.4 |
| [Amazon Lake Formation](https://apis.io/providers/amazon-lake-formation/) | 65.3 | 36.9 |
| [Amazon Transit Gateway](https://apis.io/providers/amazon-transit-gateway/) | 65.2 | 37.7 |
| [Amazon Directory Service](https://apis.io/providers/amazon-directory-service/) | 65.1 | 45.7 |
| [Amazon Deadline Cloud](https://apis.io/providers/amazon-deadline-cloud/) | 64.6 | 45.5 |
| [Amazon Nova](https://apis.io/providers/amazon-nova/) | 64.6 | 50.5 |
| [Amazon Route 53 Resolver](https://apis.io/providers/amazon-route53-resolver/) | 64.6 | 35.4 |
| [Amazon Fargate](https://apis.io/providers/amazon-fargate/) | 64.5 | 43.5 |
| [Amazon Serverless Application Repository](https://apis.io/providers/amazon-serverless-application-repository/) | 63.0 | 28.3 |
| [Amazon Data Lifecycle Manager](https://apis.io/providers/amazon-data-lifecycle-manager/) | 62.8 | 34.2 |
| [Amazon SNS](https://apis.io/providers/amazon-sns/) | 62.6 | 42.6 |
| [Amazon Bedrock](https://apis.io/providers/amazon-bedrock/) | 62.5 | 48.9 |
| [Amazon Data Pipeline](https://apis.io/providers/amazon-data-pipeline/) | 62.4 | 38.4 |
| [Amazon License Manager](https://apis.io/providers/amazon-license-manager/) | 62.4 | 43.8 |
| [Amazon Chime SDK](https://apis.io/providers/amazon-chime/) | 62.3 | 40.5 |
| [Amazon Augmented AI](https://apis.io/providers/amazon-augmented-ai/) | 62.1 | 28.3 |
| [Amazon Control Tower](https://apis.io/providers/amazon-control-tower/) | 62.1 | 34.2 |
| [Amazon PrivateLink](https://apis.io/providers/amazon-privatelink/) | 62.0 | 34.7 |
| [Amazon Verified Access](https://apis.io/providers/amazon-verified-access/) | 61.9 | 28.1 |
| [Amazon MemoryDB](https://apis.io/providers/amazon-memorydb/) | 61.7 | 36.7 |
| [Amazon Resilience Hub](https://apis.io/providers/amazon-resilience-hub/) | 61.7 | 38.6 |
| [Amazon MQ](https://apis.io/providers/amazon-mq/) | 61.5 | 40.3 |
| [Amazon Signer](https://apis.io/providers/amazon-signer/) | 61.2 | 37.7 |
| [Amazon DMS](https://apis.io/providers/amazon-dms/) | 61.1 | 40.0 |
| [Amazon FSx](https://apis.io/providers/amazon-fsx/) | 60.1 | 43.9 |
| [Amazon WorkSpaces](https://apis.io/providers/amazon-workspaces/) | 60.1 | 40.3 |
| [Amazon Launch Wizard](https://apis.io/providers/amazon-launch-wizard/) | 59.8 | 41.1 |
| [Amazon Migration Hub](https://apis.io/providers/amazon-migration-hub/) | 58.3 | 43.9 |
| [Amazon CodeGuru Reviewer](https://apis.io/providers/amazon-codeguru-reviewer/) | 58.2 | 33.5 |
| [Amazon Supply Chain](https://apis.io/providers/amazon-supply-chain/) | 56.1 | 44.6 |
| [Amazon Monitron](https://apis.io/providers/amazon-monitron/) | 55.7 | 39.4 |
| [Amazon Application Discovery Service](https://apis.io/providers/amazon-application-discovery-service/) | 54.4 | 30.0 |
| [Firecracker](https://apis.io/providers/firecracker/) | 46.2 | 25.5 |
| [Amazon CloudShell](https://apis.io/providers/amazon-cloudshell/) | 44.3 | 2.5 |
| [Amazon App Studio](https://apis.io/providers/amazon-app-studio/) | 37.2 | 2.9 |
| [AWS CLI](https://apis.io/providers/aws-cli/) | 36.3 | 11.4 |
| [Elemental](https://apis.io/providers/elemental/) | 31.2 | 10.8 |

If you work on any of these services and something here is wrong, the [estate page](https://apis.io/estates/amazon/) and each provider page let you correct it. I would rather be told than be wrong.
