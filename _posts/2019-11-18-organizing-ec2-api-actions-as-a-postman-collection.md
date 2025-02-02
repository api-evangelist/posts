---
published: true
layout: post
title: Organizing EC2 API Actions As A Postman Collection
image: >-
  http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_aws_ec2_documentation.png
author:
  name: kinlane
tags:
  - Capabilities
  - AWS
  - Collections
---
I’m crafting Postman collections in support of the upcoming re:Invent conference in Vegas in December. One of the first collections I crafted was for Amazon EC2, allowing anyone put the Postman collection to work managing their AWS EC2 infrastructure. At first glance of the 359 actions available via the AWS EC2 API documentation page, I was overwhelmed. I definitely needed a way to tame the AWS EC2 API, making it more accessible and usable by a human—while APIs are meant for system to system integration, and delivering desktop, web, mobile, and device applications, it still has to be implemented by a human. 

When crafting the AWS EC2 Postman collection I wanted to take some time to better organize the wealth of actions you can take, making them more accessible via a single Postman collection, organized by resource. [You can access the collection here](https://www.postman.com/collections/e6e8465143cba95cf28b), and the Postman generated API documentation for the AWS EC2 API by clicking on the image below.

[![](http://kinlane-productions2.s3.amazonaws.com/api_evangelist_site/blog/postman_aws_ec2_documentation.png)](https://documenter.postman.com/view/35240/SW7XZpAm?version=latest)

The Postman collection helps organize the 350+ actions into folders by resource—making them a little easier on the eyes, and to navigate, while also making every AWS EC2 action immediately executable once you publish your keys and secrets to the Postman environment that accompanies the collection. By organizing all of the individual resources into more coherent groups, it increases the chance that the resource you need will be found, and put too use.

### Account Attributes

*   Describe Account Attributes ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Address To Classic](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#address-to-classic)

*   Restore Address To Classic ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Address To VPC](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#address-to-vpc)

*   Move Address To VPC ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Addresses](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#addresses)

*   Allocate Address ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Associate Address ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Describe Addresses ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Disassociate Address ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Release Address ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Aggregate ID Format](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#aggregate-id-format)

*   Describe Aggregate ID Format ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Availability Zones](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#availability-zones)

*   Describe Availability Zones ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [BYOIP CIDR](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#byoip-cidr)

*   Advertise BYOIP CIDR ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Deprovision BYOIP CIDR ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Provision BYOIP CIDR ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Withdraw BYOIP CIDR ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Bundle Task](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#bundle-task)

*   Cancel Bundle Task ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Capacity Reservation](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#capacity-reservation)

*   Cancel Capacity Reservation ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Capacity Reservation ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Capacity Reservation ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Capacity Reservation Usage](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#capacity-reservation-usage)

*   Get Capacity Reservation Usage ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Classic Link Instances](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#classic-link-instances)

*   Describe Classic Link Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Classic Link VPC](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#classic-link-vpc)

*   Attach Classic Link VPC ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Detach Classic Link VPC ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Client VPN Authorization Rules](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#client-vpn-authorization-rules)

*   Describe Client VPN Authorization Rules ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Client VPN Client Certificate Revocation List](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#client-vpn-client-certificate-revocation-list)

*   Export Client VPN Client Certificate Revocation List ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Import Client VPN Client Certificate Revocation List ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Client VPN Client Configuration](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#client-vpn-client-configuration)

*   Export Client VPN Client Configuration ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Client VPN Connections](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#client-vpn-connections)

*   Describe Client VPN Connections ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Terminate Client VPN Connections ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Client VPN Endpoint](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#client-vpn-endpoint)

*   Create Client VPN Endpoint ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Client VPN Endpoint ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Client VPN Endpoint ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Client VPN Ingress](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#client-vpn-ingress)

*   Authorize Client VPN Ingress ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Revoke Client VPN Ingress ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Client VPN Route](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#client-vpn-route)

*   Create Client VPN Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Client VPN Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Client VPN Target Network](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#client-vpn-target-network)

*   Associate Client VPN Target Network ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Disassociate Client VPN Target Network ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Console Output](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#console-output)

*   Get Console Output ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Console Screenshot](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#console-screenshot)

*   Get Console Screenshot ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Conversion Task](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#conversion-task)

*   Cancel Conversion Task ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Customer Gateway](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#customer-gateway)

*   Create Customer Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Customer Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [DHCP Options](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#dhcp-options)

*   Associate DHCP Options ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create DHCP Options ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete DHCP Options ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Describe DHCP Options ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Diagnostic Interrupt](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#diagnostic-interrupt)

*   Send Diagnostic Interrupt ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [EBS Encryption By Default](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#ebs-encryption-by-default)

*   Disable EBS Encryption By Default ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Enable EBS Encryption By Default ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Get EBS Encryption By Default ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [EBS Kms Key ID](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#ebs-kms-key-id)

*   Get EBS Default Kms Key ID ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify EBS Default Kms Key ID ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Reset EBS Default Kms Key ID ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Egress Only Internet Gateway](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#egress-only-internet-gateway)

*   Create Egress Only Internet Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Egress Only Internet Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Elastic GPUs](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#elastic-gpus)

*   Describe Elastic GPUs ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Export Image Tasks](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#export-image-tasks)

*   Describe Export Image Tasks ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Export Task](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#export-task)

*   Cancel Export Task ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [FPGA Image](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#fpga-image)

*   Copy FPGA Image ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create FPGA Image ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete FPGA Image ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [FPGA Image Attribute](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#fpga-image-attribute)

*   Describe FPGA Image Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify FPGA Image Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Reset FPGA Image Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Fleet](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#fleet)

*   Create Fleet ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Fleet ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Fleet History](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#fleet-history)

*   Describe Fleet History ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Fleet Instances](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#fleet-instances)

*   Describe Fleet Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Flow Logs](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#flow-logs)

*   Create Flow Logs ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Flow Logs ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Describe Flow Logs ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Host Reservation](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#host-reservation)

*   Purchase Host Reservation ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Host Reservation Offerings](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#host-reservation-offerings)

*   Describe Host Reservation Offerings ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Host Reservation Purchase Preview](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#host-reservation-purchase-preview)

*   Get Host Reservation Purchase Preview ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Host Reservations](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#host-reservations)

*   Describe Host Reservations ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Hosts](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#hosts)

*   Allocate Hosts ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Describe Hosts ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Hosts ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Release Hosts ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [IAM Instance Profile](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#iam-instance-profile)

*   Associate IAM Instance Profile ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Disassociate IAM Instance Profile ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [IAM Instance Profile Association](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#iam-instance-profile-association)

*   Replace IAM Instance Profile Association ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [IAM Instance Profile Associations](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#iam-instance-profile-associations)

*   Describe IAM Instance Profile Associations ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [ID Format](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#id-format)

*   Describe ID Format ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify ID Format ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [IDentity ID Format](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#identity-id-format)

*   Describe IDentity ID Format ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify IDentity ID Format ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [IPV6 Addresses](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#ipv6-addresses)

*   Assign IPV6 Addresses ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Unassign IPV6 Addresses ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Image](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#image)

*   Copy Image ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Image ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Deregister Image ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Export Image ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Import Image ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Register Image ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Image Attribute](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#image-attribute)

*   Describe Image Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Image Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Reset Image Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Import Image Tasks](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#import-image-tasks)

*   Describe Import Image Tasks ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Import Snapshot Tasks](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#import-snapshot-tasks)

*   Describe Import Snapshot Tasks ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Import Task](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#import-task)

*   Cancel Import Task ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Instance](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#instance)

*   Bundle Instance ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Import Instance ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Instance Attribute](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#instance-attribute)

*   Describe Instance Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Instance Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Reset Instance Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Instance Capacity Reservation Attributes](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#instance-capacity-reservation-attributes)

*   Modify Instance Capacity Reservation Attributes ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Instance Credit Specification](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#instance-credit-specification)

*   Modify Instance Credit Specification ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Instance Credit Specifications](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#instance-credit-specifications)

*   Describe Instance Credit Specifications ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Instance Event Start Time](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#instance-event-start-time)

*   Modify Instance Event Start Time ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Instance Export Task](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#instance-export-task)

*   Create Instance Export Task ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Instance Placement](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#instance-placement)

*   Modify Instance Placement ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Instance Status](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#instance-status)

*   Describe Instance Status ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Report Instance Status ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Internet Gateway](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#internet-gateway)

*   Attach Internet Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Internet Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Internet Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Detach Internet Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Key Pair](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#key-pair)

*   Create Key Pair ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Key Pair ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Import Key Pair ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Launch Template](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#launch-template)

*   Create Launch Template ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Launch Template ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Launch Template ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Launch Template Data](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#launch-template-data)

*   Get Launch Template Data ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Launch Template Version](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#launch-template-version)

*   Create Launch Template Version ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Moving Addresses](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#moving-addresses)

*   Describe Moving Addresses ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Nat Gateway](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#nat-gateway)

*   Create Nat Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Nat Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Network ACL](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#network-acl)

*   Create Network ACL ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Network ACL ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Network ACL Association](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#network-acl-association)

*   Replace Network ACL Association ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Network ACL Entry](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#network-acl-entry)

*   Create Network ACL Entry ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Network ACL Entry ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Replace Network ACL Entry ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Network Interface](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#network-interface)

*   Attach Network Interface ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Network Interface ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Network Interface ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Detach Network Interface ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Network Interface Attribute](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#network-interface-attribute)

*   Describe Network Interface Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Network Interface Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Reset Network Interface Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Network Interface Permission](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#network-interface-permission)

*   Create Network Interface Permission ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Network Interface Permission ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Password Data](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#password-data)

*   Get Password Data ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Placement Group](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#placement-group)

*   Create Placement Group ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Placement Group ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Prefix Lists](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#prefix-lists)

*   Describe Prefix Lists ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Principal ID Format](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#principal-id-format)

*   Describe Principal ID Format ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Private IP Addresses](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#private-ip-addresses)

*   Assign Private IP Addresses ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Unassign Private IP Addresses ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Product Instance](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#product-instance)

*   Confirm Product Instance ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Public IPV4 Pools](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#public-ipv4-pools)

*   Describe Public IPV4 Pools ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Queued Reserved Instances](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#queued-reserved-instances)

*   Delete Queued Reserved Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Regions](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#regions)

*   Describe Regions ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Reserved Instances](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#reserved-instances)

*   Describe Reserved Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Reserved Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Reserved Instances Exchange Quote](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#reserved-instances-exchange-quote)

*   Accept Reserved Instances Exchange Quote ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Get Reserved Instances Exchange Quote ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Reserved Instances Listing](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#reserved-instances-listing)

*   Cancel Reserved Instances Listing ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Reserved Instances Listing ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Reserved Instances Modifications](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#reserved-instances-modifications)

*   Describe Reserved Instances Modifications ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Reserved Instances Offering](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#reserved-instances-offering)

*   Purchase Reserved Instances Offering ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Reserved Instances Offerings](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#reserved-instances-offerings)

*   Describe Reserved Instances Offerings ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Route](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#route)

*   Create Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Replace Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Route Table](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#route-table)

*   Associate Route Table ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Route Table ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Route Table ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Disassociate Route Table ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Route Table Association](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#route-table-association)

*   Replace Route Table Association ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Scheduled Instance Availability](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#scheduled-instance-availability)

*   Describe Scheduled Instance Availability ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Scheduled Instances](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#scheduled-instances)

*   Describe Scheduled Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Purchase Scheduled Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Run Scheduled Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Security Group](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#security-group)

*   Create Security Group ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Security Group ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Security Group Egress](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#security-group-egress)

*   Authorize Security Group Egress ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Revoke Security Group Egress ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Security Group Ingress](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#security-group-ingress)

*   Authorize Security Group Ingress ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Revoke Security Group Ingress ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Security Group References](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#security-group-references)

*   Describe Security Group References ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Security Group Rule Descriptions Egress](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#security-group-rule-descriptions-egress)

*   Update Security Group Rule Descriptions Egress ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Security Group Rule Descriptions Ingress](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#security-group-rule-descriptions-ingress)

*   Update Security Group Rule Descriptions Ingress ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Security Groups To Client VPN Target Network](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#security-groups-to-client-vpn-target-network)

*   Apply Security Groups To Client VPN Target Network ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Snapshot](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#snapshot)

*   Copy Snapshot ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Snapshot ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Snapshot ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Import Snapshot ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Snapshot Attribute](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#snapshot-attribute)

*   Describe Snapshot Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Snapshot Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Reset Snapshot Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Spot Datafeed Subscription](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#spot-datafeed-subscription)

*   Create Spot Datafeed Subscription ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Spot Datafeed Subscription ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Describe Spot Datafeed Subscription ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Spot Fleet](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#spot-fleet)

*   Request Spot Fleet ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Spot Fleet Instances](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#spot-fleet-instances)

*   Describe Spot Fleet Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Spot Fleet Request](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#spot-fleet-request)

*   Modify Spot Fleet Request ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Spot Fleet Request History](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#spot-fleet-request-history)

*   Describe Spot Fleet Request History ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Spot Fleet Requests](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#spot-fleet-requests)

*   Cancel Spot Fleet Requests ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Describe Spot Fleet Requests ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Spot Instance Requests](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#spot-instance-requests)

*   Cancel Spot Instance Requests ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Describe Spot Instance Requests ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Spot Instances](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#spot-instances)

*   Request Spot Instances ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Spot Price History](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#spot-price-history)

*   Describe Spot Price History ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Stale Security Groups](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#stale-security-groups)

*   Describe Stale Security Groups ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Subnet](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#subnet)

*   Create Default Subnet ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Subnet ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Subnet ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Subnet Attribute](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#subnet-attribute)

*   Modify Subnet Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Subnet CIDR Block](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#subnet-cidr-block)

*   Associate Subnet CIDR Block ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Disassociate Subnet CIDR Block ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Tags](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#tags)

*   Create Tags ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Tags ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Describe Tags ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Traffic Mirror Filter](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#traffic-mirror-filter)

*   Create Traffic Mirror Filter ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Traffic Mirror Filter ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Traffic Mirror Filter Network Services](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#traffic-mirror-filter-network-services)

*   Modify Traffic Mirror Filter Network Services ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Traffic Mirror Filter Rule](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#traffic-mirror-filter-rule)

*   Create Traffic Mirror Filter Rule ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Traffic Mirror Filter Rule ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Traffic Mirror Filter Rule ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Traffic Mirror Session](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#traffic-mirror-session)

*   Create Traffic Mirror Session ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Traffic Mirror Session ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Traffic Mirror Session ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Traffic Mirror Target](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#traffic-mirror-target)

*   Create Traffic Mirror Target ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Traffic Mirror Target ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Transit Gateway](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#transit-gateway)

*   Create Transit Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Transit Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Transit Gateway Attachment Propagations](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#transit-gateway-attachment-propagations)

*   Get Transit Gateway Attachment Propagations ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Transit Gateway Attachments](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#transit-gateway-attachments)

*   Describe Transit Gateway Attachments ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Transit Gateway Route](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#transit-gateway-route)

*   Create Transit Gateway Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Transit Gateway Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Replace Transit Gateway Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Transit Gateway Route Table](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#transit-gateway-route-table)

*   Associate Transit Gateway Route Table ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Transit Gateway Route Table ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Transit Gateway Route Table ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Disassociate Transit Gateway Route Table ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Transit Gateway Route Table Associations](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#transit-gateway-route-table-associations)

*   Get Transit Gateway Route Table Associations ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Transit Gateway Route Table Propagation](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#transit-gateway-route-table-propagation)

*   Disable Transit Gateway Route Table Propagation ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Enable Transit Gateway Route Table Propagation ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Transit Gateway VPC Attachment](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#transit-gateway-vpc-attachment)

*   Accept Transit Gateway VPC Attachment ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Transit Gateway VPC Attachment ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Transit Gateway VPC Attachment ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Transit Gateway VPC Attachment ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Reject Transit Gateway VPC Attachment ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc)

*   Create Default VPC ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create VPC ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete VPC ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Attribute](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-attribute)

*   Describe VPC Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify VPC Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC CIDR Block](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-cidr-block)

*   Associate VPC CIDR Block ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Disassociate VPC CIDR Block ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Classic Link](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-classic-link)

*   Describe VPC Classic Link ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Disable VPC Classic Link ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Enable VPC Classic Link ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Classic Link Dns Support](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-classic-link-dns-support)

*   Describe VPC Classic Link Dns Support ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Disable VPC Classic Link Dns Support ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Enable VPC Classic Link Dns Support ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Endpoint](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-endpoint)

*   Create VPC Endpoint ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify VPC Endpoint ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Endpoint Connection Notification](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-endpoint-connection-notification)

*   Create VPC Endpoint Connection Notification ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify VPC Endpoint Connection Notification ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Endpoint Connections](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-endpoint-connections)

*   Accept VPC Endpoint Connections ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Describe VPC Endpoint Connections ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Reject VPC Endpoint Connections ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Endpoint Service Configuration](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-endpoint-service-configuration)

*   Create VPC Endpoint Service Configuration ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify VPC Endpoint Service Configuration ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Endpoint Service Permissions](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-endpoint-service-permissions)

*   Describe VPC Endpoint Service Permissions ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify VPC Endpoint Service Permissions ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Endpoint Services](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-endpoint-services)

*   Describe VPC Endpoint Services ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Peering Connection](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-peering-connection)

*   Accept VPC Peering Connection ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create VPC Peering Connection ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete VPC Peering Connection ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Reject VPC Peering Connection ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Peering Connection Options](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-peering-connection-options)

*   Modify VPC Peering Connection Options ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPC Tenancy](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpc-tenancy)

*   Modify VPC Tenancy ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPN Connection](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpn-connection)

*   Create VPN Connection ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete VPN Connection ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify VPN Connection ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPN Connection Route](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpn-connection-route)

*   Create VPN Connection Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete VPN Connection Route ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPN Gateway](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpn-gateway)

*   Attach VPN Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create VPN Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete VPN Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Detach VPN Gateway ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPN Tunnel Certificate](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpn-tunnel-certificate)

*   Modify VPN Tunnel Certificate ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [VPN Tunnel Options](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vpn-tunnel-options)

*   Modify VPN Tunnel Options ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Vgw Route Propagation](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#vgw-route-propagation)

*   Disable Vgw Route Propagation ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Enable Vgw Route Propagation ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Volume](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#volume)

*   Attach Volume ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Create Volume ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Delete Volume ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Detach Volume ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Import Volume ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Volume ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Volume Attribute](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#volume-attribute)

*   Describe Volume Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))
*   Modify Volume Attribute ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Volume IO](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#volume-io)

*   Enable Volume IO ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Volume Status](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#volume-status)

*   Describe Volume Status ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

### [Volumes Modifications](https://github.com/api-evangelist/aws/blob/master/ec2/README.md#volumes-modifications)

*   Describe Volumes Modifications ([Docs](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_WithdrawByoipCidr.html))

I am working my way through the full list of AWS services—we will see how many I can get done by the time re:Invent happens. I’m looking to get a full stack of reference collections available for the most popular of the AWS services, but then also work to deliver some more meaningful capability and workflow collections that speak to specific busine